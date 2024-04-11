"use server";
import { getUserMeLoader } from "../data/services/get-user-me-loader";
import { NavLink } from "./Navbar";

export default async function DashboardLink({
  placeholder,
  text,
}: {
  placeholder: string;
  text: string;
}) {
  const user = await getUserMeLoader();

  return (
    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
      {user ? (
        "daashboard"
      ) : (
        <NavLink newTab={false} id={14} url="/en/login" text="Login" />
      )}
    </div>
  );
}
