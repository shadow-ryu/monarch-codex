import AnimationContainer from "@/components/home/animation-container";
import BentoCard from "@/components/home/bento-card";
import BentoGrid,{CARDS } from "@/components/home/bento-grid";
import MagicBadge from "@/components/home/magic-badge";
import MagicCard from "@/components/home/magic-card";
import MaxWidthWrapper from "@/components/home/max-width-wrapper";
import Navbar from "@/components/home/Navbar";
import { Button } from "@/components/ui/button";
import { PROCESS } from "@/lib/constant/home";

import { currentUser } from "@clerk/nextjs/server";
import { ArrowRightIcon } from "lucide-react";

import Link from "next/link";

const HomePage = async () => {
  const user = await currentUser();

  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className=" w-full  bg-neutral-950 rounded-md mt-[5rem]  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="overflow-x-hidden scrollbar-hide size-full h-full ">
          {/* Hero Section */}
          <MaxWidthWrapper>
            <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
              <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                  Transform your dev tasks into{"  "}
                  <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
                    epic RPG rewards
                  </span>
                </h1>
                <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
                  Code. Level Up. Conquer.
                  <br className="hidden md:block" />
                  <span className="hidden md:block">
                    Transform everyday development tasks into epic gaming
                    achievements
                  </span>
                </p>
                <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
                  <Button variant={"secondary"} asChild>
                    <Link
                      href={user ? "/dashboard" : "/auth/sign-in"}
                      className="flex items-center"
                    >
                      Start creating for free
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </AnimationContainer>
            </div>
          </MaxWidthWrapper>

          {/* Features Section */}
          <MaxWidthWrapper className="pt-10">
            <AnimationContainer delay={0.1}>
              <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
                <MagicBadge title="Features" />
                <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                  Epic Features for Developers
                </h2>
                <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                  Everything you need to code and conquer
                </p>
              </div>
            </AnimationContainer>
            <AnimationContainer delay={0.2}>
              <BentoGrid className="py-8">
                {CARDS.map((feature, idx) => (
                  <BentoCard key={idx} {...feature} />
                ))}
              </BentoGrid>
            </AnimationContainer>
          </MaxWidthWrapper>

          {/* Process Section */}
          <MaxWidthWrapper className="py-10">
            <AnimationContainer delay={0.1}>
              <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                <MagicBadge title="The Process" />
                <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                  Effortless link management in {PROCESS.length} steps
                </h2>
                <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                  Follow these simple steps to optimize, organize, and share
                  your links with ease.
                </p>
              </div>
            </AnimationContainer>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
              {PROCESS.map((process, id) => (
                <AnimationContainer delay={0.2 * id} key={id}>
                  <MagicCard className="group md:py-8">
                    <div className="flex flex-col items-start justify-center w-full">
                      <process.icon
                        strokeWidth={1.5}
                        className="w-10 h-10 text-foreground"
                      />
                      <div className="flex flex-col relative items-start">
                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                          {id + 1}
                        </span>
                        <h3 className="text-base mt-6 font-medium text-foreground">
                          {process.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </MagicCard>
                </AnimationContainer>
              ))}
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
