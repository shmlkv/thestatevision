// "use client";

import { useEffect, useState } from "react";

import { fetchAPI } from "@/app/[lang]/utils/fetch-api";
import PageHeader from "@/components/PageHeader";
import Loader from "../Loader";
import ArticleCard from "./ArticleCard";
interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default function RecentArticles({ limit = 3 }: { limit: number }) {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (start: number, limit: number) => {
    setLoading(true);
    console.log("recent articles fetching");
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
      console.log({ responseData });
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
  }; //, []);

  function loadMorePosts(): void {
    const nextPosts = meta!.pagination.start + meta!.pagination.limit;
    fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }
  useEffect(() => {
    console.log("recent articles useEffect");
    fetchData(0, Number(limit));
  }, []);
  if (isLoading) return <Loader />;
  return (
    <div className="mt-8">
      <PageHeader heading="Recent Writings" moreLink="/articles" />
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((article: any) => {
          console.log({ xxx: article });
          // console.log({ article });
          return article.attributes?.slug ? (
            <ArticleCard article={article} />
          ) : (
            <Loader />
          );
        })}
      </div>
    </div>
  );
}
