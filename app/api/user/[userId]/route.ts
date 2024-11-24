import { client } from "@/lib/prisma";
import { NextResponse } from "next/server";
import superjson from "superjson";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  // Validate userId
  if (!/^\d+$/.test(userId)) {
    return NextResponse.json({ error: "Invalid userId format" }, { status: 400 });
  }

  try {
    const userData = await client.user.findFirst({
      where: { id: userId },
    });

    if (!userData) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Serialize user data
    const serializedUserData = superjson.serialize(userData).json;

    return NextResponse.json(serializedUserData, { status: 200 });
  } catch (error) {
    console.error("Error fetching user data:", error);

    return NextResponse.json(
      { error: "An error occurred while fetching user data" },
      { status: 500 }
    );
  }
}
