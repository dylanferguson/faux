import { ISimpleFeatureSectionFields } from "types/generated/contentful";
import { Icon } from "components/atoms/Icon";

export const SimpleFeatureSection = ({
  title,
  features,
}: ISimpleFeatureSectionFields) => (
  <div className="my-40">
    <h2 className="text-gray-800 font-bold leading-loose text-center text-4xl my-12">
      {title}
    </h2>
    <ul className="flex flex-wrap md:w-3/4 mx-auto">
      {features.map((feature) => (
        <li className="flex items-top md:w-1/2 text-gray-800 text-xl leading-snug mb-6 text-left">
          <Icon
            id="check"
            className="w-8 h-8 fill-current text-indigo-700 mr-4 flex-none"
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);
