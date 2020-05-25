import { GetStaticProps } from "next";
import { client } from "lib/contentful";
import { IPost, IPostFields } from "types/generated/contentful";
import { EntryCollection } from "contentful";
import Link from "next/link";
import { Header } from "components/Header";
import { Date } from "components/Date";

type BlogIndexProps = {
  data: IPostFields[];
};

export default ({ data }: BlogIndexProps) => (
  <div className="container mx-auto">
    <Header title="Phở! Blog">
      News, tips and highlights from the team at <span className="logo" />
    </Header>
    <div className="w-full md:w-3/5 mx-auto space-y-12">
      {data.map((post) => (
        <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
          <a className="group block my-16">
            <div className="my-1 space-x-4">
              {post.tags?.map((tag) => (
                <span className="rounded-lg text-indigo-400 bg-white py-1 px-2 text-lg small-caps leading-snug border-2 border-indigo-400">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="inline-block text-4xl font-semibold text-gray-700 group-hover:text-indigo-500 hover-stripe">
              {post.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-xl">
              {post.description}
            </p>
          </a>
        </Link>
      ))}
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const entries: EntryCollection<IPost> = await client.getEntries({
    content_type: "post",
    select: "fields",
  });

  console.log(entries.items);

  return {
    props: {
      data: entries.items.map((item) => item.fields),
    },
  };
};
