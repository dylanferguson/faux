import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  Document,
  BLOCKS,
  MARKS,
  Block,
  Inline,
} from "@contentful/rich-text-types";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

type RichTextRenderOptions = {
  renderNode: {
    [key: string]: (
      node: Block | Inline,
      children: React.ReactNode
    ) => React.ReactNode;
  };
};

const options: RichTextRenderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
  },
};

export const richTextRender = (doc: Document) =>
  documentToReactComponents(doc, options);
