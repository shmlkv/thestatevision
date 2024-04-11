import Link from "next/link";
import { getUserMeLoader } from "../../data/services/get-user-me-loader";
import { LogoutButton } from "./LogoutButton";

interface AuthUserProps {
  username: string;
  email: string;
}

export function LoggedInUser({
  userData,
}: {
  readonly userData: AuthUserProps;
}) {
  return (
    <div className="flex gap-2">
      <Link href="/" className="font-semibold hover:text-primary">
        {userData.username}
      </Link>
      <LogoutButton />
    </div>
  );
}

interface HeaderProps {
  data: {
    logoText: {
      id: number;
      text: string;
      url: string;
    };
    ctaButton: {
      id: number;
      text: string;
      url: string;
    };
  };
}

export async function Header() {
  const user = await getUserMeLoader();
  console.log(user);

  // const { logoText, ctaButton } = data;
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md dark:bg-gray-800">
      {/* <Logo text={logoText.text} /> */}
      <div className="flex items-center gap-4">
        {user.ok ? (
          <LoggedInUser userData={user.data} />
        ) : (
          <div />
          // <Link >
          // <Button>{ctaButton.text}</Button>
          // </Link>
        )}
      </div>
    </div>
  );
}
