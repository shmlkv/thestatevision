import { getUserMeLoader } from "../../../../data/services/get-user-me-loader";

export default async function AccountRoute() {
  const user = await getUserMeLoader();
  const userData = user.data;
  const userImage = userData?.image;
  console.log({ user });
  return (
    <div className="  p-4 w-full">
      <h1 className="col-span-5 text-4xl font-bold mb-4">Events</h1>
      <iframe
        src="https://lu.ma/embed/calendar/cal-ewfnCKS9Kb99Dv5/events"
        width="100%"
        height="750px"
        style={{ borderRadius: "8px" }}
        // allowfullscreen=""
        aria-hidden="false"
        // tabindex="0"
      ></iframe>
      {/* <ProfileImageForm data={userImage} className="col-span-2" /> */}
    </div>
  );
}
