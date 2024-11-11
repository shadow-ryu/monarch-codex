"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import { Input } from "../ui/input";
import { useAuth } from "@clerk/nextjs";

import { Button } from "../ui/button";
import ProfileImageInput from "./ProfileImageInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { profileSchema } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { useUploadThing } from "@/lib/uploadthing";
import { useProfileUpdate } from "@/query/userQueries";

const ProfileCard = ({ handleClick, user }) => {
  const { profileImage, id, gameUsername, aboutMe } = user;
  const [file, setFile] = useState<File | null>(null);
  // const { userId } = useAuth();
  const { startUpload } = useUploadThing("media");
  const [preview, setPreview] = useState(profileImage || "");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      username: gameUsername,
      aboutMe: aboutMe || "",
    },
  });
  const profileSaveMutation = useProfileUpdate({
    onSuccess: () => {
      // handleToast({ status: true, content: "Saved successfully" });
      handleClick();
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof profileSchema>> = async (
    data
  ) => {
    console.log(data);

    let profileImageUrl = profileImage; // Fallback to existing profileImage if no new file is provided.

    // If there is a new file to upload, handle the upload.
    if (file) {
      try {
        const imgRes = await startUpload([file]);
        console.log(imgRes);
        if (imgRes && imgRes[0]?.url) {
          profileImageUrl = imgRes[0]?.url;
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle the error case (maybe show a toast or error message).
        return;
      }
    }

    // Start the mutation after the image has been processed.
    profileSaveMutation.mutate({
      id: id,
      profileImage: profileImage,
      gameUsername: data.username,
      aboutMe: data.aboutMe,
    });
  };

  // useEffect(() => {
  //   if (profileSaveMutation.isSuccess) {
  //     handleClick();
  //   }
  // }, [handleClick, profileSaveMutation.isSuccess]);
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      // Display a toast with the first error message
      const firstError =
        Object.values(errors)[0]?.message || "An error occurred";
      console.log(firstError, "vrefd");
      toast(firstError);
    }
  }, [errors]);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFile(file);

      if (!file.type.includes("image")) return;

      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        setPreview(imageDataUrl);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className=" w-full md:p-7 text-white flex flex-col items-center justify-center">
      <h3> Profile Setup</h3>
      <form
        className="flex flex-col gap-3 mt-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ProfileImageInput handleImage={handleImage} preview={preview} />

        <Input
          type="text"
          className="account-form_input no-focus text-gray-300 bg-transparent border-gray-600 focus-visible:outline-none"
          {...register("username")}
          placeholder="Username"
        />
        <Textarea
          className="account-form_input no-focus text-gray-300 bg-transparent border-gray-600 focus-visible:outline-none"
          {...register("aboutMe")}
          placeholder="About Me"
        />

        <Button
          type="submit"
          className="rounded-2xl"
          disabled={Object.keys(errors).length > 0}
        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default ProfileCard;
