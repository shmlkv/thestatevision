"use client";
import { CalendarCheck2, Home, LibraryBig, Text } from "lucide-react";
import { usePathname } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { FaDonate, FaTelegram, FaTwitter } from "react-icons/fa";
import { GiCongress } from "react-icons/gi";
import { PiSealQuestionFill } from "react-icons/pi";
import { SideBarLink } from "./SideBarLink";

function Sidebar() {
  const path = usePathname();
  return (
    <div className="space-y-6 py-4 z-1000 text-white max-w-[200px] w-full">
      <div className="space-y-1">
        <SideBarLink href="./" Icon={Home} text="Home" path={path} />
        <SideBarLink href="dashboard" Icon={CgProfile} text="You" path={path} />
      </div>
      <div className="space-y-1">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight text-black dark:text-white">
          Library
        </h2>
        <div className="space-y-1">
          <SideBarLink
            href="articles"
            Icon={Text}
            text="Articles"
            path={path}
          />
          {/* <SideBarLink
            href="non"
            Icon={LibraryBig}
            text="Resources"
            path={path}
          /> */}
          {/* news */}
          <SideBarLink
            href="resources"
            Icon={LibraryBig}
            text="Resources"
            path={path}
          />
          <SideBarLink
            href="events"
            Icon={CalendarCheck2}
            text="Events"
            path={path}
          />
          <SideBarLink
            href="https://congress.futurestate.tv"
            Icon={GiCongress}
            text="CONGRESS"
            path={path}
            blank
            isNew
          />
        </div>
      </div>
      <div className="space-y-1">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight text-black dark:text-white">
          Links
        </h2>
        <div className="space-y-1">
          {/* <SideBarLink
            href="https://instagram.com/thestate"
            Icon={ArrowUpRightIcon}
            text="Instagram"
            path={path}
          /> */}
          <SideBarLink
            href="about"
            Icon={PiSealQuestionFill}
            text="FAQ"
            path={path}
          />
          <SideBarLink
            href="donate"
            Icon={FaDonate}
            text="Donate"
            path={path}
          />
          <SideBarLink
            href="https://t.me/futurestate_hall"
            Icon={FaTelegram}
            text="Community Hall"
            path={path}
            blank
          />
          <SideBarLink
            href="https://twitter.com/futurestate_tv"
            Icon={FaTwitter}
            text="Twitter"
            path={path}
            blank
          />

          {/* <SideBarLink
            href="dashboard"
            Icon={CgProfile}
            text="Profile"
            path={path}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
