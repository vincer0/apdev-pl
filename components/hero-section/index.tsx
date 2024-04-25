import Menu from "../menu";

export default function HeroSection() {
  return (
    <section className="apd-hero flex flex-col">
      <div>
        <p className="text-xl sm:text-3xl font-thin">Hello,</p>
        <h1 className="text-3xl sm:text-6xl font-bold my-2">I&apos;m Adam</h1>
        <h3 className="text-xl sm:text-3xl font-thin">
          <span className="text-secondaryText">{`<front-end />`}</span>
          developer
        </h3>
        <h3 className="text-xl sm:text-3xl font-thin pt-4">
          since <span className="text-secondaryText">{`<2018 />`}.</span>
        </h3>
      </div>
      <Menu />
    </section>
  );
}
