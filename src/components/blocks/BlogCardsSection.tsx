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
        className="flex-none w-1/4 bg-center bg-cover rounded-tl-lg rounded-bl-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(76, 81, 191, 0.7), rgba(102, 126, 234, 0.7)), ${
            heroImage?.fields.file.url
              ? `url(${heroImage?.fields.file.url}?h=250&fit=scale)`
              : ""
          }`,
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
        }}
      ></div>
      <div className="px-10 py-8">
        <h3 className="mb-4 text-2xl font-medium text-indigo-500">
          <span className="align-middle">{title}</span>
          <Icon
            id="arrowRight"
            className="inline-block w-6 h-6 ml-3 align-middle transition duration-200 ease-in-out transform fill-current group-hover:translate-x-1"
          />
        </h3>
        <p
          className="overflow-hidden text-lg font-light leading-relaxed"
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
    className="container grid grid-cols-1 gap-4 mx-auto my-32 lg:grid-cols-2 lg:gap-8"
    style={{ gridAutoRows: "1fr" }}
  >
    {posts.map((post) => (
      <BlogCard key={post.fields.slug} {...post.fields} />
    ))}
  </section>
);
