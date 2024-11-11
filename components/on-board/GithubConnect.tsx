import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const GithubConnect = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Main content */}
      <div className="flex-grow flex items-center">
        <div className="text-center space-y-4 w-full">
          <Github className="w-16 h-16 mx-auto text-[#e2e5f7]" />
          <h2 className="text-2xl font-bold text-[#8ca0e0]">
            Link Your GitHub Account
          </h2>
          <p className="text-[#e2e5f7]">
            Connect your GitHub to sync your projects and boost your Code Monard
            experience!
          </p>
          <Link
            href={"https://github.com/apps/moarnch-codex/installations/new"}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-[#3c227f] hover:bg-[#7e40cb] text-[#e2e5f7]"
            )}
          >
            Connect GitHub
          </Link>
          <p className="text-sm text-[#8ca0e0]">
            This step is optional. You can always connect later.
          </p>
        </div>
      </div>

      {/* Launch link */}
      <div className="flex justify-end mt-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-[#8ca0e0] hover:text-[#e2e5f7] transition-colors duration-300 group"
        >
          <span className="font-medium">Launch Dashboard</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default GithubConnect;
