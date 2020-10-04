import { GetStaticProps } from "next";
import { client } from "lib/contentful";
import { IPost, IPostFields } from "types/generated/contentful";
import { EntryCollection } from "contentful";
import Link from "next/link";
import { Header } from "components/organisms";

type BlogIndexProps = {
  data: IPostFields[];
};

const BlogIndex = ({ data }: BlogIndexProps) => (
  <div className="container mx-auto mb-24" data-cy="blog-index-header">
    <Header title="Faux! Blog">
      News, tips and highlights from the team at <span className="logo" />
    </Header>
    <div className="w-full md:w-3/5 mx-auto space-y-12">
      {data.map((post) => (
        <Link key={post.slug} as={`/blog/${post.slug}`} href="/blog/[slug]">
          <a className="group block my-16" data-cy="blog-post-link">
            <h2 className="inline-block text-4xl font-semibold text-gray-700 group-hover:text-indigo-500 hover-stripe">
              {post.title}
            </h2>
            <div className="mb-1 space-x-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded text-indigo-500 bg-white px-2 text-md small-caps leading-snug border border-indigo-500"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-xl">
              {post.description}
            </p>
          </a>
        </Link>
      ))}
    </div>
  </div>
);

export default BlogIndex;

export const getStaticProps: GetStaticProps = async () => {
  const entries: EntryCollection<IPost> = await client.getEntries({
    content_type: "post",
    select: "fields.tags,fields.slug,fields.title,fields.description",
  });

  return {
    props: {
      data: entries.items.map((item) => item.fields),
    },
  };
};
