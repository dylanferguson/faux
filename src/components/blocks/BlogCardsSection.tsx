import {
  IBlogCardsSectionFields,
  IPostFields,
} from "types/generated/contentful";
import Link from "next/link";
import { Icon } from "components/atoms";
import classNames from "classnames";

type BlogCardProps = IPostFields & {
  className?: string;
};

const BlogCard = ({
  title,
  slug,
  description,
  heroImage,
  className,
}: BlogCardProps) => (
  <Link as={`/blog/${slug}`} href="/blog/[slug]">
    <a
      className={classNames(
        "flex group block rounded-lg shadow-md transition ease-in-out duration-200  hover:shadow-lg",
        className
      )}
    >
      <div
        className="w-1/4 flex-none bg-cover rounded-tl-lg rounded-bl-lg bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(76, 81, 191, 0.7), rgba(102, 126, 234, 0.7)), url(${heroImage?.fields.file.url})`,
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
        }}
      ></div>
      <div className="px-10 py-8">
        <h3 className="text-indigo-500 text-2xl font-medium mb-4">
          <span className="align-middle">{title}</span>
          <Icon
            id="arrowRight"
            className="w-6 h-6 ml-3 inline-block align-middle fill-current transition ease-in-out duration-200 transform group-hover:translate-x-1"
          />
        </h3>
        <p
          className="text-lg leading-relaxed font-light overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
      </div>
    </a>
  </Link>
);

export const BlogCardsSection = ({ posts }: IBlogCardsSectionFields) => (
  <section
    className="container mx-auto my-32 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8"
    style={{ gridAutoRows: "1fr" }}
  >
    {posts.map((post) => (
      <BlogCard key={post.fields.slug} {...post.fields} />
    ))}
  </section>
);
