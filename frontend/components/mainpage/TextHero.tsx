"use client";

import { fontGloock } from "../fonts";

export default function TextHero({
  data,
}: {
  data: {
    title: string;
    heading: string;
    description: string;
  };
}) {
  const { title, heading, description } = data;
  return (
    <div className="mt-4">
      {title && (
        <div className="">
          <h3 className={`${fontGloock.className} text-2xl font-bold mb-4`}>
            {title}
          </h3>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-12">
        <div className="">
          <h1 className={`${fontGloock.className} text-5xl font-bold`}>
            {heading}
          </h1>
          <p className="text-lg mt-6">{description}</p>
        </div>

        <img src="https://new.futurestate.tv/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqtai7zpm%2Fimage%2Fupload%2Fv1724429388%2Ffuture_state_2846f40eac.png&w=1200&q=75" />
      </div>
    </div>
  );
}
