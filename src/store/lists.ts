import { ActivityDate, ActivityMedia } from "@/interfaces/activity";
import { fetchList } from "./api";
import { newActivityDate } from "./helpers";
import store, { weekdays } from "./store";

export async function fetchMediaList(type: string): Promise<ActivityMedia[]> {
  const r = await fetchList(store.state.userData.id, type);
  const list = r.data.MediaListCollection.lists;

  // Merge all lists into one, remove custom lists
  const formatted = list
    .filter((x: any) => !x.isCustomList)
    .map((x: any) => x.entries)
    .flat(1);

  const final: ActivityMedia[] = formatted
    .map((x: any): ActivityMedia[] => ({
      ...x.media,
      title: x.media.title.romaji,
      type: x.media.type,
      status: x.status,
      cover: x.media.coverImage.medium,
      banner: x.media.bannerImage,
      progress: x.progress,
      started: mapDates(x.startedAt),
      completed: mapDates(x.completedAt),
      added: newActivityDate(x.createdAt * 1000),
    }))
    .sort((a: ActivityMedia, b: ActivityMedia) =>
      a.title.localeCompare(b.title)
    ); // Sort alphabetically

  return final;
}

//performance goes brrr
function mapDates(y: any): ActivityDate {
  if (y.day == null) {
    return {
      d: 0,
      m: 0,
      y: 0,
      time: 0,
    };
  }

  const date = new Date(y.year, y.month, y.day);

  return {
    d: y.day,
    m: y.month,
    y: y.year,
    weekday: weekdays[date.getDay()],
    time: date.getTime(),
  };
}
