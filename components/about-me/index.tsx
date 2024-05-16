import Image from "next/image";
import SimpleHeading from "../simple-heading";
import JustMe from "@/public/just-me.jpg";

export default function AboutMe() {
  return (
    <section id="about-me" className="full bg-apdSecondaryBg z-[1] py-12">
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex-1">
          <SimpleHeading label="About Me" />
          <p className="text-xl md:text-2xl font-thin">
            I&apos;m a front-end developer with a passion for designing and
            building user interfaces.
          </p>
          <p className="text-xl md:text-2xl font-thin">
            I&apos;m currently based in London, UK.
          </p>
          <p>Above text was generated with Tabnine free, complete bullsh*t</p>
        </div>
        <div className="relative flex flex-1 justify-center align-center">
          {/* tailwind sets height: auto to <img> - nextjs dont like it */}
          <Image
            src={JustMe}
            alt="me and my doggo"
            className="rounded-3xl blur-md md:blur-xl -z-[1] brightness-[0.5]"
            width={471}
            height={646}
            priority
          />
          <Image
            src={JustMe}
            alt="me and my doggo"
            className="absolute rounded-3xl left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 brightness-[0.65]"
            width={421}
            height={596}
            priority
          />
        </div>
      </div>
    </section>
  );
}
