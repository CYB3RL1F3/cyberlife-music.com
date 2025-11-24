export const content = `
  User-agent: *
  Allow: /
  Disallow: /checkout
  Sitemap: https://cyberlife-music.com/sitemap.xml
`;

export const loader = () => {
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text',
      encoding: 'UTF-8',
    },
  });
};
