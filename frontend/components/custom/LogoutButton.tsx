import { LogOut } from "lucide-react";
import { logoutAction } from "../../data/actions/auth-actions";

export function LogoutButton() {
  return (
    // <form action={logoutAction}>
    <div onClick={logoutAction} className="cursor-pointer">
      <LogOut className="w-6 h-6 hover:text-primary" />
    </div>
    // </form>/
  );
}
