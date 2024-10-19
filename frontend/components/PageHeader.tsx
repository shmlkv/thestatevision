interface PageHeaderProps {
  heading: string;
  text?: string;
  moreLink?: string;
}

export default function PageHeader({
  heading,
  text,
  moreLink,
}: PageHeaderProps) {
  return (
    <div className="my-6 w-full text-left flex justify-between">
      {/* {text && <span className="text-violet-400 font-bold">{text}</span>} */}
      <h2 className="text-4xl  lg:text-3xl font-bold font-heading">
        {heading}
      </h2>
      {/* see more */}
      {moreLink && (
        <a href="#" className="text-blue-500 hover:underline font-bold">
          See more →
        </a>
      )}
    </div>
  );
}
