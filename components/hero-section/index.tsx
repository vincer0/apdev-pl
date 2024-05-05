import Menu from "../menu";

export default function HeroSection() {
  return (
    <section className="apd-hero flex flex-col pt-8 pb-4">
      <div className="flex flex-col basis-1/2 pb-4">
        <p className="text-xl md:text-3xl font-thin">Hello,</p>
        <h1 className="text-3xl md:text-6xl font-bold my-2">I&apos;m Adam</h1>
        <h2 className="text-xl text-center mb-2 md:mb-0 md:text-left md:text-3xl font-thin">
          <span className="text-apdRed">{`<front-end />`}</span>
          developer
        </h2>
        <h3 className="flex-grow text-xl text-right md:text-left md:text-3xl font-thin">
          since <span className="text-apdRed">{`<2018 />`}.</span>
        </h3>
        <h4 className="text-md font-bold text-center">{`Let's build something together!`}</h4>
      </div>
      <Menu />
    </section>
  );
}
