import Image from "next/image";
import Menu from "../menu";
import MeAndMountains from "@/public/me-and-mountains-flipped.webp";

export default function HeroSection() {
  return (
    <section className="apd-hero full relative flex flex-col pt-8 pb-4">
      <Image
        alt="hero section background image"
        aria-hidden="true"
        src={MeAndMountains}
        fill
        className="full object-cover opacity-15 -z-[1]"
        priority
      />
      <div className="content flex flex-col pb-4 justify-center">
        <p className="text-xl md:text-3xl font-thin">Hello,</p>
        <hgroup>
          <h1 className="text-3xl md:text-6xl font-bold my-2">I&apos;m Adam</h1>
          <h2 className="text-xl text-center xs:text-left mb-2 md:mb-0 md:text-left md:text-3xl">
            <span className="text-apdRed">{`<front-end /> `}</span>
            developer
          </h2>
          <h3 className="text-xl text-right xs:text-left md:text-left md:text-3xl">
            since <span className="text-apdRed">{`<2018 />`}.</span>
          </h3>
        </hgroup>
        <center className="flex items-center justify-center flex-grow text-md md:text-3xl tracking-none md:tracking-[8px] uppercase">
          <h3>
            {`Let's `}
            <span className="text-apdRed">{` create `}</span>
            <span>something together!</span>
          </h3>
        </center>
      </div>
      <Menu />
    </section>
  );
}
