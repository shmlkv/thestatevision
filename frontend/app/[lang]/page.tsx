"use client";
import RecentArticles from "@/components/RecentArticles";
import { GiCongress } from "react-icons/gi";
import LangRedirect from "../../components/LangRedirect";
import { getPageBySlug } from "./utils/get-page-by-slug";
import { sectionRenderer } from "./utils/section-renderer";

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

    // console.log({ text: page.data[0].attributes });

    const contentSections = page.data[0].attributes.contentSections;
    const cookingSection = {
      __component: "sections.cooking",
      title: "WHAT WE’RE COOKING UP?",
      data: [
        {
          id: 1,
          title: "FUTURE STATE CONGRESS",
          description: "bringing science fiction into science facts",
          href: "https://congress.futurestate.tv",
          Icon: GiCongress,
        },
        {
          id: 2,
          title: "FUTURESTATE.TV MEDIA",
          description:
            "explaining and propagandizing this madness since [2022]",
          href: "https://lu.ma/FUTURE_STATE",
          Icon: GiCongress,
        },
        {
          id: 3,
          title: "HITCHHIKER'S GUIDE TO THE FUTURE/STATE",
          description: "our fellowship program for nation-building",
          href: "https://congress.futurestate.tv",
          Icon: GiCongress,
        },
        {
          id: 4,
          title: "GLOBAL EVENTS",
          description: "bringing the future to your city",
          href: "https://lu.ma/FUTURE_STATE",
          Icon: GiCongress,
        },
        {
          id: 5,
          title: "VENTURE BUILDER BATCH",
          description: "cause someone's gotta build this",
          href: "https://www.bubbleswitch.me",
          Icon: GiCongress,
        },
      ],
    };
    const envolveSection = {
      __component: "sections.cooking",
      title: "EVOLVE WITH US",
      data: [
        {
          id: 1,
          title: "Write an article",
          description: "Write an article",
        },
        {
          id: 2,
          title: "attend or sponsor our next event",
          description: "Write an article",
        },
        {
          id: 3,
          title: "join our collective research",
          description: "Write an article",
        },
      ],
    };
    const textHeroSection = {
      __component: "sections.text-hero",
      title: "EVOLVE WITH US",
      data: {
        title: "VISION",
        heading: "Governments are broken. Let's fix them.  ",
        description:
          "We are a group of technologists, scientists, and policy wonks who believe that the way we govern ourselves is broken. We are building a new kind of government that is more responsive, more transparent, and more accountable to the people. We are a non-partisan, non-profit organization that is dedicated to the public good.",
      },
    };
    return (
      <>
        {sectionRenderer(contentSections[0])}
        {sectionRenderer(textHeroSection)}
        {sectionRenderer(cookingSection)}

        <RecentArticles limit={3} />
        {sectionRenderer(envolveSection)}
        {contentSections
          .slice(1)
          .map((section: any, index: number) =>
            sectionRenderer(section, index + 1),
          )}
        {/* <Profile /> */}
      </>
    );
  } catch (error: any) {
    console.log({ error });
    return null; // Ensure to return null or some fallback UI in case of an error
  }
}
