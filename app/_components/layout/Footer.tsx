"use client";

import Image from "next/image";
import Link from "next/link";
import { openToast } from "../common/toast";

const FOOTER_CONTENTS = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Agent OS", href: "/", onClick: openToast },
      { label: "Youtube", href: "https://www.youtube.com/@wrtnlabs" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Agentica", href: "https://wrtnlabs.io/agentica" },
      { label: "Autoview", href: "https://wrtnlabs.io/autoview" },
      { label: "Github", href: "https://github.com/wrtnlabs" },
      { label: "Docs", href: "https://wrtnlabs.io/agentica/docs" },
    ],
  },
];

export default function Footer() {
  const linkClassName =
    "cursor-pointer relative w-fit text-lg! text-zinc-500 hover:text-zinc-100 before:invisible before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-zinc-100 before:transition-transform before:duration-250 before:ease-linear before:content-[''] hover:before:visible hover:before:scale-x-100 md:text-[21px]";

  return (
    <footer className="grid grid-cols-2 bg-zinc-900 px-4 py-32 md:h-[484px] md:grid-cols-4 md:px-16 md:pt-24 md:pb-10">
      <div className="hidden h-full flex-col justify-between md:flex">
        <Image
          src="/images/logo-white.svg"
          alt="logo"
          width={121}
          height={28}
        />
        <p className="text-sm text-zinc-600">© 2025 Wrtn Labs</p>
      </div>
      <div className="hidden md:block" />
      {FOOTER_CONTENTS.map(({ title, links }) => (
        <nav key={title} className="flex flex-col gap-6 md:gap-3 md:pl-6">
          <p className="text-sm text-gray-50 md:text-lg">{title}</p>
          <div className="flex flex-col gap-6">
            {links.map(({ label, href, onClick }) => {
              if (onClick)
                return (
                  <p key={label} onClick={onClick} className={linkClassName}>
                    {label}
                  </p>
                );
              return (
                <Link
                  className={linkClassName}
                  key={label}
                  href={href}
                  target="_blank"
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>
      ))}
    </footer>
  );
}
