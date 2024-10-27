
// import GlassCard from "@/components/global/GlassCard"
// import { redirect } from "next/navigation"

type Props = {
  children: React.ReactNode
}

const AuthLayout = async ({ children }: Props) => {


  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center h-full w-full items-center  gap-4  ">
        <h2 className="text-4xl font-bold text-themeTextWhite">Monarch Codex.</h2>
            {children}
      </div>
    </div>
  )
}

export default AuthLayout