import Action from '~/components/atoms/Action';
import ShapePlay from '~/components/atoms/ShapePlay';

import type { ActionPlayProps } from './ActionPlay.types';

const ActionPlay = ({
  isPlaying,
  onChange,
  title,
  disabled,
}: ActionPlayProps) => {
  const handleClick = () => {
    onChange?.(!isPlaying);
  };
  return (
    <Action
      title={title}
      disabled={disabled}
      onClick={handleClick}
      className="flex items-center justify-center w-full h-full transition-all duration-75 bg-black/20 hover:bg-black/40"
    >
      <ShapePlay isPlaying={isPlaying} />
    </Action>
  );
};

export default ActionPlay;
