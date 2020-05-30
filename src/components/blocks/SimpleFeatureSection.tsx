import { ISimpleFeatureSectionFields } from "types/generated/contentful";
import { Icon } from "components/atoms/Icon";

export const SimpleFeatureSection = ({
  title,
  features,
}: ISimpleFeatureSectionFields) => (
  <section className="my-24 container">
    <h2 className="text-gray-800 font-bold leading-loose text-center text-4xl my-12">
      {title}
    </h2>
    <ul className="flex flex-wrap xl:w-5/6 mx-auto">
      {features.map((feature) => (
        <li className="flex items-top w-full md:w-1/2 text-gray-800 text-xl leading-normal mb-6 pr-6 text-left">
          <Icon
            id="check"
            className="w-8 h-8 fill-current text-indigo-700 mr-4 flex-none"
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </section>
);
