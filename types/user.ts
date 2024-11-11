import { z } from "zod";

export const profileSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters"),
  aboutMe: z
    .string()
    .min(0, "Please write at least 10 characters")
    .max(500, "Bio cannot exceed 500 characters"),
  // avatarUrl: z.string().optional(),
});

export type ProfileData = {
  id: string;
  profileImage: string;
  gameUsername: string;
  aboutMe: string;
};
