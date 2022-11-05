import type { FooterProps } from "./Footer.types";

const Footer = ({ children }: FooterProps) => {
  return <footer className="h-12 w-screen">{children}</footer>;
};

export default Footer;
