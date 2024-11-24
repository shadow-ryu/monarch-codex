// import { handleUser } from "@/actions/auth";

// // Define a type for the payload if it's known
// interface UserPayload {
//   id: string;
//   firstname: string;
//   lastname: string;
//   profileImage: string;
//   created_at: number;
//   username: string;
//   updated_at: number;
//   email?: string; // Optional if the user can update their email
// }

// export async function POST(req: Request) {
//   try {
//     // Get the payload from the request body
//     const payload: UserPayload = await req.json();

//     // Pass the payload to handleUser with the isUpdate flag set to true
//     const data = await handleUser(payload, true);
//     console.log("User updated successfully:", data);  // Log the response for debugging

//     // Return a success response with a status message or the updated data
//     return new Response(
//       JSON.stringify({ message: "User updated successfully", data }), // Send back a success message and updated data
//       { status: 200, headers: { "Content-Type": "application/json" } }
//     );
//   } catch (error: unknown) {
//     console.error("Error updating user:", error);

//     // Return an error response with a message
//     return new Response(
//       JSON.stringify({
//         message: "Error updating user",
//         error: error instanceof Error ? error.message : "Unknown error", // Safely access error message
//       }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }
