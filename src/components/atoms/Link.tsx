import { default as NextLink } from "next/link";

type LinkProps = {
  href: string;
  as?: string;
  className?: string;
  children: React.ReactNode;
};

export const Link = ({ href, as, className, children }: LinkProps) => {
  if (href.match("^(https?|tel:|mailto:)")) {
    return (
      <a href={href} className={className}>
        children
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};
