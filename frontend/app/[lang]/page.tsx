import LangRedirect from "../../components/LangRedirect";
import HomePageClient from "./HomePageClient";
import { getPageBySlug } from "./utils/get-page-by-slug";

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  try {
    const page = await getPageBySlug("home", params.lang);
    if (page.error && page.error.status == 401)
      console.log(
        "Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/",
      );

    if (page.data.length == 0 && params.lang !== "en") return <LangRedirect />;
    if (page.data.length === 0) return null;

    const {
      textHeroSection,
      cookingSection,
      envolveSection,
      libertarianArticle,
      email,
    } = await import("./config/homepage-sections");

    return (
      <HomePageClient
        pageData={page.data[0]}
        textHeroSection={textHeroSection}
        cookingSection={cookingSection}
        envolveSection={envolveSection}
        libertarianArticle={libertarianArticle}
        email={email}
      />
    );
  } catch (error: any) {
    console.log({ error });
    return null;
  }
}
