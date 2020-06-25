import { IFaqSectionFields } from "types/generated/contentful";
import { FAQ } from "components/molecules/FAQ";
import Head from "next/head";
import { FAQPage } from "schema-dts";

export const FAQSection = ({ title, faqs }: IFaqSectionFields) => {
  const FAQSchema: FAQPage = {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ fields: { question, answer } }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(FAQSchema)}</script>
      </Head>
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
    </>
  );
};
