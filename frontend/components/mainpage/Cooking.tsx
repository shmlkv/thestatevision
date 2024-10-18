"use client";

function FeatureCard({
  Icon,
  title,
  description,
  href,
}: {
  Icon: any;
  title: string;
  description: string;
  href: string;
}) {
  console.log({ Icon });
  return (
    <div
      className="bg-purple-50 p-6 rounded-lg shadow-sm flex flex-col justify-between"
      key={href}
    >
      <div className="">
        {Icon && <div className="mb-4 text-3xl">{Icon}</div>}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <a href={href} className="text-blue-500 hover:underline font-bold">
        {/* {link} */}
        Learn more →
      </a>
    </div>
  );
}
export default function Cooking({ data, title }: { data: any; title: string }) {
  console.log({ data });
  return (
    <div className=" p-8">
      {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item: any) => (
          <FeatureCard
            key={item.href}
            Icon={item.Icon}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
}
