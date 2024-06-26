import Link from "next/link";
import { montserrat } from "@/app/fonts";
import ExternalLink from "../external-link";
import { Github, LinkedIn } from "../icons";

export default function Header() {
  return (
    <header>
      <div
        className={`${montserrat.className} p-3 bg-header shadow-md flex justify-between`}
      >
        <Link href="/">
          <div>
            <span className="font-bold text-2xl">APDEV.PL</span>
            <span className="ml-2 hidden sm:inline">Adam Pasierb</span>
          </div>
        </Link>
        <div className="flex gap-6">
          <ExternalLink
            href="https://www.github.com"
            icon={<Github />}
            ariaLabel="Link to check out my github page"
          />
          <ExternalLink
            href="https://www.linkedin.com"
            icon={<LinkedIn />}
            ariaLabel="Link to my linkedin page"
          />
        </div>
      </div>
    </header>
  );
}
