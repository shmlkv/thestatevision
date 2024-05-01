"use client";
import { useCallback, useEffect, useState } from "react";
import { fetchAPI } from "../utils/fetch-api";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Loader from "../../../components/Loader";
import Blog from "../views/blog-list";

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default function Articles() {
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
      {/* <PageHeader heading="All articles" text="~" /> */}
      <div className="flex items-center justify-between border border-gray-200 dark:border-gray-700 p-4 rounded" >
        <div>

        <h1 className="text-xl font-bold dark:text-white">We are open for your opinion</h1>
        <p className="text-gray-600 dark:text-gray-400">  If you have any idea or suggestion, please let us know. We will be happy to hear from you.</p>
        </div>
        <Button>
          <Link href="/articles/new">
Create new article
          </Link>
        </Button>
      </div>
      <Blog data={data}>
        {meta!.pagination.start + meta!.pagination.limit <
          meta!.pagination.total && (
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
              onClick={loadMorePosts}
            >
              Load more posts...
            </button>
          </div>
        )}
      </Blog>
    </div>
  );
}
