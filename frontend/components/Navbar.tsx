"use client";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import Sidebar from "./custom/SideBar";

interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
}

interface MobileNavLink extends NavLink {
  closeMenu: () => void;
}

export function NavLink({ url, text }: NavLink) {
  const path = usePathname();

  return (
    <li className="flex">
      <Link
        href={url}
        className={`flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function MobileNavLink({ url, text, closeMenu }: MobileNavLink) {
  const path = usePathname();
  const handleClick = () => {
    closeMenu();
  };
  return (
    <a className="flex">
      <Link
        href={url}
        onClick={handleClick}
        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-900 ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </a>
  );
}

export default async function Navbar({
  links,
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
  return (
    <div className="py-4 z-10 relative  dark:text-gray-100">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <div className="relative">
          <Logo src={logoUrl}>
            {logoText && <h2 className="text-2xl font-bold">FUTURE STATE</h2>}
          </Logo>
        </div>

        {/* <div className="items-center flex-shrink-0 hidden lg:flex">
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {links.map((item: NavLink) => (
              <NavLink key={item.id} {...item} />
            ))}
            {user.ok ? (
              <NavLink
                newTab={false}
                id={14}
                url="/en/dashboard"
                text="Dashboard"
              />
            ) : (
              <></>
              // <NavLink newTab={false} id={14} url="/en/login" text="Login" />
            )}
          </ul>
        </div> */}


      </div>
    </div>
  );
}
