export const theme = {
  smallSemiBold: "font-semibold text-sm leading-4",
  midSemiBold: "font-semibold text-md leading-6",
  largeSemiBoldUppercase:
    "h-8 inline-flex items-center uppercase text-lg font-semibold",
  linkHover: "cursor:pointer hover:text-white",
  linkSeparatorDash:
    "inline-flex before:content-['-'] before:w-4 before:text-center"
};

export type Theme = typeof theme;
