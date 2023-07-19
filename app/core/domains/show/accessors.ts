import type { ImageVariants, Show } from './types'

export const getShowId = (show: Show) => show.id;

export const getShowName = (show: Show) => show.name;

export const getShowRating = (show: Show) => show.rating?.average;

export const getShowPremiereDate = (show: Show) => new Date(show.premiered);

export const getShowEndDate = (show: Show) => {
  if (show.status === "Ended") {
    return new Date(show.ended!)
  }

  return undefined;
}

export const getShowReleaseYear = (show: Show) => getShowPremiereDate(show).getFullYear();

export const getShowEndYear = (show: Show) => getShowEndDate(show)?.getFullYear() ?? "Today";

export const getShowImage = (show: Show, quality: keyof ImageVariants = "medium") => show.image[quality] ?? show.image.medium;

export const getShowSummary = (show: Show) => sanitizeSummary(show.summary)

const sanitizeSummary = (summary: string = "") => {
  const regex_tag = /(<\/?\S+\/?>)/g

  return summary.replace(regex_tag, "");
}
