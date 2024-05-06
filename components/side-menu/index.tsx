import ExternalLink from "../external-link";
import { Github, LinkedIn, Mail } from "../icons";

export default function SideMenu() {
  return (
    <div className="hidden fixed bottom-0 2xl:flex flex-col justify-center items-center gap-8 left-[100px]">
      <ExternalLink
        href="https://www.github.com"
        icon={<Github />}
        className="hover:scale-125 hover:transition-transform"
        ariaLabel="Link to check out my github page"
      />
      <ExternalLink
        href="https://www.linkedin.com"
        icon={<LinkedIn />}
        className="hover:scale-125 hover:transition-transform"
        ariaLabel="Link to my linkedin page"
      />
      <ExternalLink
        href="mailto:dev.adam.pasierb@gmail.com"
        icon={<Mail />}
        className="hover:scale-125 hover:transition-transform"
        ariaLabel="Compose contact email"
      />
      <div className="bg-apdRed w-[1px] h-32"></div>
    </div>
  );
}
