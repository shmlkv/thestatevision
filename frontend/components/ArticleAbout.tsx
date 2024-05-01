import Link from "next/link";

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

function selectedFilter(current: string, selected: string) {
  return current === selected
    ? "px-3 py-1 mr-2 rounded-lg hover:underline dark:bg-violet-700 dark:text-gray-100"
    : "px-3 py-1 mr-2 rounded-lg hover:underline dark:bg-violet-400 dark:text-gray-900";
}

export default function ArticleAbout({
  categories,
  articles,
  params,
  author,
}: {
  categories: Category[];
  articles: Article[];
  params: {
    slug: string;
    category: string;
  };
  author: any;
}) {
  return (
    <div className="p-4 rounded-lg dark:bg-gray-900 min-h-[365px] relative">
      <h4 className="text-xl font-semibold">Сategories</h4>

      <div>
        <div className="flex flex-wrap items-end py-2 space-y-2 dark:border-gray-400 ">
          {categories.map((category: Category) => {
            if (category.attributes.articles.data.length === 0) return null;
            return (
              <Link
                href={`/articles/${category.attributes.slug}`}
                className={selectedFilter(
                  category.attributes.slug,
                  params.category
                )}
              >
                {category.attributes.name}
              </Link>
            );
          })}
          <Link href={"/articles"} className={selectedFilter("", "filter")}>
            All
          </Link>
        </div>

        {articles && articles.length ? (
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Other Posts You May Like</h4>
            <ul className="ml-4 space-y-1 list-disc">
              {articles.map((article: Article) => {
                return (
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      href={`/articles/${params.category}/${article.attributes.slug}`}
                      className={`${
                        params.slug === article.attributes.slug &&
                        "text-violet-400"
                      }  hover:underline hover:text-violet-400 transition-colors duration-200`}
                    >
                      {article.attributes.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>

      {!!author && (
        <div>
          <h4 className="text-xl font-semibold">Author</h4>
          <div className="flex items-top space-x-2 py-2">
            <img
              src={author.avatar.data.attributes.url}
              alt={author.name}
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h4 className="text-lg font-semibold">{author.name}</h4>
              <p className="text-sm">{author.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
