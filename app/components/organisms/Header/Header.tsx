import Nav from '~/components/organisms/Nav';
import LinkNavItemList from '~/components/organisms/LinkNavItemList';
import { Link } from '@remix-run/react';
import type { LinkNavItemProps } from '~/components/atoms/LinkNavItem/LinkNavItem.types';
import type { Routes } from '~/routes/routes';
import { useState } from 'react';
import ButtonMenu from '~/components/molecules/ButtonMenu';
import { AnimatePresence, motion } from 'framer-motion';
import { useFeatureFlagQuery } from '~/hooks/queries/useFeatureFlagQuery';

const items: LinkNavItemProps[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/podcasts',
    label: 'Podcasts',
  },
  {
    href: '/events',
    label: 'Gigs',
  },
  {
    href: '/releases',
    label: 'Releases',
  },
  {
    href: '/videos',
    label: 'Videos',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/checkout',
    label: 'Cart',
  },
];

const routes: Routes[] = items.map(({ href }) => href);

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen((open) => !open);
  const close = () => setOpen(false);

  const { data } = useFeatureFlagQuery('purchase');

  const filteredRoutes = data?.featureFlag?.isActive
    ? routes
    : routes.filter((route) => route !== '/checkout');

  const filteredItems = items.filter((item) => {
    if (item.href === '/checkout') {
      return data?.featureFlag?.isActive;
    }
    return true;
  });

  return (
    <AnimatePresence>
      <motion.header
        className="flex items-center justify-between w-screen h-12 text-sm md:px-6"
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.5,
          ease: 'easeInOut',
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
          routes={filteredRoutes}
          children={<LinkNavItemList onChange={close} items={filteredItems} />}
        />
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
