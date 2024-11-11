"use client";
import { ProfileData } from "@/types/user";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

// Fetch base configuration for setup guide
const fetchUserData = async (userId) => {
  return axios.get(`/api/user/${userId}`);
};

export function useUserProfileData({ userId }) {
  return useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => fetchUserData(userId),
    select: (response) => response.data,
    refetchOnWindowFocus: true,
    keepPreviousData: true,
    placeholderData: [], // Use placeholderData instead of placeholder
  });
}

export function useProfileUpdate(requestOptions) {
  return useMutation({
    mutationFn: (payload: ProfileData) =>
      axios.post("/api/user/update", payload),
    ...requestOptions, // This allows for custom mutation options
  });
}
