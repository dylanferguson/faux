import {
  IBlogCardsSectionFields,
  IPostFields,
} from "types/generated/contentful";
import Link from "next/link";
import { Icon } from "components/atoms";

type BlogCardProps = IPostFields & {
  className?: string;
};

const BlogCard = ({ title, slug, description, heroImage }: BlogCardProps) => (
  <Link as={`/blog/${slug}`} href="/blog/[slug]">
    <a className="flex group block w-full lg:w-1/2 rounded-lg shadow-md transition ease-in-out duration-200  hover:shadow-lg">
      <div
        className="w-1/4 flex-none bg-cover rounded-tl-lg rounded-bl-lg bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(76, 81, 191, 0.7), rgba(102, 126, 234, 0.7)), url(${heroImage?.fields.file.url})`,
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
        }}
      ></div>
      <div className="px-10 py-8">
        <h3 className="align-middle text-indigo-500 text-2xl font-medium mb-4">
          {title}
          <Icon
            id="chevronRight"
            className="w-8 h-8 inline-block fill-current transition ease-in-out duration-200 transform group-hover:translate-x-1"
          />
        </h3>
        <p className="text-gray-800 text-lg leading-relaxed font-thin">
          {description}
        </p>
      </div>
    </a>
  </Link>
);

export const BlogCardsSection = ({ posts }: IBlogCardsSectionFields) => (
  <section className="container mx-auto my-32 flex flex-wrap">
    {posts.map((post) => (
      <BlogCard key={post.fields.slug} {...post.fields} />
    ))}
  </section>
);
