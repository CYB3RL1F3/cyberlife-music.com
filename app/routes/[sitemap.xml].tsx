import { sitemapGenerator } from "~/utils/sitemap-generator";
import type { Path } from "~/utils/sitemap-generator";
import { runEventsQuery } from "~/queries/events";
import { runPlaylistQuery } from "~/queries/playlists";
import { runReleasesQuery } from "~/queries/releases";
import dayjs from "dayjs";

const getPath = (
  loc: string,
  priority: number = 1,
  changeFreq: Path["changeFreq"] = "daily"
) => ({
  loc,
  lastMod: dayjs().format("YYYY-MM-DD"),
  priority,
  changeFreq
});

const getPaths = async (): Promise<Path[]> => {
  const [events, podcasts, releases] = await Promise.all([
    runEventsQuery(),
    runPlaylistQuery("dj-sets"),
    runReleasesQuery()
  ]);
  const paths: Path[] = [
    getPath("/"),
    getPath("/podcasts"),
    getPath("/events"),
    getPath("/releases", 0.8),
    getPath("/contact", 0.5, "monthly")
  ];
  const eventsPaths = (events.data.events || []).map((event) =>
    getPath(`/events/${event._id}`)
  );
  const podcastsPaths = (podcasts.data.playlist.tracks || []).map((podcast) =>
    getPath(`/podcasts/${podcast.id}`)
  );
  const releasesPaths = (releases.data.releases || []).map((release) =>
    getPath(`/releases/${release._id}`)
  );
  return [...paths, ...podcastsPaths, ...releasesPaths, ...eventsPaths];
};

export const loader = async () => {
  const paths = await getPaths();
  const content = await sitemapGenerator(paths);
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8"
    }
  });
};
