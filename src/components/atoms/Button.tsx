import classNames from "classnames";
import { Link } from "components/atoms";

type ButtonSharedProps = {
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
};

type ButtonProps = ButtonSharedProps & {
  onClick?: () => void;
};

export const Button = ({
  children,
  onClick,
  className,
  secondary = false,
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={classNames(
      secondary ? "btn-secondary" : "btn-primary",
      className
    )}
  >
    {children}
  </button>
);

type ButtonLinkProps = ButtonSharedProps & {
  href: string;
};

export const ButtonLink = ({
  href,
  children,
  className,
  secondary = false,
}: ButtonLinkProps) => (
  <Link
    href={href}
    className={classNames(
      secondary ? "btn-secondary" : "btn-primary",
      className
    )}
  >
    {children}
  </Link>
);
