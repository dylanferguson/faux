import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { client, richTextRender } from "lib/contentful";
import { IPostFields } from "types/generated/contentful";
import { EntryCollection } from "contentful";
import { PostHero } from "components/templates";
import postStyles from "components/templates/Post.module.css";
import classNames from "classnames";

export default ({
  title,
  heroImage,
  publishDate,
  tags,
  author,
  body,
}: IPostFields) => {
  return (
    <>
      <Head>
        <title>{title} | Faux</title>
      </Head>
      <PostHero
        title={title}
        heroImage={heroImage}
        tags={tags}
        publishDate={publishDate}
        author={author}
      />
      <article
        className={classNames(
          "container mx-auto my-24 space-y-8 text-xl text-gray-900",
          postStyles.article
        )}
        data-cy="blog-post"
      >
        <div className="mx-auto" style={{ maxWidth: "65ch" }}>
          {richTextRender(body)}
        </div>
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "post",
    "fields.slug[in]": params?.slug,
  });

  return {
    props: {
      ...entries.items[0].fields,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "post",
    select: "fields.slug",
  });

  return {
    paths: entries.items.map(({ fields: { slug } }) => `/blog/${slug}`),
    fallback: false,
  };
};
