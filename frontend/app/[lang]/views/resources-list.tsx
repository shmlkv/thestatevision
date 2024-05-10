import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { formatDate } from "../utils/api-helpers";

interface Resource {
  id: number;
  attributes: {
    title: string;
    text: string;
    URL: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;

    author: {
      data: {
        attributes: {
          name: string;
          avatar: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export default function ResourcesList({
  data: articles,
  children,
}: {
  data: Resource[];
  children?: React.ReactNode;
}) {
  console.log({ articles });
  return (
    <section className=" w-full">
      <div className="flex flex-col space-y-4 mt-4">
        {/* <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
        {articles.map((article) => {
          return (
            <Link
              href={article.attributes.URL}
              target="_blank"
              // href={`/articles/${category?.slug}/${article.attributes.slug}`}
              key={article.id}
              className="max-w-full w-full group hover:no-underline focus:no-underline dark:bg-gray-900  rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="p-6 space-y-2 relative">
                <ArrowUpRight className="absolute top-6 right-6" />
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {article.attributes.title}
                </h3>

                <div className="flex justify-between items-center">
                  <span className="text-xs dark:text-gray-400">
                    {formatDate(article.attributes.publishedAt)}
                  </span>
                  {/* {author && (
                    <span className="text-xs dark:text-gray-400">
                      {author.name}
                    </span>
                  )} */}
                </div>
                <p className="py-4">{article.attributes.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
      {children && children}
    </section>
  );
}
