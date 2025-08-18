import { Button } from "@/ui/button";
import Link from "next/link";
import { HeroImage } from "./hero-image";
import { WordAnimation } from "./word-animation";
import { CalBooking } from "./cal-booking";

export function Hero() {
  return (
    <section className="mt-[60px] lg:mt-[180px] min-h-[530px] relative lg:h-[calc(100vh-300px)]">
      <div className="flex flex-col">
        <h2 className="mt-6 md:mt-10 max-w-[580px] text-[#878787] leading-tight text-[24px] md:text-[36px] font-medium">
          AI-powered workflow automation for modern <WordAnimation />.
          <br />
          Transform your practice with intelligent document processing, automated reconciliation, and seamless client collaboration.
        </h2>

        <div className="mt-8 md:mt-10">
          <div className="flex items-center space-x-4">
            <CalBooking
              variant="outline"
              className="border-transparent h-11 px-6 dark:bg-[#1D1D1D] bg-[#F2F1EF]"
            >
              Talk to founders
            </CalBooking>

            <a href="/login">
              <Button className="h-11 px-5">Sign in</Button>
            </a>
          </div>
        </div>

        <p className="text-xs text-[#707070] mt-4 font-mono">
          Access your workflow management portal.
        </p>
      </div>

      <HeroImage />
    </section>
  );
}
