import className from "classnames";
import Link from "next/link";
import { Icon, IconName } from "../components/Icon";

type FooterMenuProps = {
  title: string;
  items: string[];
};

const FooterMenu = ({ title, items }: FooterMenuProps) => (
  <nav className="text-white w-1/2 sm:w-1/4 md:w-1/5 px-3 mb-8">
    <h4 className="font-bold small-caps">{title}</h4>
    <ul>
      {items.map((item, i) => (
        <li key={i} className="my-3">
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
  <div className="flex flex-wrap justify-around w-full py-8 sm:py-0 md:w-1/5 space-x-8 sm:space-x-0 items-start">
    {IconIds.map((id) => (
      <Link href="">
        <a>
          <Icon
            id={id}
            key={id}
            className="w-6 h-6 fill-current text-white hover:opacity-75"
          />
        </a>
      </Link>
    ))}
  </div>
);

export const Footer = () => (
  <>
    <footer className="bg-indigo-700 footer-clip-path">
      <div className="my-20 container pt-24">
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
