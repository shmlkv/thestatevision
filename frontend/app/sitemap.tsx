import { MetadataRoute } from "next";
import { fetchAPI } from "./[lang]/utils/fetch-api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const { data } = await fetchAPI(
    `/articles`,
    {
      sort: { createdAt: "desc" },
      populate: {
        cover: { fields: ["url"] },
        category: { populate: "*" },
        authorsBio: {
          populate: "*",
        },
      },
      pagination: {
        start: 0,
        limit: 999,
      },
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const categories = await fetchAPI(
    `/categories`,
    {
      sort: "slug:asc",
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  console.log({ categories });

  const mainPages = [
    {
      url: "https://thestate.vision/en",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://thestate.vision/en/articles",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://thestate.vision/en/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://thestate.vision/en/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
  return data
    .map(({ attributes }: any) => {
      const currentCategory = attributes.category?.data?.attributes?.slug;
      // if (currentCategory)
      if (!currentCategory) return;
      return {
        url: `https://thestate.vision/en/articles/${currentCategory}/${attributes.slug}`,
        lastModified: new Date(attributes.updatedAt),
        changeFrequency: "weekly",
        priority: 0.5,
      };
    })
    .concat(
      categories.data.map(({ attributes }: any) => {
        console.log({ attributes });
        return {
          url: `https://thestate.vision/en/category/${attributes.slug}`,
          lastModified: new Date(attributes.updatedAt),
          changeFrequency: "weekly",
          priority: 0.5,
        };
      })
    )
    .filter(Boolean)
    .concat(mainPages);

  // [

  //   {
  //     url: "https://acme.com",
  //     lastModified: new Date(),
  //     changeFrequency: "yearly",
  //     priority: 1,
  //   },
  //   {
  //     url: "https://acme.com/about",
  //     lastModified: new Date(),
  //     changeFrequency: "monthly",
  //     priority: 0.8,
  //   },
  //   {
  //     url: "https://acme.com/blog",
  //     lastModified: new Date(),
  //     changeFrequency: "weekly",
  //     priority: 0.5,
  //   },
  // ];
}
