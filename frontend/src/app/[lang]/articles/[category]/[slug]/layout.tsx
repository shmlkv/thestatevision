import ArticleSelect from "@/app/[lang]/components/ArticleSelect";
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

async function fetchSideMenuData(filter: string, slug: string) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const options = { headers: { Authorization: `Bearer ${token}` } };

    const categoriesResponse = await fetchAPI(
      "/categories",
      { populate: "*" },
      options
    );

    const articlesResponse = await fetchAPI(
      "/articles",
      filter
        ? {
            filters: {
              category: {
                name: filter,
              },
            },
          }
        : {},
      options
    );

    const authors = await fetchAPI(
      "/authors",
      {
        populate: "*",
      },
      options
    );
    const currentAuthor = authors.data.find((a: any) =>
      a.attributes.articles.data.find(
        (art: any) => art.attributes.slug === slug
      )
    );

    return {
      articles: articlesResponse.data,
      categories: categoriesResponse.data,
      author: currentAuthor?.attributes,
    };
  } catch (error) {
    console.error(error);
  }
}

interface Category {
  id: number;
  attributes: {
    name: string;
    slug: string;
    articles: {
      data: Array<{}>;
    };
  };
}

interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
  };
}

interface Data {
  articles: Article[];
  categories: Category[];
  author: any;
}

export default async function LayoutRoute({
  params,
  children,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
    category: string;
  };
}) {
  const { category } = params;
  const { categories, articles, author } = (await fetchSideMenuData(
    category,
    params.slug
  )) as Data;

  return (
    <section className="container p-8 mx-auto space-y-6 sm:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
        <div className="col-span-2">{children}</div>
        <aside>
          <ArticleSelect
            categories={categories}
            articles={articles}
            params={params}
            author={author}
          />
        </aside>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/articles`;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const articleResponse = await fetchAPI(
    path,
    {
      populate: ["category"],
    },
    options
  );
  return articleResponse.data.map(
    (article: {
      attributes: {
        slug: string;
        category: {
          slug: string;
        };
      };
    }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
  );
}
