import { Icon, IconName } from "components/atoms";

type FeatureDetailProps = {
  icon: IconName;
  title: string;
  body: string;
  className?: string;
};

export const FeatureDetail = ({
  icon,
  title,
  body,
  className,
}: FeatureDetailProps) => (
  <div className={className}>
    <Icon id={icon} className="w-10 h-10 mb-3 text-indigo-700 fill-current" />
    <h3 className="mb-1 text-xl font-medium text-left">{title}</h3>
    <p className="text-xl font-light text-left text-indigo-900">{body}</p>
  </div>
);
