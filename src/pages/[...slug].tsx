import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "lib/contentful";
import { IPageFields, IPage } from "types/generated/contentful";
import { EntryCollection } from "contentful";
import Head from "next/head";

export default ({ pageTitle }: IPageFields) => {
  return (
    <div>
      <Head>
        <title>{pageTitle} | Faux</title>
      </Head>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string[];
  const entries: EntryCollection<IPageFields> = await client.getEntries({
    content_type: "page",
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
