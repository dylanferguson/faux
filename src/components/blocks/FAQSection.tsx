import { IFaqSectionFields } from "types/generated/contentful";
import { FAQ } from "components/molecules/FAQ";

export const FAQSection = ({ title, faqs }: IFaqSectionFields) => (
  <section className="container mx-auto">
    <h2 className="text-4xl text-center my-10 font-semibold text-gray-800">
      {title}
    </h2>
    <div className="sm:w-3/4 mx-auto mb-20">
      {faqs.map(({ fields }) => (
        <FAQ key={fields.question} {...fields} />
      ))}
    </div>
  </section>
);
