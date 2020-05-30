import * as Blocks from "./index";

type BlockProps = {
  id: string;
};

export const Block = ({ id, ...props }: BlockProps) => {
  const blocks = {
    ...Blocks,
  };

  const Component = blocks[id];
  return <Component {...props} />;
};
