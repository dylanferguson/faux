import { Icon as UnstyledIcon, IconName } from "../components/Icon";

type IconProps = {
  id: IconName;
};

const Icon = ({ id }: IconProps) => (
  <UnstyledIcon
    id={id}
    style={{ height: "0.9em" }}
    className="fill-current inline-block mx-2"
  />
);

export default () => (
  <div className="container">
    <h1 className="text-5xl text-gray-700 my-8 font-bold">Colophon</h1>
    <p className="flex items-center my-16 text-6xl font-medium text-gray-700">
      Built with
      <a href="https://nextjs.org/">
        <Icon id="nextjs" />
      </a>
      , <a href="https://reactjs.org/">
        <Icon id="react" /> React
      </a>
      , <a href="https://www.typescriptlang.org">
        <Icon id="typescript" />TypeScript
      </a>
    </p>
  </div>
);
