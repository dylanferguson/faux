import { GetStaticProps } from "next";
import { client } from "lib/contentful";
import { IPost } from "types/generated/contentful";
import { EntryCollection } from "contentful";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const entries: EntryCollection<IPost> = await client.getEntries({
    content_type: "post",
    select: "fields.slug",
  });

  return {
    props: {
      paths: entries.items.map((item) => item.fields),
    },
  };
};
