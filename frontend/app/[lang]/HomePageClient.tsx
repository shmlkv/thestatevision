"use client";
import { fontGloock } from "@/components/fonts";
import RecentArticles from "@/components/RecentArticles";
import RichText from "@/components/RichText";
import { sectionRenderer } from "./utils/section-renderer";

interface HomePageClientProps {
  pageData: any;
  textHeroSection: {
    __component: string;
    title: string;
    data: {
      title: string;
      heading: string;
      description: string;
    };
  };
  cookingSection: {
    __component: string;
    title: string;
    data: Array<{
      id: number;
      title: string;
      description: string;
      href: string;
      iconName: string; // Updated from Icon
      buttonText: string;
      newTab?: boolean;
    }>;
  };
  envolveSection: {
    __component: string;
    title: string;
    data: Array<{
      id: number;
      title: string;
      description: string;
      href: string;
      iconName: string; // Updated from Icon
      buttonText: string;
      newTab?: boolean;
    }>;
  };
  libertarianArticle: {
    __component: string;
    content: string;
  };
  email: {
    __component: string;
    description: string;
    emailPlaceholder: string;
    id: number;
    location: string;
    submitButton: {
      id: number;
      text: string | null;
      type: string;
    };
    title: string;
  };
}

export default function HomePageClient({
  pageData,
  textHeroSection,
  cookingSection,
  envolveSection,
  libertarianArticle,
  email,
}: HomePageClientProps) {
  try {
    return (
      <div className="mainpage space-y-8 flex flex-col border-l px-4 border-left-1 border-r purple-border border-solid ">
        <hr />
        {sectionRenderer(textHeroSection)}
        <hr />
        {sectionRenderer(cookingSection)}
        <hr />
        <RecentArticles limit={10} />
        <div className="bg-black">
          <div className="flex justify-center pt-16">
            <video
              src="../../logo.mp4"
              autoPlay
              muted
              loop
              className="w-full max-w-[400px] flex justify-center"
            />
          </div>

          <div className="max-w-[800px] justify-center p-3 mx-auto sm:py-3 lg:py-3 lg:flex-row lg:justify-between">
            <h1
              className={`${fontGloock.className} text-center text-5xl font-bold`}
            >
              Manifesto
            </h1>
            <RichText data={{ body: libertarianArticle.content }} />
          </div>
        </div>

        <hr />
        {sectionRenderer(envolveSection)}
        <hr />
        {sectionRenderer(email)}
      </div>
    );
  } catch (error: any) {
    console.log({ error });
    return null;
  }
}
