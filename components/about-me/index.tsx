import Image from "next/image";
import SimpleHeading from "../simple-heading";

export default function AboutMe() {
  return (
    <section id="about-me" className="full bg-apdSecondaryBg z-[1] my-[100px]">
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex-1 pt-8">
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
        <div className="relative flex flex-1 justify-center my-10">
          <Image
            src="/me-and-kodi.webp"
            fill
            alt="me and my doggo blurred"
            className="blur-md md:blur-xl -z-[1]"
          />
          <Image
            src="/me-and-kodi.webp"
            width="380"
            height="555"
            alt="me and my doggo"
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
