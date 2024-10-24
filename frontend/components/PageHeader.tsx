import ArrowRight from "./icons/ArrowRight";

interface PageHeaderProps {
  heading: string;
  text?: string;
  moreLink?: string;
  moreText?: string;
}

export default function PageHeader({
  heading,
  text,
  moreLink,
  moreText = "See more",
}: PageHeaderProps) {
  return (
    <div className="my-6 w-full text-left flex justify-between">
      {/* {text && <span className="text-violet-400 font-bold">{text}</span>} */}
      <h2 className="text-4xl  lg:text-3xl font-bold font-heading">
        {heading}
      </h2>
      {/* see more */}
      {moreLink && (
        <a
          href="#"
          className="text-purple-400 flex items-center hover:underline font-semibold"
        >
          {moreText}
          <span className="ml-2">
            <ArrowRight width="5" />
          </span>
        </a>
      )}
    </div>
  );
}
