import { IIntroTextSectionFields } from "types/generated/contentful";

export const IntroTextSection = ({ title, body }: IIntroTextSectionFields) => (
  <section className="container mx-auto mt-32 mb-40 text-indigo-900">
    <h2>{title}</h2>
    <p
      className="mx-auto text-2xl font-light leading-relaxed text-center"
      style={{ maxWidth: "70ch" }}
    >
      {body}
    </p>
  </section>
);
