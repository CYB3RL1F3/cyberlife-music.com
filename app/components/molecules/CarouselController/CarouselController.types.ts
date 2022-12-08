export type CarouselControllerProps = {
  nbItems: number;
  index: number;
  name?: string;
  onChange: (index: number) => void;
};
