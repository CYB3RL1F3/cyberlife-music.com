import Card from '~/components/atoms/Card';

import type { CardLayoutProps } from './CardLayout.types';

const CardLayout = ({ children, left }: CardLayoutProps) => {
  return (
    <Card>
      <div className="flex items-center justify-center w-16 min-h-12">
        {left}
      </div>
      <div className="flex flex-col justify-center w-full o-2">{children}</div>
    </Card>
  );
};

export default CardLayout;
