import {
  IQuickLinksSectionFields,
  IQuickLinkFields,
} from "types/generated/contentful";
import { Icon, Link } from "components/atoms";
import classNames from "classnames";

type QuickLinkProps = IQuickLinkFields & {
  className?: string;
};

const QuickLink = ({ title, link, icon, className }: QuickLinkProps) => (
  <Link
    href={link}
    className={classNames(
      "rounded-md bg-indigo-100 bg-opacity-25 px-8 py-8",
      className
    )}
  >
    <Icon
      id={icon}
      className="block w-8 h-8 mb-4 text-indigo-600 fill-current"
    />
    <p className="text-xl font-medium leading-snug ">{title}</p>
  </Link>
);

export const QuickLinksSection = ({
  title,
  links,
}: IQuickLinksSectionFields) => (
  <div className="container mx-auto mb-32">
    <h2 className="mb-16 text-4xl font-bold leading-relaxed text-center">
      {title}
    </h2>
    <div
      className="grid w-full grid-cols-1 gap-4 mx-auto lg:w-5/6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
