import { ButtonLink as Button, MobileMenuToggle, Link } from "components/atoms";
import { useState } from "react";
import NextLink from "next/link";

type NavItemProps = {
  link: string;
  label: string;
};

const NavItem = ({ link, label }: NavItemProps) => (
  <li className="list-none inline-block text-xl text-indigo-600 hover:text-indigo-800 transition ease-in duration-100 small-caps">
    <Link href={link}>{label}</Link>
  </li>
);

type NavMenuProps = {
  mobile?: boolean;
};

const NavMenu = ({ mobile }: NavMenuProps) => (
  <nav>
    <ol className={mobile ? "space-y-2" : "space-x-6"}>
      <NavItem link="/release-notes/" label="Release Notes" />
      <NavItem link="/cards/" label="Cards" />
      <NavItem link="/blog/" label="Blog" />
      <NavItem link="/help/" label="Help!" />
    </ol>
  </nav>
);

const MenuContent = () => (
  <>
    <NavMenu />
    <div className="ml-10 space-x-3">
      <Button href="/login/" secondary>
        Sign up!
      </Button>
      <Button href="/login/">Log in</Button>
    </div>
  </>
);

export const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white z-50">
      <header
        className="container flex justify-between items-center h-20"
        data-cy="nav"
      >
        <NextLink href="/">
          <a aria-label="Faux logo" className="logo"></a>
        </NextLink>
        <div className="items-center hidden md:flex">
          <MenuContent />
        </div>
        <div className="md:hidden">
          <MobileMenuToggle
            open={toggle}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          {toggle && (
            <div
              className="fixed top w-full left-0 py-8 bg-white border-b border-t border-gray-200"
              style={{ top: "5rem" }}
            >
              <div className="container mx-auto mobile-menu space-y-4">
                <NavMenu mobile={true} />
                <div className="space-x-3">
                  <Button href="/login/" secondary>
                    Sign up!
                  </Button>
                  <Button href="/login/">Log in</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};
