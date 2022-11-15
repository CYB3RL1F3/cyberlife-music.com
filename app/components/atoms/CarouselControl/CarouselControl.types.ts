export type CarouselControlProps = {
  index: number;
  onChange?: (index: CarouselControlProps["index"]) => void;
  isActive?: boolean;
};
