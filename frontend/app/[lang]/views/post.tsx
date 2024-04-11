import { getStrapiMedia } from "../utils/api-helpers";
import { postRenderer } from "../utils/post-renderer";

interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    authorsBio: {
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
    blocks: any[];
    publishedAt: string;
  };
}

export default function Post({ data }: { data: Article }) {
  const { title, description, publishedAt, cover, authorsBio } =
    data.attributes;
  const imageUrl = getStrapiMedia(cover.data?.attributes.url);

  return (
    <article className="space-y-8 dark:bg-black dark:text-gray-50">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="article cover image"
        classsvgName="w-full h-96 object-cover rounded-lg"
        />
      )}
      <div
        className="
      "
      >
        <div className="">
          <div className="space-y-6">
            <h1 className="leading-tight text-5xl font-bold ">{title}</h1>
          </div>

          <div className="dark:text-gray-100 font-extralight  text-3xl font-italic py-6">
            {description}
          </div>

          {data.attributes.blocks.map((section: any, index: number) =>
            postRenderer(section, index)
          )}
        </div>
      </div>
    </article>
  );
}
