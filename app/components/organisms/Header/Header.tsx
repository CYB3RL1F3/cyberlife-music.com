import Nav from "~/components/organisms/Nav";
import LinkNavItemList from "~/components/organisms/LinkNavItemList";
import { Link } from "@remix-run/react";
import type { LinkNavItemProps } from "~/components/atoms/LinkNavItem/LinkNavItem.types";
import type { Routes } from "~/routes/routes";
import { theme } from "~/theme";

const items: LinkNavItemProps[] = [
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
        <Link to="/" className={theme.largeSemiBoldUppercase}>
          Cyberlife
        </Link>
      </h1>
      <Nav routes={routes} children={<LinkNavItemList items={items} />} />
    </header>
  );
};

export default Header;
