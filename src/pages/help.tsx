import { Search, FAQ } from "components/molecules";
import { HeaderTitle } from "components/organisms";
import { GetStaticProps } from "next";
import { client } from "lib/contentful";
import { IFaqFields } from "types/generated/contentful";
import { EntryCollection } from "contentful";

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
        <Search className="w-full mx-auto mb-24 md:w-1/2" />
      </div>
      <div>
        <h2 className="my-12 text-4xl font-bold">Frequently Asked Questions</h2>
        <div className="mx-auto mb-20 faq-answer sm:w-2/3">
          {faqs.map(({ answer, question }) => (
            <FAQ key={question} question={question} answer={answer} />
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
