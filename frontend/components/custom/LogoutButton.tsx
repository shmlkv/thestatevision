"use client";
import { LogOut } from "lucide-react";
import { logoutAction } from "../../data/actions/auth-actions";

export async function LogoutButton() {
  const handleClick = async () => {
    logoutAction();
    // await fetch('/api/logout', { method: 'POST' });
  };
  return (
    // <form action={logoutAction}>
    <div
      onClick={handleClick}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    >
      <LogOut className="h-4 w-4" />
      Logout
    </div>
    // </form>/
  );
}
