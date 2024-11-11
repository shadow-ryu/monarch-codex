import { client } from "@/lib/prisma";
import { InstallationWebhook } from "@/types/type";

export async function handleGithubInstallation(payload: InstallationWebhook) {
  try {
    // Extract username from the payload
    const githubUsername = payload.installation.account.login;

    // Find the user in our database
    const user = await client.user.findUnique({
      where: {
        username: githubUsername,
      },
    });

    if (!user) {
      throw new Error(`User not found with GitHub username: ${githubUsername}`);
    }
    await client.user.update({
      where: { id: user.id },
      data: {
        github: true,
        githubInstallationId: String(payload.installation.id),
        githubID: payload.installation.account.id,
      },
    });
    // Create repositories array for bulk upsert
    const repositories = payload.repositories.map((repo) => ({
      id: String(repo.id), // Convert to string if your ID field is string
      userId: user.id,
      name: repo.name,
      fullName: repo.full_name,
      nodeId: repo.node_id,
      visibility: repo.private ? "private" : "public",
      // Set default values for required fields
      url: `https://github.com/${repo.full_name}`,
      stars: 0,
      forks: 0,
    }));

    // Perform bulk upsert operation
    const result = await client.$transaction(
      repositories.map((repo) =>
        client.githubRepository.upsert({
          where: {
            fullName: repo.fullName,
          },
          create: repo,
          update: {
            visibility: repo.visibility,
            updatedAt: new Date(),
          },
        })
      )
    );
    return {
      success: true,
      message: `Successfully synchronized ${result.length} repositories for user ${githubUsername}`,
      repositories: result,
    };
  } catch (error) {
    console.error("Error handling GitHub installation webhook:", error);
    throw new Error("Failed to process GitHub installation webhook");
  }
}
