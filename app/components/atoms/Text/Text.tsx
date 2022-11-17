import type { FormattedTextProps, TextProps } from "./Text.types";

const leadings = {
  xs: "leading-3",
  sm: "leading-4",
  md: "leading-6",
  lg: "leading-8",
  xl: "leading-12",
  xxl: "leading-18"
};

const Text = ({
  children,
  fontStyle = "normal",
  size = "md",
  align = "left",
  weight = "normal",
  isUppercase
}: TextProps) => {
  return (
    <p
      className={`pr-2 m-0 font-${weight} ${
        isUppercase ? "uppercase" : ""
      } text-${size} ${
        leadings[size]
      } ${fontStyle} text-${align} text-gray-400 p-O`}
    >
      {children}
    </p>
  );
};

const TextRight = ({ children }: FormattedTextProps) => (
  <Text align="right">{children}</Text>
);

const TextRightMd = ({ children }: FormattedTextProps) => (
  <Text align="right" size="md">
    {children}
  </Text>
);

const TextRightItalic = ({ children }: FormattedTextProps) => (
  <Text align="right" fontStyle="italic">
    {children}
  </Text>
);

const TextSemiBold = ({ children }: FormattedTextProps) => (
  <Text weight="semibold">{children}</Text>
);

const TextMd = ({ children }: FormattedTextProps) => (
  <Text size="md">{children}</Text>
);

const TextSm = ({ children }: FormattedTextProps) => (
  <Text size="sm">{children}</Text>
);

const TextLg = ({ children }: FormattedTextProps) => (
  <Text size="lg">{children}</Text>
);

const TextMdSemiBold = ({ children }: FormattedTextProps) => (
  <Text size="md" weight="semibold">
    {children}
  </Text>
);

const TextSmSemiBold = ({ children }: FormattedTextProps) => (
  <Text size="sm" weight="semibold">
    {children}
  </Text>
);

const TextRightMdSemiBold = ({ children }: FormattedTextProps) => (
  <Text align="right" size="md" weight="semibold">
    {children}
  </Text>
);

const TextRightMdItalic = ({ children }: FormattedTextProps) => (
  <Text align="right" size="md" fontStyle="italic">
    {children}
  </Text>
);

Text.Right = TextRight;
Text.RightItalic = TextRightItalic;
Text.RightMd = TextRightMd;
Text.Semibold = TextSemiBold;
Text.RightMdSemiBold = TextRightMdSemiBold;
Text.MdSemiBold = TextMdSemiBold;
Text.SmSemiBold = TextSmSemiBold;
Text.RightMdItalic = TextRightMdItalic;
Text.Md = TextMd;
Text.Sm = TextSm;
Text.Lg = TextLg;

export default Text;
