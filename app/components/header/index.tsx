import { montserrat } from "@/app/fonts";
import ExternalLink from "../external-link";
import { Github, LinkedIn } from "../icons";

export default function Header() {
  return (
    <header>
      <div
        className={`${montserrat.className} p-3 bg-header shadow-md flex justify-between`}
      >
        <div>
          <span className="font-bold text-2xl">APDEV.PL</span>
          <span className="ml-2">Adam Pasierb</span>
        </div>
        <div className="flex gap-6">
          <ExternalLink href="https://www.github.com" icon={<Github />} />
          <ExternalLink href="https://www.linkedin.com" icon={<LinkedIn />} />
        </div>
      </div>
    </header>
  );
}
