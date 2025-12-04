import type { CardProps } from './Card.types';

const Card = ({ children }: CardProps) => {
  return (
    <article className="flex p-1 bg-gray-600/50 rounded">{children}</article>
  );
};
export default Card;
