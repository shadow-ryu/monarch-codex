"use server"

import { client } from "@/lib/prisma"

export const onCreateUser = async (data: {
  firstname: string
  lastname: string
  id: string
  profileImage:string
  created_at:number
  username:string
  updated_at:number
}) => {
  try {
    const createdUser = await client.user.create({
      data: {
        ...data,
      },
    })

    if (createdUser) {
      return {
        status: 200,
        message: "User successfully created",
        id: createdUser.id,
      }
    }

    return {
      status: 400,
      message: "User could not be created! Try again",
    }
  } catch (error) {
    return {
      status: 400,
      message: "Oops! something went wrong. Try again ",
      error
    }
  }
}

// export const onSignInUser = async (clerkId: string) => {
//   try {
//     const loggedInUser = await client.user.findUnique({
//       where: {
//         clerkId,
//       },
//       select: {
//         id: true,
//         group: {
//           select: {
//             id: true,
//             channel: {
//               select: {
//                 id: true,
//               },
//               take: 1,
//               orderBy: {
//                 createdAt: "asc",
//               },
//             },
//           },
//         },
//       },
//     })

//     if (loggedInUser) {
//       if (loggedInUser.group.length > 0) {
//         return {
//           status: 207,
//           id: loggedInUser.id,
//           groupId: loggedInUser.group[0].id,
//           channelId: loggedInUser.group[0].channel[0].id,
//         }
//       }

//       return {
//         status: 200,
//         message: "User successfully logged in",
//         id: loggedInUser.id,
//       }
//     }

//     return {
//       status: 400,
//       message: "User could not be logged in! Try again",
//     }
//   } catch (error) {
//     return {
//       status: 400,
//       message: "Oops! something went wrong. Try again",
//       error
//     }
//   }
// }