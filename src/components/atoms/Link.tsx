import NextLink from "next/link";

type LinkProps = {
  href: string;
  as?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export const Link = ({ href, as, className, onClick, children }: LinkProps) => {
  if (href.match("^(https?|tel:|mailto:)")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        children
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a className={className} onClick={onClick}>
        {children}
      </a>
    </NextLink>
  );
};
