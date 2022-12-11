import BraveIcon from "~/assets/brave.svg";
import ChromeIcon from "~/assets/chrome.svg";
import FirefoxIcon from "~/assets/firefox.svg";
import MaxthonIcon from "~/assets/maxthon.svg";
import TorchIcon from "~/assets/torch.png";
import type { ListBrowserItemProps } from "../ListBrowserItem";
import ListBrowserItem from "../ListBrowserItem";

const browsers: ListBrowserItemProps[] = [
  {
    id: "brave",
    title: "Brave",
    href: "https://brave.com",
    icon: BraveIcon
  },
  {
    id: "torch",
    title: "Torch",
    href: "https://torchbrowser.com/",
    icon: TorchIcon
  },
  {
    id: "maxthon",
    title: "Maxthon",
    href: "http://www.maxthon.com/",
    icon: MaxthonIcon
  },
  {
    id: "firefox",
    title: "Firefox",
    href: "https://www.mozilla.org/fr/firefox/new/",
    icon: FirefoxIcon,
    className: "translate-y-[2px]"
  },
  {
    id: "chrome",
    title: "Chrome",
    href: "https://www.google.com/chrome/",
    icon: ChromeIcon
  }
];

const ListBrowsers = () => {
  return (
    <div className="flex gap-4 md:gap-8">
      {browsers.map((browser) => (
        <ListBrowserItem {...browser} />
      ))}
    </div>
  );
};

export default ListBrowsers;
