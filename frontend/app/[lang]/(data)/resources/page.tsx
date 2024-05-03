"use client";
import { useCallback, useEffect, useState } from "react";
import { fetchAPI } from "../../utils/fetch-api";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import Loader from "../../../../components/Loader";
import ResourcesList from "../../views/resources-list";

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default function Resources() {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/resources`;
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
  }, []);

  function loadMorePosts(): void {
    // const nextPosts = meta!.pagination.start + meta!.pagination.limit;
    // fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="flex items-center justify-between border border-gray-200 dark:border-gray-700 p-4 rounded">
        <div>
          <h1 className="text-xl font-bold dark:text-white">Submit a link</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Share some interesting articles, blogs, or resources about network
            states
          </p>
        </div>
        <Button>
          <Plus size={24} className="pr-2" />
          <Link href="/resources/new">Submit a link</Link>
        </Button>
      </div>
      <ResourcesList data={data} />
    </div>
  );
}
