import Link from "next/link";
import { Button } from "../ui/button";

export const SideBarLink = ({ href, Icon, text, path, blank }: any) => {
  const isSelected =
    (href == "./" && path == "/en") || path.includes("/en/" + href);
  return (
    <Button
      variant={isSelected ? "secondary" : "ghost"}
      size="sm"
      className={`w-full justify-start  transition-all duration-150 ease-in-out ${isSelected ? "" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
      asChild
    >
      <Link
        href={href.includes("http") ? href : `/${href}`}
        target={blank ? "_blank" : "_self"}
      >
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {text}
      </Link>
    </Button>
  );
};
