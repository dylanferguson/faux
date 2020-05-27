import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "lib/contentful";
import { IPageFields, IPage } from "types/generated/contentful";
import { EntryCollection } from "contentful";
import Head from "next/head";
import dynamic from "next/dynamic";

const capitalise = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default ({ pageTitle, content }: IPageFields) => {
  return (
    <>
      <Head>
        <title>{pageTitle} | Faux</title>
      </Head>
      <div>
        {content.map((block) => {
          const Block = dynamic(() =>
            import(
              `components/blocks/${capitalise(block.sys.contentType.sys.id)}`
            )
          );
          return <Block key={block.sys.id} {...block.fields} />;
        })}
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
