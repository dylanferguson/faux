import { IAuthor } from "types/generated/contentful";
import classNames from "classnames";

type AvatarProps = {
  author: IAuthor;
  className?: string;
};

export const Avatar = ({ author, className }: AvatarProps) => (
  <div className={classNames("flex items-center", className)}>
    <img
      className="w-16 h-16 rounded-full mr-4 border-4 border-white"
      src={`${author.fields?.avatar?.fields.file.url}?h=64&fit=scale`}
      alt={author.fields.name}
    />
    <div className="text-2xl text-white font-semibold">
      {author.fields.name}
    </div>
  </div>
);
