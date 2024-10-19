import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../app/[lang]/utils/api-helpers";
import { renderButtonStyle } from "../app/[lang]/utils/render-button-style";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data?.attributes.url);

  return (
    <section className=" dark:text-gray-100">
      <div
        className="container flex direction-column justify-center  mx-auto  lg:flex-row lg:justify-between flex-col"
        style={{
          flexDirection: "column",
        }}
      >
        <div className="flex flex-row justify-center text-center rounded-lg lg:text-left">
          {/* <HighlightedText
            text={data.title}
            tag="h1"
            className="text-4xl font-bold leading-none sm:text-4xl mb-8"
            color="dark:text-violet-400"
          /> */}

          {/* <HighlightedText
            text={data.description}
            tag="p"
            className="tmt-6 mb-8 text-lg sm:mb-12"
            color="dark:text-violet-400"
          /> */}
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            {data.buttons.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className={renderButtonStyle(button.type)}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 w-full">
          {data.picture.data && (
            <Image
              src={imgUrl || ""}
              alt={
                data.picture.data?.attributes.alternativeText || "none provided"
              }
              className="object-contain w-full rounded-md"
              width={600}
              height={600}
            />
          )}
        </div>
      </div>
    </section>
  );
}
