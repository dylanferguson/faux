import classNames from "classnames";
import Link from "next/link";

type ButtonSharedProps = {
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
};

type ButtonProps = ButtonSharedProps & {
  onClick?: () => void;
};

const commonStyles =
  "inline-block rounded pointer-cursor  py-1 px-4 text-xl small-caps shadow hover:shadow-md transition ease-in duration-100";
const primaryStyles =
  "text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700";
const secondaryStyles =
  "text-indigo-500 bg-white hover:text-indigo-400 active:text-indigo-800";
const styles = (secondary: boolean, className?: string) =>
  classNames(
    commonStyles,
    secondary ? secondaryStyles : primaryStyles,
    className
  );

export const Button = ({
  children,
  onClick,
  className,
  secondary = false,
}: ButtonProps) => (
  <button onClick={onClick} className={styles(secondary, className)}>
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
  <Link href={href}>
    <a className={styles(secondary, className)}>{children}</a>
  </Link>
);
