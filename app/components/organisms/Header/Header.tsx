import { headerLinkClassName } from "~/components/ions/header";
import Nav from "~/components/organisms/Nav";
import NavItemList from "~/components/organisms/NavItemList";
import { Link } from "@remix-run/react";
import type { NavItemProps } from "~/components/atoms/NavItem/NavItem.types";
import type { Routes } from "~/routes/routes";

const items: NavItemProps[] = [
  {
    href: "/",
    label: "Podcasts"
  },
  {
    href: "/gigs",
    label: "Gigs"
  },
  {
    href: "/releases",
    label: "Releases"
  },
  {
    href: "/contact",
    label: "Contact"
  }
];

const routes: Routes[] = items.map(({ href }) => href);

const Header = () => {
  return (
    <header className="w-screen h-12 flex justify-between items-center px-6 text-sm">
      <h1 className="m-0 p-0">
        <Link to="/" className={headerLinkClassName}>
          Cyberlife
        </Link>
      </h1>
      <Nav routes={routes} children={<NavItemList items={items} />} />
    </header>
  );
};

export default Header;
