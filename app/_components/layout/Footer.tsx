import clsx from "clsx";
import { HamIcon } from "lucide-react";
import Link from "next/link";

const sectionTitleStyle = clsx(["text-zinc-600"]);
const linkStyle = clsx(["text-zinc-200"]);

const FOOTER_CONTENTS = [
  {
    title: "Developers",
    links: [
      { label: "Github", href: "https://github.com/wrtnlabs" },
      { label: "Docs", href: "https://wrtnlabs.io/blog-overview" },
    ],
  },
  {
    title: "Company",
    links: [{ label: "Wrtn Labs", href: "https://wrtnlabs.io/" }],
  },
];

export default function Footer() {
  return (
    <footer className="flex h-64 justify-between bg-zinc-900 px-16 py-8">
      {/* MEMO: Icon Change @Amber */}
      <HamIcon color="#ffffff" size={72} />
      <div className="flex gap-16">
        {FOOTER_CONTENTS.map(({ title, links }) => (
          <nav key={title} className="flex flex-col gap-1">
            <p className={sectionTitleStyle}>{title}</p>
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className={linkStyle}
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
