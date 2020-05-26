import { ReleaseNote } from "components/templates";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "lib/contentful";
import { IReleaseNoteFields } from "types/generated/contentful";
import { EntryCollection } from "contentful";

export default ReleaseNote;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const entries: EntryCollection<IReleaseNoteFields> = await client.getEntries({
    content_type: "releaseNote",
    "fields.version[in]": params?.version,
    limit: 1,
  });

  return {
    props: {
      ...entries.items[0].fields,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const entries: EntryCollection<IReleaseNoteFields> = await client.getEntries({
    content_type: "releaseNote",
    select: "fields.version",
  });

  return {
    paths: entries.items.map(
      ({ fields }) => `/release-notes/${fields.version}`
    ),
    fallback: false,
  };
};
