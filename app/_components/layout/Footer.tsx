import { HamIcon } from "lucide-react";
import Link from "next/link";

const FOOTER_CONTENTS = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "https://github.com/wrtnlabs" },
      { label: "Blog", href: "https://wrtnlabs.io/blog-overview" },
      { label: "Documentation", href: "https://github.com/wrtnlabs" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Github", href: "https://github.com/wrtnlabs" },
      { label: "Discord", href: "https://wrtnlabs.io/" },
      { label: "X", href: "https://github.com/wrtnlabs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex h-auto justify-between bg-[#071511] px-16 py-8 md:h-[485px]">
      <div>
        <HamIcon color="#ffffff" size={72} />
        <p className="text-sm text-[#6D8786]">© 2025 Wrtn Labs</p>
      </div>
      <div className="flex gap-16">
        {FOOTER_CONTENTS.map(({ title, links }) => (
          <nav key={title} className="flex flex-col gap-2 md:gap-3">
            <p className="text-sm text-[#E6FDFC] md:text-lg">{title}</p>
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="text-[#6D8786] hover:text-[#E6FDFC]"
              >
                {label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
    </footer>
  );
}
