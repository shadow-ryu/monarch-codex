import { handleUser } from "@/actions/auth";

export async function POST(req: Request) {
  try {
    // Get the payload from the request body
    const payload = await req.json();

    // Pass the payload to handleUser with the isUpdate flag set to true
    const data = await handleUser(payload, true);
    console.log(data);  // For debugging, you can log the response

    // Return a success response with a status message or the updated data
    return new Response(
      JSON.stringify({ message: "User updated successfully", data }), // Send back a success message and updated data
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    
    // Return an error response with a message
    return new Response(
      JSON.stringify({ message: "Error updating user", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
