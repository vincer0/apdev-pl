import ExternalLink from "../external-link";
import { Github, LinkedIn, Mail } from "../icons";

export default function SideMenu() {
  return (
    <div className="hidden fixed bottom-0 md960:flex flex-col justify-center items-center gap-8 md960:left-[50px] xl:left-[100px]">
      <ExternalLink href="https://www.github.com" icon={<Github />} />
      <ExternalLink href="https://www.linkedin.com" icon={<LinkedIn />} />
      <ExternalLink href="mailto:dev.adam.pasierb@gmail.com" icon={<Mail />} />
      <div className="bg-secondaryText w-[1px] h-52"></div>
    </div>
  );
}
