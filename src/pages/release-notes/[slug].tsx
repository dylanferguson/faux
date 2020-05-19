import { GetStaticProps, GetStaticPaths } from "next";
import { ReleaseNote } from "./index";
import { client } from "lib/contentful";
import { EventEmitter } from "events";

export default (props: any) => {
  console.log(props);
  return <div>Hi!</div>;
};


// TODO: Create getEntries wrapper that filters very down to fields
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const entries: any = await client.getEntries({
    content_type: "release",
    'fields.version[in]': params?.slug,
  })

  return {
    props: {
      params,
    },
  };
};

export async function getStaticPaths() {
  const entries: any = await client.getEntries({
    content_type: "release",
    select: "fields.version",
  });

  const paths = entries.items.map(({ fields }: any) => `/release-notes/${fields.version}`)

  return {
    paths,
    fallback: false,
  };
}
