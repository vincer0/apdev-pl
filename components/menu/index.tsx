import LinkButton from "../link-button";
import { EduHat, CodeSheet, Suitcase, Person } from "../icons";

// TODO probably classnames go into LinkButton
export default function Menu() {
  return (
    <nav className="content flex gap-2 md:gap-4 flex-wrap justify-center basis-1/2">
      <LinkButton
        className="apd-link-button min-w-[140px] xs:w-auto flex-1 rounded-lg bg-black/[0.54]"
        href="#about-me"
        label="About Me"
        icon={Person}
      />
      <LinkButton
        className="apd-link-button min-w-[140px] xs:w-auto flex-1 rounded-lg bg-black/[0.54]"
        href="#expedu"
        label="Experience & Education"
        icon={[
          { id: 1, element: Suitcase },
          { id: 2, element: EduHat },
        ]}
      />
      <LinkButton
        className="apd-link-button min-w-[140px] flex-1 basis-full md:basis-0 xs:w-auto rounded-lg bg-black/[0.54]"
        href="#projects"
        label="Projects Overview"
        icon={CodeSheet}
      />
    </nav>
  );
}
