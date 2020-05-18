import Link from "next/link";
import { ButtonLink as Button } from "../components/Button";

const Hamburger = () => (
  <>
    <span></span>
    <span></span>
    <span></span>
  </>
);

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
      <NavItem link="/release-notes" label="Release Notes" />
      <NavItem link="/cards" label="Cards" />
      <NavItem link="/blog" label="Blog" />
      <NavItem link="/help" label="Help" />
    </ol>
  </nav>
);

const MenuContent = () => (
  <>
    <NavMenu />
    <div className="ml-10 space-x-3">
      <Button href="/login" secondary>
        Sign up!
      </Button>
      <Button href="/login">Log in</Button>
    </div>
  </>
);

export const Header = () => {
  return (
    <div className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white">
      <header className="container flex justify-between items-center h-20">
        <Link href="/">
          <a href="/" className="logo"></a>
        </Link>
        <div className="items-center hidden sm:flex">
          <MenuContent />
        </div>
      </header>
    </div>
  );
};
