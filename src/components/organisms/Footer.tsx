import className from "classnames";
import { Icon, IconName, Link } from "components/atoms";
import NextLink from "next/link";

type FooterMenuProps = {
  title: string;
  items: string[];
};

const FooterMenu = ({ title, items }: FooterMenuProps) => (
  <nav className="w-1/2 mb-8 text-white sm:w-1/4 lg:w-1/5 md:px-3">
    <p className="font-bold small-caps">{title}</p>
    <ul>
      {items.map((item, i) => (
        <li key={item} className="my-3">
          <Link
            href="/"
            className={className("hover:text-indigo-200", {
              "api-status": item === "API Status",
            })}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const SocialIcon = ({ id }: { id: IconName }) => (
  <NextLink href="/" key={id}>
    <a aria-label={`${id}`}>
      <Icon
        id={id}
        className="w-6 h-6 text-white fill-current hover:opacity-75"
      />
    </a>
  </NextLink>
);

const Icons = () => (
  <div className="flex flex-wrap items-start w-full py-8 space-x-8 lg:justify-around sm:py-0 lg:w-1/5 lg:space-x-0">
    <SocialIcon id="instagram" />
    <SocialIcon id="facebook" />
    <SocialIcon id="twitter" />
    <SocialIcon id="linkedin" />
    <SocialIcon id="whatsapp" />
  </div>
);

export const Footer = () => (
  <>
    <footer
      className="bg-indigo-700"
      style={{
        clipPath: "polygon(0 3vw, 100% 0, 100% 100%, 0 100%)",
        background: "linear-gradient(#667eea, #4c51bf)",
      }}
      data-cy="footer"
    >
      <div className="container pt-12 my-20 sm:pt-24">
        <nav className="flex flex-wrap">
          <FooterMenu
            title="Company"
            items={["About", "Jobs", "Blog", "Newsroom", "Environment"]}
          />
          <FooterMenu
            title="Features"
            items={[
              "Real-time banking",
              "Cardless spending",
              "Spend analysis",
              "Saving goals",
              "Fraud detection",
              "Card Lock",
              "Instant global transfers",
            ]}
          />
          <FooterMenu
            title="Customer Support"
            items={[
              "Covid—19 resources",
              "Support",
              "Contact",
              "Privacy & Terms",
            ]}
          />
          <FooterMenu
            title="Developers Developers Developers!"
            items={[
              "Documentation",
              "API Reference",
              "API Status",
              "Open Source",
            ]}
          />
          <Icons />
        </nav>
      </div>
    </footer>
    <div className="container flex justify-between my-4">
      <span>© Faux 2020</span>
      <span>A totally legit bank</span>
    </div>
  </>
);
