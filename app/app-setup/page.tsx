import OnboardCard from "@/components/on-board";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page() {
  try {
    const { userId } = await auth();

    // Redirect if no user is logged in
    if (!userId) {
      redirect("/sign-in");
    }
    console.log(userId, "loggedUser");
    return (
      <div className="w-full h-full flex justify-center items-center">
        <OnboardCard userId={userId} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    // You could either redirect to an error page
    // redirect("/error");
    // Or show an error message
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>Something went wrong. Please try again later.</p>
      </div>
    );
  }
}
