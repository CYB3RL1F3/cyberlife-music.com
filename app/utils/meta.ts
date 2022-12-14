import { MetaFunction } from "@remix-run/server-runtime";

export const getTitle = (title: string) => ({
  title,
  "og:site_name": title,
  "og:title": title,
  "twitter:site_name": title,
  "twitter:title": title
});

export const getImage = (image: string) => ({
  image,
  "og:image": image,
  "og:image:secure_url": image,
  "twitter:image": image
});

export const getDescription = (description: string) => ({
  description,
  "og:description": description
});

export const meta: ReturnType<MetaFunction> = {
  charset: "utf-8",
  expires: "0",
  pragma: "no-cache",
  robots: "all",
  viewport: "width=device-width,initial-scale=1",
  "og:type": "website",
  "mobile-web-app-capable": "yes",
  "twitter:card": "summary"
};

export type Meta = {
  title?: string;
  image?: string;
  description?: string | null;
};

export const getMeta = ({
  title = "Cyberlife's music",
  image = "https://res.cloudinary.com/hw2jydiif/image/upload/v1667476701/btby2qfnqpbpnnfpzdt5.webp",
  description
}: Meta): ReturnType<MetaFunction> => ({
  ...meta,
  ...getTitle(title),
  ...getImage(image),
  ...(description && getDescription(description))
});
