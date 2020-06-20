import { ButtonLink as Button, MobileMenuToggle, Link } from "components/atoms";
import { useState } from "react";
import NextLink from "next/link";
import Router from "next/router";

type NavItemProps = {
  link: string;
  label: string;
};

const NavItem = ({ link, label }: NavItemProps) => (
  <li className="inline-block text-xl text-indigo-600 list-none transition duration-100 ease-in hover:text-indigo-800 small-caps">
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
  Router.events.on("routeChangeStart", () => {
    setToggle(false);
  });

  return (
    <div className="sticky top-0 z-10 z-50 w-full bg-white border-b border-gray-200">
      <header
        className="container flex items-center justify-between h-20"
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
              className="fixed left-0 w-full py-8 bg-white border-t border-b border-gray-200 top"
              style={{ top: "5rem" }}
            >
              <div className="container mx-auto space-y-4 mobile-menu">
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
