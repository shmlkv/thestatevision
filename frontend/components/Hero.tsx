import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../app/[lang]/utils/api-helpers";
import { renderButtonStyle } from "../app/[lang]/utils/render-button-style";
import { fontGloock } from "./fonts";

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
      <div className="mt-4">
        {data.title && (
          <div className="">
            <h3 className={`${fontGloock.className} text-2xl font-bold mb-4`}>
              {data.title}
            </h3>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-12">
          <h1 className={`${fontGloock.className} text-5xl font-bold`}>
            {data.title}
          </h1>
          <div className="">
            <p className="text-lg">{data.description}</p>
            <img src="https://new.futurestate.tv/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqtai7zpm%2Fimage%2Fupload%2Fv1724429388%2Ffuture_state_2846f40eac.png&w=1200&q=75" />
          </div>
        </div>
      </div>
      <div
        className=" flex direction-column justify-center  mx-auto  lg:flex-row lg:justify-between flex-col"
        style={{
          flexDirection: "column",
        }}
      >
        <div className="flex flex-row justify-center text-center rounded-lg lg:text-left">
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

        <div className="flex items-center justify-center mt-8 lg:mt-0 w-full">
          {data.picture.data && (
            <Image
              src={imgUrl || ""}
              alt={
                data.picture.data?.attributes.alternativeText || "none provided"
              }
              className="object-contain w-full max-h-[500px] rounded-md"
              width={600}
              height={600}
            />
          )}
        </div>
      </div>
    </section>
  );
}
