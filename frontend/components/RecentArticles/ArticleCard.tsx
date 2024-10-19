"use client";

import { formatDate } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";
import Link from "next/link";
interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default function ArticleCard({ article }: any) {
  if (article.attributes?.isPublic === false) return null;
  const imageUrl = article.attributes.cover.data?.attributes.url;
  const avatarUrl =
    article.attributes.authorsBio.data?.attributes.avatar.data?.attributes.url;
  const category = article.attributes.category.data?.attributes;
  return (
    <Link
      href={`/articles/${category?.slug}/${article.attributes.slug}`}
      key={article.id}
    >
      <div className="max-w-full w-full group hover:no-underline focus:no-underline border-slate-900 dark:bg-red bg-slate-900 text-white  rounded-2xl overflow-hidden shadow-lg">
        {imageUrl && (
          <Image
            alt="presentation"
            width="240"
            height="240"
            className="object-cover w-full h-44 "
            src={imageUrl}
          />
        )}
        <div className="p-6 space-y-2 relative">
          {avatarUrl && (
            <Image
              alt="avatar"
              width="80"
              height="80"
              src={avatarUrl}
              className="rounded-full h-16 w-16 object-cover absolute -top-8 right-4"
            />
          )}

          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {article.attributes.title}
          </h3>

          <div className="flex justify-between items-center">
            <span className="text-xs dark:text-gray-400">
              {formatDate(article.attributes.publishedAt)}
            </span>
            {/* {authorsBio && (
                      <span className="text-xs dark:text-gray-400">
                        {authorsBio.name}
                      </span>
                    )} */}
          </div>
          <p className="py-4">{article.attributes.description}</p>
        </div>
      </div>
    </Link>
  );
}
