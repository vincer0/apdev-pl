import LinkButton from "../link-button";

export default function Menu() {
  return (
    <div className="flex gap-4 flex-grow items-center xl:justify-between flex-wrap">
      <LinkButton href="#about-me" label="About Me" className="basis-1/4" />
      <LinkButton
        href="#experience"
        label="Experience & Education"
        className="basis-1/4"
      />
      <LinkButton
        href="#projects"
        label="Projects Overview"
        className="basis-1/4"
      />
    </div>
  );
}
