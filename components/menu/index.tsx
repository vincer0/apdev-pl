import LinkButton from "../link-button";
import { EduHat, CodeSheet, Suitcase, Person } from "../icons";

export default function Menu() {
  return (
    <div className="flex gap-2 flex-wrap justify-center basis-1/2">
      <LinkButton
        className="w-[140px] rounded-lg bg-apdSecondaryBg"
        href="#about-me"
        label="About Me"
        icon={Person}
      />
      <LinkButton
        className="w-[140px] rounded-lg bg-apdSecondaryBg"
        href="#experience"
        label="Experience & Education"
        icon={[
          { id: 1, element: Suitcase },
          { id: 2, element: EduHat },
        ]}
      />
      <LinkButton
        className="w-[140px] rounded-lg bg-apdSecondaryBg"
        href="#projects"
        label="Projects Overview"
        icon={CodeSheet}
      />
    </div>
  );
}
