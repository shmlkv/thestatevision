"use client";

import { PlateEditor } from "../components/Editor";
import LangRedirect from "../components/LangRedirect";
import PageHeader from "../components/PageHeader";
import { getPageBySlug } from "../utils/get-page-by-slug";
// import { Editor } from "../components/plate-ui/editor";

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default async function Profile({
  params,
}: {
  params: { lang: string };
}) {
  const page = await getPageBySlug("editor", params.lang);
  if (page.error && page.error.status == 401)
    throw new Error(
      "Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
    );

  if (page.data.length == 0 && params.lang !== "en") return <LangRedirect />;
  if (page.data.length === 0) return null;

  return (
    <div>
      <PageHeader heading="Editor" text="" />
      <div className="max-w-[1200px] m-auto">
        <PlateEditor />
      </div>
    </div>
  );
}
