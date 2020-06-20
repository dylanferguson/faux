import { ButtonLink } from "components/atoms";
import { IHeroSectionFields, IButton } from "types/generated/contentful";

export const HeroSection = ({
  title,
  subtitle,
  accentText,
  buttons,
  image,
}: IHeroSectionFields) => (
  <section
    className="pb-12 bg-indigo-700"
    style={{
      clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 3vw), 0 100%)",
      background: "linear-gradient(to top, #667eea, #4c51bf)",
    }}
  >
    <div className="container flex items-center space-x-2">
      <div className="w-full px-4 py-6 my-10 text-white md:w-1/2">
        <div className="text-2xl small-caps">{accentText}</div>
        <h1 className="text-5xl font-bold leading-snug sm:text-6xl">{title}</h1>
        <div className="text-2xl">{subtitle}</div>
        <div className="my-6">
          {buttons?.map(
            ({ fields: { link, secondary, buttonText } }: IButton, i) => (
              <ButtonLink
                key={i}
                href={link}
                secondary={secondary}
                className="mr-3"
              >
                {buttonText}
              </ButtonLink>
            )
          )}
        </div>
      </div>
      <div className="hidden w-1/2 md:block">
        <img src={image?.fields.file.url} className="mx-auto"></img>
      </div>
    </div>
  </section>
);
