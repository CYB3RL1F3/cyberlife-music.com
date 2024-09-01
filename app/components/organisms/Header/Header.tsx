import Nav from "~/components/organisms/Nav";
import LinkNavItemList from "~/components/organisms/LinkNavItemList";
import { Link } from "@remix-run/react";
import type { LinkNavItemProps } from "~/components/atoms/LinkNavItem/LinkNavItem.types";
import type { Routes } from "~/routes/routes";
import { useState } from "react";
import ButtonMenu from "~/components/molecules/ButtonMenu";
import { AnimatePresence, motion } from "framer-motion";

const items: LinkNavItemProps[] = [
  {
    href: "/",
    label: "Podcasts"
  },
  {
    href: "/events",
    label: "Gigs"
  },
  {
    href: "/releases",
    label: "Releases"
  },
  {
    href: "/videos",
    label: "Videos"
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
    <AnimatePresence>
      <motion.header
        className="flex items-center justify-between w-screen h-12 text-sm md:px-6"
        initial={{
          y: -50
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.25,
          delay: 0.25,
          ease: "easeInOut"
        }}
      >
        <h1 className="p-0 m-1 mx-2 md:m-0 md:mx-0">
          <Link
            to="/"
            className="inline-flex items-center h-8 text-lg font-semibold uppercase"
          >
            Cyberlife
          </Link>
          <ButtonMenu isOpen={isOpen} onClick={toggle} />
        </h1>
        <Nav
          isOpen={isOpen}
          routes={routes}
          children={<LinkNavItemList onChange={close} items={items} />}
        />
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
