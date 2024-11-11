import Image from "next/image";
import React from "react";
import logo from "@/public/logo-build.png";
import { Button } from "../ui/button";
const GettingCard = ({handleClick}) => {
  return (
    <div className="text-center space-y-4 p-7">
      <div className="w-32 h-32 mx-auto">
        <Image
          src={logo}
          alt="Code Monard Logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h2 className="text-2xl font-bold text-[#8ca0e0]">
        Embark on Your Coding Adventure!
      </h2>
      <Button variant={"secondary"} className=" rounded-[5px]  bg-[#7e40cb] hover:bg-[#3c227f]" onClick={handleClick}> Getting started</Button>
    </div>
  );
};

export default GettingCard;
