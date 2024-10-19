"use server";
import { useCallback, useEffect, useState } from "react";

import { formatDate } from "@/app/[lang]/utils/api-helpers";
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";
import { getStrapiMedia } from "@/data/utils";
import Image from "next/image";
import Link from "next/link";
import Loader from "../Loader";

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default async function RecentArticlesSlider() {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/articles`;
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        populate: {
          cover: { fields: ["url"] },
          category: { populate: "*" },
          authorsBio: {
            populate: "*",
          },
        },
        pagination: {
          start: start,
          limit: limit,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);

      if (start === 0) {
        setData(responseData.data);
      } else {
        setData((prevData: any[]) => [...prevData, ...responseData.data]);
      }

      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  function loadMorePosts(): void {
    const nextPosts = meta!.pagination.start + meta!.pagination.limit;
    fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  if (isLoading) return <Loader />;

  return (
    <div>
      {/* Recent Articles */}
      <div>
        {data
          .filter((article: any) => article.attributes.isPublic !== false)
          .map((article: any) => {
            const imageUrl = getStrapiMedia(
              article.attributes.cover.data?.attributes.url,
            );

            const category = article.attributes.category.data?.attributes;
            const authorsBio = article.attributes.authorsBio.data?.attributes;

            const avatarUrl = getStrapiMedia(
              authorsBio?.avatar.data.attributes.url,
            );

            return (
              <Link
                href={`/articles/${category?.slug}/${article.attributes.slug}`}
                key={article.id}
                className="max-w-full w-full group hover:no-underline focus:no-underline dark:bg-gray-900  rounded-2xl overflow-hidden shadow-lg"
              >
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
                    {authorsBio && (
                      <span className="text-xs dark:text-gray-400">
                        {authorsBio.name}
                      </span>
                    )}
                  </div>
                  <p className="py-4">{article.attributes.description}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
