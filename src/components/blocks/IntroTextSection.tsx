import { IIntroTextSectionFields } from "types/generated/contentful";

export const IntroTextSection = ({ title, body }: IIntroTextSectionFields) => (
  <section className="container mx-auto mt-32 mb-40 text-indigo-900">
    <h2>{title}</h2>
    <p
      className="text-2xl leading-relaxed text-center mx-auto font-light"
      style={{ maxWidth: "70ch" }}
    >
      {body}
    </p>
  </section>
);
