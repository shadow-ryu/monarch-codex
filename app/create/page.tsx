// "use client";
// import { SignOutButton } from "@clerk/nextjs";
// import { useState } from "react";

// export default function CreateIssueForm() {
//   const [owner, setOwner] = useState("");
//   const [repo, setRepo] = useState("");
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [installationId, setInstallationId] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("/api/github/issues/create", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         owner: "shadow-ryu",
//         repo: "laonForm",
//         title: "Bug: Navigation not working",
//         body: "The navigation menu is not responding to clicks.",
//         labels: ["bug", "priority-high"],
//         installationId: 56982555,
//       }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       alert(`Issue created: ${data.issue.html_url}`);
//     } else {
//       alert(`Error: ${data.message}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Create Issue</button>
//       <SignOutButton />
//     </form>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page