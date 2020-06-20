import { ISimpleFeatureSectionFields } from "types/generated/contentful";
import { Icon } from "components/atoms/Icon";

export const SimpleFeatureSection = ({
  title,
  features,
}: ISimpleFeatureSectionFields) => (
  <section className="container my-24">
    <h2 className="my-12 text-4xl font-bold leading-loose text-center">
      {title}
    </h2>
    <ul className="flex flex-wrap mx-auto xl:w-5/6">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex w-full pr-6 mb-6 text-xl leading-normal text-left items-top md:w-1/2"
        >
          <Icon
            id="check"
            className="flex-none w-8 h-8 mr-4 text-indigo-700 fill-current"
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </section>
);
