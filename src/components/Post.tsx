import { IPostFields } from "types/generated/contentful";
import { Date } from "components/Date";
import { Avatar } from "components/Avatar";

type PostHeroProps = Pick<
  IPostFields,
  "title" | "heroImage" | "tags" | "publishDate" | "author"
>;

export const PostHero = ({
  title,
  heroImage,
  tags,
  publishDate,
  author,
}: PostHeroProps) => (
  <div
    className="py-20 relative flex"
    style={{
      minHeight: "480px",
      background: "linear-gradient(45deg, #4c51bf, #667eea)",
    }}
  >
    <div className="container mx-auto flex z-10">
      <div className="sm:w-3/5 flex flex-col justify-center items-start">
        <h1 className="text-white text-6xl font-bold leading-none mb-6">
          {title}
        </h1>
        <Avatar author={author} className="mb-6" />
        <div className="mt-auto">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="small-caps font-semibold px-3 py-1 text-white text-xl rounded-md border-2 border-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div
      className="absolute right-0 top-0 h-full w-2/5 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(76, 81, 191, 0.7), rgba(102, 126, 234, 0.7)), url(${heroImage?.fields.file.url})`,
        clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
      }}
    ></div>
  </div>
);
