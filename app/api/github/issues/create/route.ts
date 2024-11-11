import { createGitHubIssueWithApp } from "@/lib/github";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Input validation schema

// export async function POST(request: Request) {
//   try {
//     // Parse request body
//     const body = await request.json();

//     const { owner, repo, title, body: issueBody, installationId } = body;

//     // Create issue
//     const issue = await createIssue({
//       owner,
//       repo,
//       title,
//       body: issueBody,
//       installationId,
//     });

//     // Return success response
//     return NextResponse.json(
//       {
//         issue,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error creating GitHub issue:", error);

//     // Handle specific error types
//     if (error instanceof Error) {
//       if (error.message.includes("Not Found")) {
//         return NextResponse.json(
//           { error: "Repository not found" },
//           { status: 404 }
//         );
//       }

//       if (error.message.includes("unauthorized")) {
//         return NextResponse.json(
//           { error: "Unauthorized access" },
//           { status: 401 }
//         );
//       }
//     }

//     // Generic error response
//     return NextResponse.json(
//       {
//         error: "Failed to create issue",
//         message: error instanceof Error ? error.message : "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Unauthorized",
        }),
        { status: 401 }
      );
    }

    const { title, body, owner, repo, installationId } = await req.json();

    // Get these from your environment variables
    const githubAppConfig = {
      appId: process.env.GITHUB_APP_ID!,
      privateKey: process.env.GITHUB_PRIVATE_KEY!,
      installationId: installationId, // Optional
    };
console.log(githubAppConfig,"githubAppConfig")
    const result = await createGitHubIssueWithApp({
      config: githubAppConfig,
      issueData: {
        owner,
        repo,
        title,
        body,
        labels: [],
        assignees: [],
      },
    });

    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: result.error,
        }),
        { status: result.statusCode || 500 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: result.data,
      })
    );
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal server error",
      }),
      { status: 500 }
    );
  }
}
