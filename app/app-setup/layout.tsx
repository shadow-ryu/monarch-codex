// import GlassCard from "@/components/global/GlassCard"
// import { redirect } from "next/navigation"

type Props = {
    children: React.ReactNode;
  };
  
  const onBoardingLayout = async ({ children }: Props) => {
    return (
      <div className=" h-screen w-full flex justify-center items-center bg-black">
        <div className="flex flex-col justify-center h-full w-full items-center  gap-4  ">
          {children}
        </div>
      </div>
    );
  };
  
  export default onBoardingLayout;
  