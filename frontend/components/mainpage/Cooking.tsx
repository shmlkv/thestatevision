"use client";

import { ArrowRight } from "lucide-react";
import ArrowUpRight from "../icons/ArrowUpRight";

function FeatureCard({
  Icon,
  title,
  description,
  href,
  buttonText,
  newTab,
}: {
  Icon: any;
  title: string;
  description: string;
  href: string;
  buttonText: string;
  newTab?: boolean;
}) {
  return (
    <a
      target={newTab ? "_blank" : "_self"}
      href={href}
      className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6  justify-between flex flex-col rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:from-gray-800 hover:to-gray-700 relative overflow-hidden block"
    >
      <div className="">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 shadow-[inset_0_2px_8px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_2px_12px_rgba(255,255,255,0.2)] transition-shadow duration-300 ease-in-out"></div>
        </div>
        <div className="relative z-10">
          {Icon && (
            <div className="mb-4 text-4xl text-purple-400 group-hover:text-purple-300 transition-colors duration-300 ease-in-out">
              <Icon />
            </div>
          )}
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-200 transition-colors duration-300 ease-in-out">
            {title}
          </h3>
          <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300 ease-in-out">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center text-purple-400 justify-between group-hover:text-purple-300 font-semibold transition-all duration-300 ease-in-out transform group-hover:translate-y-2">
        {buttonText ? buttonText : "Learn more"}
        {newTab ? <ArrowUpRight /> : <ArrowRight />}
      </div>
    </a>
  );
}
export default function Cooking({ data, title }: { data: any; title: string }) {
  return (
    <div className="mt-8">
      {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item: any) => (
          <FeatureCard
            key={item.href}
            Icon={item.Icon}
            title={item.title}
            description={item.description}
            href={item.href}
            buttonText={item.buttonText}
            newTab={item.newTab}
          />
        ))}
      </div>
    </div>
  );
}
