import LinkButton from "../link-button";
import { EduHat, CodeSheet, Suitcase, Person } from "../icons";

// TODO probably classnames go into LinkButton
export default function Menu() {
  return (
    <div className="flex gap-2 flex-wrap justify-center basis-1/2">
      <LinkButton
        className="min-w-[140px] xs:w-auto flex-1 rounded-lg bg-apdSecondaryBg md:bg-transparent"
        href="#about-me"
        label="About Me"
        icon={Person}
      />
      <LinkButton
        className="min-w-[140px] xs:w-auto flex-1 rounded-lg bg-apdSecondaryBg md:bg-transparent"
        href="#experience"
        label="Experience & Education"
        icon={[
          { id: 1, element: Suitcase },
          { id: 2, element: EduHat },
        ]}
      />
      <LinkButton
        className="min-w-[140px] flex-1 basis-full md:basis-0 xs:w-auto rounded-lg bg-apdSecondaryBg md:bg-transparent"
        href="#projects"
        label="Projects Overview"
        icon={CodeSheet}
      />
    </div>
  );
}
