// /app/api/user/[userId]/route.ts
import { client } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = await params;

  try {
    // Fetch user data based on userId
    const userData = await client.user.findFirst({
      where: {
        id: userId,
      },
    });
console.log(userData,"userData")
    if (!userData) {
      // If no user found, return 404
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Convert BigInt to string to make it JSON serializable
    const serializedUserData = JSON.parse(
      JSON.stringify(userData, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

    // Return user data
    return NextResponse.json(serializedUserData, { status: 200 });
  } catch (error) {
    // Return error response in case of failure
    console.error(error); // Log the error for debugging
    return NextResponse.json(
      { error: "An error occurred while fetching user data" },
      { status: 500 }
    );
  }
}
