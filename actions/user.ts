"use server"

import * as z  from "zod";


// Form Schema
export const profileSchema = z.object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username cannot exceed 20 characters"),
    aboutMe: z
      .string()
      .min(10, "Please write at least 10 characters")
      .max(500, "Bio cannot exceed 500 characters"),
    // avatarUrl: z.string().optional(),
  });

export type ProfileFormValues = z.infer<typeof profileSchema>;

export async function saveProfile(formData: ProfileFormValues) {
  
    try {
      // Here you would typically save to your database
      // For example using Prisma:
      // await prisma.profile.create({
      //   data: formData
      // })
      if(formData){
        console.log("first",formData)
      }
  
      return {status: 200, };
    } catch (error) {
        console.log(error)
      return { status: 500, error: "Failed to save profile" };
    }
  }