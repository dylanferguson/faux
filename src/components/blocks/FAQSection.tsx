import { IFaqSectionFields } from "types/generated/contentful";
import { FAQ } from "components/molecules/FAQ";

export const FAQSection = ({ title, faqs }: IFaqSectionFields) => (
  <section className="container mx-auto">
    <h2 className="my-10 text-4xl font-semibold text-center text-gray-800">
      {title}
    </h2>
    <div className="mx-auto mb-20 sm:w-3/4">
      {faqs.map(({ fields }) => (
        <FAQ key={fields.question} {...fields} />
      ))}
    </div>
  </section>
);
