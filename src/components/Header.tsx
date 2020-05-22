type HeaderProps = {
  title: string;
  children: React.ReactNode;
};

export const Header = ({ title, children }: HeaderProps) => (
  <header>
    <div className="container text-gray-800 mb-16">
      <div className="text-center my-40">
        <h1 className="my-5 text-6xl font-bold">
          <strong className="header-stripe">{title}</strong>
        </h1>
        <div className="text-2xl">
          {children}
        </div>
      </div>
    </div>
  </header>
);
