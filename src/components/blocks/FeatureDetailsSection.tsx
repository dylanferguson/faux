import { FeatureDetail } from "components/molecules";
import { IFeatureDetailsSectionFields } from "types/generated/contentful";

export const FeatureDetailsSection = ({
  featureDetails,
}: IFeatureDetailsSectionFields) => (
  <section className="flex flex-wrap items-start justify-center container mt-4 mb-32">
    {featureDetails.map(({ fields }) => (
      <FeatureDetail
        key={fields.title}
        className="w-full md:w-1/2 lg:w-1/3 px-8 mb-12"
        {...fields}
      />
    ))}
  </section>
);
