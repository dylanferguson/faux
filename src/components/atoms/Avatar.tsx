import { IAuthor } from "types/generated/contentful";
import classNames from "classnames";

type AvatarProps = {
  author: IAuthor;
  className?: string;
};

export const Avatar = ({ author, className }: AvatarProps) => (
  <div className={classNames("flex items-center", className)}>
    <img
      className="w-16 h-16 mr-4 border-4 border-white rounded-full"
      src={`${author.fields?.avatar?.fields.file.url}?h=64&fit=scale`}
      alt={author.fields.name}
    />
    <div className="text-2xl font-semibold text-white">
      {author.fields.name}
    </div>
  </div>
);
