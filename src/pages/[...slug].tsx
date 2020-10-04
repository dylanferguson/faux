import { GetStaticProps, GetStaticPaths } from "next";
import { client, getPageBySlug } from "lib/contentful";
import { IPageFields } from "types/generated/contentful";
import { EntryCollection } from "contentful";
import Head from "next/head";
import { Block } from "components/blocks";

export default ({ pageTitle, content }: IPageFields) => {
  return (
    <>
      <Head>
        <title>{pageTitle} | Faux</title>
      </Head>
      <div>
        {content.map((block) => (
          <Block
            key={block.sys.id}
            id={block.sys.contentType.sys.id}
            {...block.fields}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const slug = params?.slug as string[];
  const entries = await getPageBySlug(
    `/${slug.join("/").replace(/\/$/, "")}`,
    preview
  );

  return {
    props: {
      preview,
      ...entries,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const entries: EntryCollection<IPageFields> = await client.getEntries({
    content_type: "page",
    select: "fields.slug",
  });

  return {
    paths: entries.items.map(({ fields: { slug } }) => `${slug}`),
    fallback: false,
  };
};
