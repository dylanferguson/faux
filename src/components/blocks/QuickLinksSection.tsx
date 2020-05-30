import {
  IQuickLinksSectionFields,
  IQuickLinkFields,
} from "types/generated/contentful";
import { Icon } from "components/atoms";
import Link from "next/link";
import classNames from "classnames";

type QuickLinkProps = IQuickLinkFields & {
  className?: string;
};

const QuickLink = ({ title, link, icon, className }: QuickLinkProps) => (
  <Link href={link}>
    <a
      className={classNames(
        "rounded-md bg-indigo-100 bg-opacity-25 px-8 py-8",
        className
      )}
    >
      <Icon
        id={icon}
        className="block w-8 h-8 fill-current text-indigo-600 mb-4"
      />
      <p className="text-xl font-medium leading-snug ">{title}</p>
    </a>
  </Link>
);

export const QuickLinksSection = ({
  title,
  links,
}: IQuickLinksSectionFields) => (
  <div className="container mx-auto mb-32">
    <h2 className="text-4xl text-center font-bold leading-relaxed mb-16">
      {title}
    </h2>
    <div
      className="w-full lg:w-5/6 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      style={{ gridAutoRows: "1fr" }}
    >
      {links.map((quickLink) => (
        <QuickLink
          className=""
          key={quickLink.fields.title}
          {...quickLink.fields}
        />
      ))}
    </div>
  </div>
);
// flex mb-4 flex-wrap
