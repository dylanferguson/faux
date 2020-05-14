import Link from "next/link";
import { ButtonLink as Button } from "../components/Button";

type NavItemProps = {
  link: string;
  label: string;
};

const NavItem = ({ link, label }: NavItemProps) => (
  <li className="list-none inline-block text-xl text-indigo-600 hover:text-indigo-800 transition ease-in duration-100 small-caps">
    <Link href={link}>
      <a>{label}</a>
    </Link>
  </li>
);

const NavMenu = () => (
  <nav>
    <ol className="space-x-6">
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
          className="text-indigo-600 italic text-3xl font-bold leading-none small-caps"
        >
          Faux!
        </a>
        {/* <img src="" alt="Faux" /> */}
      </Link>
      <div className="flex items-center">
        <NavMenu />
        <div className="ml-10 space-x-3">
          <Button href="/login" secondary>
            Sign up!
          </Button>
          <Button href="/login">Log in</Button>
        </div>
      </div>
    </header>
  </div>
);
