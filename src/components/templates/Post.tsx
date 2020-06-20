import { IPostFields } from "types/generated/contentful";
import { Avatar } from "components/atoms";

type PostHeroProps = Pick<
  IPostFields,
  "title" | "heroImage" | "tags" | "publishDate" | "author"
>;

export const PostHero = ({ title, heroImage, tags, author }: PostHeroProps) => (
  <div
    className="relative flex py-20"
    style={{
      minHeight: "480px",
      background: "linear-gradient(45deg, #4c51bf, #667eea)",
    }}
  >
    <div className="container z-10 flex mx-auto">
      <div className="flex flex-col items-start justify-center sm:w-3/5">
        <h1 className="mb-6 text-6xl font-bold leading-none text-white">
          {title}
        </h1>
        <Avatar author={author} className="mb-6" />
        <div className="mt-auto space-x-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-lg text-white border border-white rounded small-caps"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div
      className="absolute top-0 right-0 w-2/5 h-full bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(76, 81, 191, 0.7), rgba(102, 126, 234, 0.7)), url(${heroImage?.fields.file.url}?h=520&fit=scale)`,
        clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
      }}
    ></div>
  </div>
);
