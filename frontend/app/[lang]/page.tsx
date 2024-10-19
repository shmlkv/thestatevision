"use client";
import { fontGloock } from "@/components/fonts";
import RecentArticles from "@/components/RecentArticles";
import RichText from "@/components/RichText";
import { Tv } from "lucide-react";
import {
  BiBookBookmark,
  BiBuildingHouse,
  BiCommentAdd,
  BiGlobe,
  BiLike,
  BiMap,
  BiSolidTrafficBarrier,
} from "react-icons/bi";
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

    console.log({ text: page.data[0].attributes });

    const contentSections = page.data[0].attributes.contentSections;
    const cookingSection = {
      __component: "sections.cooking",
      title: "WHAT WE’RE COOKING UP?",
      data: [
        {
          id: 1,
          title: "FUTURE STATE CONGRESS",
          description:
            "Bringing science fiction into science facts. Now in Cyprus",
          href: "https://congress.futurestate.tv",
          Icon: BiBuildingHouse,
          buttonText: "Join nearest physical event",
          newTab: true,
        },
        {
          id: 2,
          title: "FUTURESTATE.TV MEDIA",
          description:
            "Explaining and propagandizing this madness since [2022]",
          href: "https://lu.ma/FUTURE_STATE",
          Icon: Tv,
          buttonText: "Read more",
        },
        {
          id: 3,
          title: "HITCHHIKER'S GUIDE TO THE FUTURE/STATE",
          description: "our fellowship program for nation-building",
          href: "https://congress.futurestate.tv",
          Icon: BiLike,
          buttonText: "Touch the water with your foot",
          newTab: true,
        },
        {
          id: 4,
          title: "GLOBAL EVENTS",
          description: "We are building a global network of events. Worldwide",
          href: "https://lu.ma/FUTURE_STATE",
          Icon: BiGlobe,
          buttonText: "Join us",
        },
        {
          id: 5,
          title: "VENTURE BUILDER BATCH",
          description: "cause someone's gotta build this",
          href: "https://www.bubbleswitch.me",
          Icon: BiSolidTrafficBarrier,
          buttonText: "Apply now",
          newTab: true,
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
          href: "/articles",
          description: "Be part of our collective research",
          Icon: BiBookBookmark,
          buttonText: "Are you brave enough?",
        },
        {
          id: 2,
          title: "Attend or sponsor our next event",
          href: "/events",
          description: "Host an event in your city",
          Icon: BiMap,
          buttonText: "Push future forward",
        },
        {
          id: 3,
          title: "Join our community",
          description: "Help us build a better future",
          href: "https://t.me/futurestate_hall",
          Icon: BiCommentAdd,
          newTab: true,
          buttonText: "Telegram",
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
    const textContent = `# How we want to change the world?

Infinite game theory suggest that the best way to win is to focus on the game, not the other players.
Freedom is being attacked from all sides, and we need to fight back.

    `;
    const libertarianArticle = {
      __component: "sections.rich-text",
      content: `## The Future of Governance: A Libertarian Perspective

In an era of rapid technological advancement and global interconnectedness, traditional forms of governance are becoming increasingly obsolete. The future demands a radical reimagining of how societies organize themselves, and libertarian principles offer a compelling vision for this new world.

## Decentralization and Individual Sovereignty

As blockchain technology and decentralized autonomous organizations (DAOs) mature, we're witnessing the emergence of governance systems that prioritize individual sovereignty. These systems allow for:

- Direct participation in decision-making processes
- Transparent and immutable record-keeping
- Reduction of centralized power structures

## AI-Assisted Policy Making

Artificial intelligence will play a crucial role in future governance by:

- Analyzing vast amounts of data to inform policy decisions
- Providing unbiased assessments of proposed legislation
- Optimizing resource allocation based on real-time needs

## Smart Contracts and Voluntary Associations

The concept of smart contracts will revolutionize how individuals interact with each other and with governance structures:

- Automated enforcement of agreements without the need for centralized authority
- Voluntary associations based on shared values and goals
- Reduction of bureaucracy and administrative overhead

## Personal Data Sovereignty

In the future, individuals will have complete control over their personal data:

- Cryptographic protection of sensitive information
- Ability to monetize personal data through secure marketplaces
- Enhanced privacy and security in digital interactions

The path to this libertarian future is not without challenges, but by embracing technological innovation and prioritizing individual liberty, we can create a world of unprecedented freedom and prosperity.`,
    };
    const email = {
      __component: "sections.lead-form",
      description:
        " traditional governance is a joke (but you're not laughing)",
      emailPlaceholder: "Enter your email",
      id: 1,
      location: "main page",
      submitButton: { id: 1, text: null, type: "primary" },
      title: "join us if",
    };
    // useEffect(() => {
    console.log("page useEffect");
    // }, []);
    return (
      <div className="mainpage space-y-8 flex flex-col border-l px-4 border-left-1 border-r purple-border border-solid ">
        <hr className="mt-8" />

        {sectionRenderer(contentSections[0])}
        <hr />
        {sectionRenderer(textHeroSection)}
        <hr />
        {sectionRenderer(cookingSection)}
        <hr />

        <RecentArticles limit={3} />
        <hr />

        <div className="max-w-[800px]  justify-center p-3 mx-auto sm:py-3 lg:py-3 lg:flex-row lg:justify-between">
          <h1
            className={`${fontGloock.className} text-center text-5xl font-bold`}
          >
            Manifesto
          </h1>
          <RichText data={{ body: libertarianArticle.content }} />
        </div>
        <hr />
        {sectionRenderer(envolveSection)}
        <hr />
        {sectionRenderer(email)}
        {/* {contentSections
          .slice(1)
          .map((section: any, index: number) =>
            sectionRenderer(section, index + 1),
          )} */}
        {/* <Profile /> */}
      </div>
    );
  } catch (error: any) {
    console.log({ error });
    return null; // Ensure to return null or some fallback UI in case of an error
  }
}
