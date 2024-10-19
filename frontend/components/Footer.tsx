"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import Logo from "./Logo";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex pb-2">
      <Link
        href={url}
        className={`hover:dark:text-violet-400 ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function CategoryLink({ attributes }: CategoryLink) {
  return (
    <li className="flex pb-2">
      <Link
        href={`/articles/${attributes.slug}`}
        className="hover:dark:text-violet-400"
      >
        {attributes.name}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite size={42} />;
    case "TWITTER":
      return <AiFillTwitterCircle size={42} color="#1DA1F2" />;
    case "YOUTUBE":
      return <AiFillYoutube size={42} color="red" />;
    case "DISCORD":
      return <FaDiscord size={42} color="#5865F2" />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  categoryLinks,
  legalLinks,
  socialLinks,
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  categoryLinks: Array<CategoryLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="py-6 mb-12 dark:bg-black dark:text-gray-50">
      <div className="container px-6 mx-auto space-y-6 border-top border-solid purple-border">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center ">
          <div className="pb-6 lg:col-span-2 space-y-4 px-4 ">
            <Logo src={logoUrl}>
              {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
            </Logo>
            <div className="flex  pt-4 space-x-4 lg:pt-0">
              {socialLinks.map((link: FooterLink) => {
                return (
                  <a
                    key={link.id}
                    rel="noopener noreferrer"
                    href={link.url}
                    title={link.text}
                    target={link.newTab ? "_blank" : "_self"}
                    className="flex items-center justify-center w-10 h-10 rounded-full "
                  >
                    <RenderSocialIcon social={link.social} />
                  </a>
                );
              })}
            </div>
            <div className="flex">
              <span className="mr-2">
                {/* theme icons */}©{new Date().getFullYear()}
                <br />
                Future is bright
                <br />
                All rights reserved
              </span>
            </div>
            <ul className="flex flex-col">
              {legalLinks.map((link: FooterLink) => (
                <Link
                  href={link.url}
                  className="text-gray-400 hover:text-gray-300 mr-2 mt-2"
                  key={link.id}
                >
                  {link.text}
                </Link>
              ))}
            </ul>
            <button
              onClick={() => {
                console.log({ asd: localStorage.getItem("theme") });
                console.log(theme);
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          <div className=" text-center md:text-left ">
            <p className="pb-1 text-lg text-left font-bold">Categories</p>
            <ul>
              {categoryLinks.map((link: CategoryLink) => (
                <CategoryLink key={link.id} {...link} />
              ))}
            </ul>
          </div>

          {/* <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg text-left font-bold">Menu</p>
            <ul>
              {menuLinks.map((link: FooterLink) => (
                <FooterLink key={link.id} {...link} />
              ))}
            </ul>
          </div> */}
        </div>

        {/* <button onClick={toggleDarkMode}>Toggle Dark Mode</button> */}
      </div>
    </footer>
  );
}
