import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  Document,
  BLOCKS,
  MARKS,
  Block,
  INLINES,
  Inline,
  Text,
} from "@contentful/rich-text-types";
import { Image } from "components/atoms";

type RichTextRenderOptions = {
  renderMark: {
    [key: string]: (text: React.ReactNode) => React.ReactNode;
  };
  renderNode: {
    [key: string]: (
      node: Block | Inline,
      children: React.ReactNode
    ) => React.ReactNode;
  };
};

const options: RichTextRenderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
      <Image src={node.data.target.fields.file.url} />
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} className="text-indigo-600 hover:text-indigo-400">
        {children}
      </a>
    ),
  },
};

export const richTextRenderer = (doc: Document) =>
  documentToReactComponents(doc, options);
