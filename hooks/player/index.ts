"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { profileMainSchema } from "../../types/user";
console.log(profileMainSchema)
// import { useRouter } from "next/router";
export const useProfileSetup = (userId: string) => {
  // const { data } = useQuery({
  //   queryKey: ["group-info"],
  //   queryFn: () => onGetGroupInfo(groupid),
  // })

  // const jsonContent = data?.group?.jsonDescription
  //   ? JSON.parse(data?.group?.jsonDescription as string)
  //   : undefined

  // const [onJsonDescription, setJsonDescription] = useState<
  //   JSONContent | undefined
  // >(jsonContent)

  // const [onDescription, setOnDescription] = useState<string | undefined>(
  //   data?.group?.description || undefined,
  // )

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    watch,
    setValue,
  } = useForm<z.infer<typeof profileMainSchema>>({
    resolver: zodResolver(profileMainSchema),
    mode: "onChange",
  });
  // const [previewIcon, setPreviewIcon] = useState<string | undefined>(undefined)
  // const [previewThumbnail, setPreviewThumbnail] = useState<string | undefined>(
  //   undefined,
  // )

  // useEffect(() => {
  //   const previews = watch(({ thumbnail, icon }) => {
  //     if (!icon) return
  //     if (icon[0]) {
  //       setPreviewIcon(URL.createObjectURL(icon[0]))
  //     }
  //     if (thumbnail[0]) {
  //       setPreviewThumbnail(URL.createObjectURL(thumbnail[0]))
  //     }
  //   })
  //   return () => previews.unsubscribe()
  // }, [watch])

  // const onSetDescriptions = () => {
  //   const JsonContent = JSON.stringify(onJsonDescription)
  //   setValue("jsondescription", JsonContent)
  //   setValue("description", onDescription)
  // }

  // useEffect(() => {
  //   onSetDescriptions()
  //   return () => {
  //     onSetDescriptions()
  //   }
  // }, [onJsonDescription, onDescription])

  const { mutate: update, isSuccess, isLoading } = useMutation({
    mutationKey: ["profile-settings"],
    mutationFn: async (values: z.infer<typeof profileMainSchema>) => {
      if (values.profileImage && values.profileImage.length > 0) {
        // const uploaded = await upload.uploadFile(values.profileImage[0]);
        // const updated = await onUpDateGroupSettings(
        //   groupid,
        //   "IMAGE",
        //   uploaded.uuid,
        //   `/group/${groupid}/settings`
        // );
        // if (updated.status !== 200) {
        //   return toast("Error", {
        //     description: "Oops! looks like your form is empty",
        //   });
        // }
      }

      return toast("Success", {
        description: "Group data updated",
      });
    },
  });
  // const router = useRouter();
  const onUpdate = handleSubmit(async (values) => update(values));
  // if (isSuccess) router.push(`/group/create`);

  return {
    register,
    errors,
    onUpdate,
    isLoading,
    isSuccess,
    setValue,
    watch,
    reset
  };
};
