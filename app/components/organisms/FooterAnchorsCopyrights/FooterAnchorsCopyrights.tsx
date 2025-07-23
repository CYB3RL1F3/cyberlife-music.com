import dayjs from 'dayjs';
import type { FooterAnchorsProps } from '~/components/molecules/FooterAnchors';
import FooterAnchors from '~/components/molecules/FooterAnchors';

const FooterAnchorsCopyrights = () => {
  const anchors: FooterAnchorsProps['anchors'] = [
    {
      label: '© Cyberlife',
      href: 'https://github.com/CYB3RL1F3',
      target: '_blank',
    },
    {
      label: dayjs().format('YYYY'),
      href: '',
    },
    {
      label: 'About website',
      href: '/about',
    },
    {
      label: 'Legal notice',
      href: '/legal-notice',
    },
    {
      label: 'Download presskit',
      href: '/presskit',
    },
  ];
  return <FooterAnchors anchors={anchors} />;
};

export default FooterAnchorsCopyrights;
