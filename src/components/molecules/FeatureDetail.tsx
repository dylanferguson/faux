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
    <Icon id={icon} className="fill-current w-10 h-10 text-indigo-700 mb-3" />
    <h3 className="text-left text-xl font-medium mb-1">{title}</h3>
    <p className="text-left text-xl font-light text-indigo-900">{body}</p>
  </div>
);
