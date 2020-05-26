import className from "classnames";
import Link from "next/link";
import { Icon, IconName } from "components/atoms";

type FooterMenuProps = {
  title: string;
  items: string[];
};

const FooterMenu = ({ title, items }: FooterMenuProps) => (
  <nav className="text-white w-1/2 sm:w-1/4 lg:w-1/5 md:px-3 mb-8">
    <h4 className="font-bold small-caps">{title}</h4>
    <ul>
      {items.map((item, i) => (
        <li key={item} className="my-3">
          <Link href="">
            <a
              className={className("hover:text-indigo-200", {
                "api-status": item === "API Status",
              })}
            >
              {item}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const IconIds: IconName[] = ["instagram", "facebook", "twitter", "linkedin"];
const Icons = () => (
  <div className="flex flex-wrap lg:justify-around w-full py-8 sm:py-0 lg:w-1/5 space-x-8 lg:space-x-0 items-start">
    {IconIds.map((id) => (
      <Link href="" key={id}>
        <a>
          <Icon
            id={id}
            className="w-6 h-6 fill-current text-white hover:opacity-75"
          />
        </a>
      </Link>
    ))}
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
    >
      <div className="my-20 container pt-12 sm:pt-24">
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
            title="Developers Devlopers Developers!"
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
    <div className="flex justify-between my-4 text-gray-800 container">
      <span>© Faux 2020</span>
      <span>A totally legit bank</span>
    </div>
  </>
);
