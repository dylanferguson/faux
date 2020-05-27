import { FeatureDetail } from "components/molecules";
import { IFeatureDetailSectionFields } from "types/generated/contentful";

export const FeatureDetailsSection = ({
  featureDetails,
}: IFeatureDetailSectionFields) => (
  <div className="flex items-start justify-center col-gap-20 container mt-4 mb-32">
    {featureDetails.map(({ fields }) => (
      <FeatureDetail className="w-1/3" {...fields} />
    ))}
  </div>
);
