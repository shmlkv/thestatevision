import ResourceSubmit from "@/components/forms/ResourceSubmit";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";

export default async function Resources() {
  const user = await getUserMeLoader();
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Add new resource
      </h1>
      <ResourceSubmit user={user} />
    </div>
  );
}
