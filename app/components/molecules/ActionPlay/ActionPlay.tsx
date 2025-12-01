import Action from '~/components/atoms/Action';
import ShapePlay from '~/components/atoms/ShapePlay';

import type { ActionPlayProps } from './ActionPlay.types';

const ActionPlay = ({ isPlaying, onChange, title }: ActionPlayProps) => {
  const handleClick = () => {
    onChange?.(!isPlaying);
  };
  return (
    <Action
      title={title}
      onClick={handleClick}
      className="flex items-center justify-center w-full h-full transition-all duration-75 bg-black bg-opacity-20 hover:bg-opacity-40"
    >
      <ShapePlay isPlaying={isPlaying} />
    </Action>
  );
};

export default ActionPlay;
