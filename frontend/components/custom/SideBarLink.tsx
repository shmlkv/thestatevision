import Link from "next/link";
import { Button } from "../ui/button";

export const SideBarLink = ({ href, Icon, text, path, blank }: any) => {
  return (
    <Button
      variant={
        (href == "./" && path == "/en") || "/en/" + href == path
          ? "secondary"
          : "ghost"
      }
      size="sm"
      className="w-full justify-start"
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
