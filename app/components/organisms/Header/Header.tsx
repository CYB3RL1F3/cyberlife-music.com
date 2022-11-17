import Nav from "~/components/organisms/Nav";
import LinkNavItemList from "~/components/organisms/LinkNavItemList";
import { Link } from "@remix-run/react";
import type { LinkNavItemProps } from "~/components/atoms/LinkNavItem/LinkNavItem.types";
import type { Routes } from "~/routes/routes";
import { theme } from "~/theme";
import { useState } from "react";
import ButtonMenu from "~/components/molecules/ButtonMenu";

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
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen((open) => !open);
  const close = () => setOpen(false);

  return (
    <header className="flex items-center justify-between w-screen h-12 text-sm md:px-6">
      <h1 className="p-0 m-1 mx-2 md:m-0 md:mx-0">
        <Link to="/" className={theme.largeSemiBoldUppercase}>
          Cyberlife
        </Link>
        <ButtonMenu isOpen={isOpen} onClick={toggle} />
      </h1>
      <Nav
        isOpen={isOpen}
        routes={routes}
        children={<LinkNavItemList onChange={close} items={items} />}
      />
    </header>
  );
};

export default Header;
