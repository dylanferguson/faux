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
    <div className="container space-x-2 flex items-center">
      <div className="px-4 py-6 w-full md:w-1/2 text-white my-10">
        <div className="small-caps text-2xl">{accentText}</div>
        <h1 className="text-5xl sm:text-6xl leading-snug font-bold">{title}</h1>
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
      <div className="w-1/2 hidden md:block">
        <img src={image?.fields.file.url} className="mx-auto"></img>
      </div>
    </div>
  </section>
);
