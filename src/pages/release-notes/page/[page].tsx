import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "lib/contentful";
import { IReleaseNoteFields, IReleaseNote } from "types/generated/contentful";
import { EntryCollection } from "contentful";
import { ReleaseNote } from "components/ReleaseNote";
import { Header } from "components/Header";
import { Icon } from "components/Icon";
import Link from "next/link";

// Featured release, more prominent in the header https://www.abstract.com/release-notes/
type PageLinkProps = {
  page: number;
  newer?: boolean;
  children: React.ReactNode;
};

const PageLink = ({ page, newer, children }: PageLinkProps) => (
  <Link href="/release-notes/page/[page]" as={`/release-notes/page/${page}`}>
    <a
      className={`flex items-center text-2xl text-indigo-500 hover:opacity-75 ${
        newer ? "flex-row-reverse" : ""
      }`}
    >
      <Icon
        className="w-8 h-8 flex fill-current"
        id={`chevron${newer ? "Right" : "Left"}`}
      />
      {children}
    </a>
  </Link>
);

type ReleaseNotePageProps = {
  data: IReleaseNote[];
  page: number;
  total: number;
};

export default ({ data, page, total }: ReleaseNotePageProps) => (
  <div className="mb-24">
    <Header title="Release Notes">
      <span className="logo inline-block pr-1" /> changelog for new features and
      general improvements
    </Header>
    <div className="space-y-20">
      {data.map((item) => (
        <ReleaseNote key={item.fields.version} {...item.fields} />
      ))}
    </div>
    <div className="container my-16">
      <nav
        className={`flex my-24 sm:w-2/3 sm:mx-auto justify-${
          page === total ? "end" : "between"
        }`}
      >
        {page < total && <PageLink page={page + 1}>Older</PageLink>}
        {page > 1 && (
          <PageLink page={page - 1} newer={true}>
            Newer
          </PageLink>
        )}
      </nav>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const entries: EntryCollection<IReleaseNoteFields> = await client.getEntries({
    content_type: "releaseNote",
    skip: (Number(params?.page) - 1) * 4,
    limit: 4,
    select: "fields",
    order: "-sys.createdAt",
  });

  return {
    props: {
      data: entries.items,
      page: entries.skip / 4 + 1,
      total: Math.ceil(entries.total / 4),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const entries: EntryCollection<IReleaseNoteFields> = await client.getEntries({
    content_type: "releaseNote",
    select: "sys.id",
  });

  return {
    paths: Array.from(
      { length: Math.ceil(entries.items.length / 4) },
      (_, i) => `/release-notes/page/${i + 1}`
    ),
    fallback: false,
  };
};
