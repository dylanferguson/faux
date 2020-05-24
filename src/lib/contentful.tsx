import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS, MARKS } from "@contentful/rich-text-types";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (_, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (_, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (_, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (_, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (_, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (_, children) => <h6>{children}</h6>,
  },
};

export const richTextRender = (doc: Document) =>
  documentToReactComponents(doc, options);
