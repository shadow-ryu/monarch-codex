"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import GlassCard from "../global/GlassCard";
import GettingCard from "./GettingCard";
import ProfileCard from "./ProfileCard";
import { useUserProfileData } from "@/query/userQueries";
import { Loader } from "../global/Loader";
import GithubConnect from "./GithubConnect";

const OnboardCard = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [steps, setSteps] = useState(0);
  
  const { data, isLoading } = useUserProfileData({
    userId,
  });

  // Initialize step from URL parameter on component mount
  useEffect(() => {
    const stepParam = searchParams.get("step");
    if (stepParam) {
      const stepNumber = parseInt(stepParam);
      if (!isNaN(stepNumber) && stepNumber >= 0 && stepNumber <= 2) {
        setSteps(stepNumber);
      }
    }
  }, [searchParams]);

  const handleStepClick = (step: number) => {
    // Update URL with new step
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", step.toString());
    router.push(`?${params.toString()}`, { scroll: false });
    setSteps(step);
  };

  if (isLoading) {
    return (
      <div className="min-h-[400px] w-full flex items-center justify-center">
        <Loader loading={isLoading}>Loading...</Loader>
      </div>
    );
  }

  const handleView = (step: number) => {
    const commonProps = {
      className: "w-full h-full min-h-[400px] flex flex-col justify-between"
    };

    switch (step) {
      case 0:
        return (
          <GettingCard
            {...commonProps}
            handleClick={() => handleStepClick(1)}
          />
        );
      case 1:
        return (
          <ProfileCard
            {...commonProps}
            user={data}
            handleClick={() => handleStepClick(2)}
          />
        );
      case 2:
        return <GithubConnect {...commonProps} />;
      default:
        return <div {...commonProps}>Step not defined</div>;
    }
  };

  return (
    <GlassCard className=" w-[300px] md:w-[40%] h-[400px] md:min-h-[500px] lg:min-h-[600px] p-6 text-white transition-all duration-300">
      <div className="h-full flex flex-col">
        {/* Content */}
        <div className="flex-grow">
          {handleView(steps)}
        </div>
      </div>
    </GlassCard>
  );
};

export default OnboardCard;