"use client";
import { CalendarCheck2, LibraryBig, Text } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { GiCongress } from "react-icons/gi";
import Logo from "./Logo";
import { SideBarLink } from "./custom/SideBarLink";

interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  href: string;
  Icon: any;
  blank: boolean;
  isNew: boolean;
}

interface MobileNavLink extends NavLink {
  closeMenu: () => void;
}

export function NavLink({ url, text }: NavLink) {
  // const path = usePathname();
  // ${path === url && "dark:text-violet-400 dark:border-violet-400"
  // }}
  return (
    <li className="flex">
      <Link
        href={url}
        className={`flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent`}
      >
        {text}
      </Link>
    </li>
  );
}

function MobileNavLink({ url, text, closeMenu }: MobileNavLink) {
  // const path = usePathname();
  // ${path === url && "dark:text-violet-400 dark:border-violet-400"
  // }}
  const handleClick = () => {
    closeMenu();
  };
  return (
    <a className="flex">
      <Link
        href={url}
        onClick={handleClick}
        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-900 `}
      >
        {text}
      </Link>
    </a>
  );
}

export default function Navbar({
  // links,
  logoUrl,
  logoText,
  user,
}: {
  links: Array<NavLink>;
  logoUrl: string | null;
  logoText: string | null;
  user: any;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const links = [
    {
      href: "articles",
      Icon: Text,
      text: "Articles",
    },
    {
      href: "resources",
      Icon: LibraryBig,
      text: "Resources",
    },
    {
      href: "events",
      Icon: CalendarCheck2,
      text: "Events",
    },
    {
      href: "https://congress.futurestate.tv",
      Icon: GiCongress,
      text: "CONGRESS",
      

      isBlank: true,
    },
  ];
  return (
    <div className="py-4 z-10 relative  dark:text-gray-100">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <div className="relative">
          <Logo src={logoUrl}>
            {logoText && <h2 className="text-2xl font-bold">FUTURE STATE</h2>}
          </Logo>
        </div>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {links.map((item) => (
              <SideBarLink key={item.href} {...item} />
            ))}
            {/* {user.ok ? (
              <SideBarLink
                newTab={false}
                id={14}
                url="/en/dashboard"
                text="Dashboard"
              />
            ) : (
              <></>
              // <NavLink newTab={false} id={14} url="/en/login" text="Login" />
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
}
