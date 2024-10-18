"use client";

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
    <div className="p-8">
      {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-12">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}
