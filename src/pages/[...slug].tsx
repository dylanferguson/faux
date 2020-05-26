import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "lib/contentful";
import { IPageFields, IPage } from "types/generated/contentful";
import { EntryCollection } from "contentful";
import Head from "next/head";
import { Hero } from "components/blocks";

export default ({ pageTitle, content }: IPageFields) => {
  return (
    <>
      <Head>
        <title>{pageTitle} | Faux</title>
      </Head>
      <div>
        {content.map((block) => (
          // <div>{block.sys.contentType.sys.id}</div>
          <Hero key={block.sys.id} {...block.fields} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string[];
  const entries: EntryCollection<IPageFields> = await client.getEntries({
    content_type: "page",
    include: 10,
    "fields.slug[in]": "/" + slug.join("/"),
  });

  return {
    props: {
      ...entries.items[0].fields,
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
