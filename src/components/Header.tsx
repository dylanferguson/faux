import Link from "next/link";
import { ButtonLink as Button } from "../components/Button";

type NavItemProps = {
  link: string;
  label: string;
};

const NavItem = ({ link, label }: NavItemProps) => (
  <li className="list-none inline-block text-xl m-4 text-indigo-600 hover:text-indigo-800 small-caps">
    <Link href={link}>
      <a>{label}</a>
    </Link>
  </li>
);

const NavMenu = () => (
  <nav>
    <ol>
      <NavItem link="" label="Cards" />
      <NavItem link="" label="Blog" />
      <NavItem link="" label="Help" />
    </ol>
  </nav>
);

export const Header = () => (
  <div className="w-full border-b border-gray-200">
    <header className="mx-auto max-w-screen-xl flex justify-between items-center h-20">
      <Link href="/">
        <a
          href="/"
          className="text-indigo-600 text-3xl font-bold leading-none small-caps"
        >
          Faux
        </a>
        {/* <img src="" alt="Faux" /> */}
      </Link>
      <div className="flex items-center">
        <NavMenu />
        <div className="ml-10">
          <Button href="/login" secondary className="mr-3">
            Sign up!
          </Button>
          <Button href="/login">Log in</Button>
        </div>
      </div>
    </header>
  </div>
);
