import classNames from "classnames";

type HeaderTextProps = {
  className?: string;
  children: React.ReactNode;
};

export const HeaderTitle = ({ className, children }: HeaderTextProps) => (
  <h1
    className={classNames("my-5 text-6xl text-gray-800 font-bold", className)}
  >
    <strong className="header-stripe">{children}</strong>
  </h1>
);

type HeaderProps = {
  title: string;
  children?: React.ReactNode;
};

export const Header = ({ title, children }: HeaderProps) => (
  <header>
    <div className="container text-gray-800 mb-16">
      <div className="text-center my-40">
        <HeaderTitle>{title}</HeaderTitle>
        <div className="text-2xl">{children}</div>
      </div>
    </div>
  </header>
);
