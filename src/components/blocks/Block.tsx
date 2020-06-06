import * as Blocks from "./index";

type BlockProps = {
  id: string;
};

export const Block = ({ id, ...props }: BlockProps) => {
  const blocks = {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    ...(Blocks as any),
  };

  const Component = blocks[id];
  return <Component {...props} />;
};
