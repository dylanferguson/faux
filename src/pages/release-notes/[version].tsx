import Link from "next/link";
import { Date } from "components/Date";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "lib/contentful";
import { IReleaseNote, IReleaseNoteFields } from "types/generated/contentful";
import { EntryCollection } from "contentful";
import marked from "marked";

type ReleaseProps = IReleaseNoteFields;

export const ReleaseNote = ({
  version,
  category,
  releaseDate,
  description,
  scope,
}: ReleaseProps) => (
  <div className="container text-gray-800 my-16">
    <div className="mx-3 sm:w-2/3 sm:mx-auto">
      <h2 className="text-5xl font-semibold leading-snug">
        <Link href="">
          <a>v{version}</a>
        </Link>
      </h2>
      <div className="text-xl mb-2 text-gray-700">
        <span>{category}</span> ·{" "}
        <span>
          <Date date={releaseDate} />
        </span>
      </div>
      <div className="space-x-2">
        {scope?.map((item) => (
          <span className="text-white bg-indigo-600 px-3 small-caps rounded-md text-lg inline-block">
            {item}
          </span>
        ))}
      </div>
        {description && (
          <div className="release-note text-lg my-6 space-y-4" dangerouslySetInnerHTML={{ __html: marked(description) }} />
        )}
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const entries: EntryCollection<IReleaseNoteFields> = await client.getEntries({
    content_type: "releaseNote",
    "fields.version[in]": params?.slug,
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

export default ReleaseNote;
