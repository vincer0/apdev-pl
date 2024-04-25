import { Chevron } from "../icons";
import LinkButton from "../link-button";

export default function Menu() {
  return (
    <div className="flex flex-grow items-center justify-between">
      <LinkButton href="#about-me" label="About Me" />
      <LinkButton href="#experience" label="Experience" />
      <LinkButton href="#education" label="Education" />
      <LinkButton href="#projects" label="Projects" />
    </div>
  );
}
