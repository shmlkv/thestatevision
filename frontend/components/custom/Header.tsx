"use client";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();
  return (
    <div className="space-y-6 py-4 z-1000 text-white max-w-[200px] w-full">
      test
    </div>
  );
}

export default Header;
