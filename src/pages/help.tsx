import { Search, FAQ } from "components/molecules";
import { HeaderTitle } from "components/organisms";
import { GetStaticProps } from "next";
import { client } from "lib/contentful";
import { IFaqFields } from "types/generated/contentful";
import { EntryCollection } from "contentful";
import { FeatureDetail } from "components/molecules";

type HelpProps = {
  faqs: IFaqFields[];
};

export default ({ faqs }: HelpProps) => {
  return (
    <div
      className="container flex flex-col justify-center text-center"
      style={{ minHeight: "50vh" }}
    >
      <HeaderTitle>Help!</HeaderTitle>
      <div className="flex items-center">
        <Search className="w-full md:w-1/2 mx-auto mb-24" />
      </div>
      <div>
        <h2 className="text-4xl text-gray-800 font-bold my-12">
          Frequently Asked Questions
        </h2>
        <div className="faq-answer text-gray-800 sm:w-2/3 mx-auto mb-20">
          {faqs.map(({ answer, question }) => (
            <FAQ
              key={question}
              question={question}
              answer={answer}
              data-cy="faq"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const entries: EntryCollection<IFaqFields> = await client.getEntries({
    content_type: "faq",
    "fields.category[in]": "general",
  });

  return {
    props: {
      faqs: entries.items.map((item) => item.fields),
    },
  };
};
