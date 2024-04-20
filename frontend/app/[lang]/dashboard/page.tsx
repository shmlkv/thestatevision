// import { LogoutButton } from "@/components/custom/LogoutButton";

import { LogoutButton } from "../../../components/custom/LogoutButton";
import { getUserMeLoader } from "../../../data/services/get-user-me-loader";

export default async function DashboardRoute() {
  const user = await getUserMeLoader();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1>Dashboard of {user.data.username}</h1>
    </div>
  );
}
