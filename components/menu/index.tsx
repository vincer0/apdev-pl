import LinkButton from "../link-button";
import { EduHat, CodeSheet, Suitcase, Person } from "../icons";

export default function Menu() {
  return (
    <div className="flex gap-4 items-center flex-wrap justify-around basis-1/2">
      <LinkButton href="#about-me" label="About Me" icon={Person} />
      <LinkButton
        href="#experience"
        label="Experience & Education"
        icon={[
          { id: 1, element: Suitcase },
          { id: 2, element: EduHat },
        ]}
      />
      <LinkButton href="#projects" label="Projects Overview" icon={CodeSheet} />
    </div>
  );
}
