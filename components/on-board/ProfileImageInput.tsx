import React, { useState } from "react";
import { Camera } from "lucide-react";
import { Input } from "../ui/input";
import Image from "next/image";

const ProfileImageInput = ({ handleImage, preview }) => {
  // Watch the file input for changes
  //   const fileValue = watch("profileImage");

  // Update preview when file changes
  //   React.useEffect(() => {
  //     if (fileValue?.[0]) {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setPreview(reader.result);
  //       };
  //       reader.readAsDataURL(fileValue[0]);
  //     }
  //   }, [fileValue]);

  return (
    <div className="space-y-4 flex justify-center items-center">
      {/* Hidden file input */}
      <Input
        type="file"
        accept="image/*"
        name="profileImage"
        className="hidden"
        onChange={(e) => handleImage(e)}
      />
      {/* Profile Photo UI */}
      <div className="relative w-24 h-24">
        {/* Profile Photo Circle */}
        <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
          {preview ? (
            <Image
              src={preview}
              alt="Profile Preview"
              width={"100"}
              height={"100"}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="/api/placeholder/96/96"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Upload Icon Button */}
        <button
          type="button"
          onClick={() => {
            // Trigger the hidden file input
            const input = document.querySelector('input[name="profileImage"]');
            input?.click();
          }}
          className="absolute bottom-0 right-0 p-2 bg-primary rounded-full hover:bg-primary/90 transition-colors"
        >
          <Camera className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProfileImageInput;
