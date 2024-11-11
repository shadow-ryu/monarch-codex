"use server"

import { client } from "@/lib/prisma"

export const handleUser = async (
  data: {
    firstname: string
    lastname: string
    id: string
    profileImage: string
    created_at: number
    username: string
    updated_at: number
  },
  isUpdate = false
) => {
  try {
    if (isUpdate) {
      // For update, exclude id and profileImage
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, profileImage, ...updateData } = data
      
      const updatedUser = await client.user.update({
        where: { id },
        data: updateData,
      })

      if (updatedUser) {
        return {
          status: 200,
          message: "User successfully updated",
          id: updatedUser.id,
        }
      }
    } else {
      // For create, use all data
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
    }

    return {
      status: 400,
      message: `User could not be ${isUpdate ? 'updated' : 'created'}! Try again`,
    }
  } catch (error) {
    return {
      status: 400,
      message: "Oops! something went wrong. Try again ",
      error
    }
  }
}
