import { ProfileForm } from "../../../components/forms/ProfileForm";
import { getUserMeLoader } from "../../../data/services/get-user-me-loader";

export default async function AccountRoute() {
  const user = await getUserMeLoader();
  const userData = user.data;
  const userImage = userData?.image;
  console.log({user});
  return (
    <div className="  p-4">
      {/* <h1 className="col-span-5 text-4xl font-bold">Account</h1> */}
      <ProfileForm data={userData} className="col-span-3" />
      {/* <ProfileImageForm data={userImage} className="col-span-2" /> */}
    </div>
  );
}
