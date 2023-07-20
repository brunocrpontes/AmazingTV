import type { ImageVariants, TVSeries } from './types'

export const getTVSeriesId = (tvSeries: TVSeries) => tvSeries.id;

export const isTVSeriesEqual = (show1: TVSeries, show2: TVSeries) => getTVSeriesId(show1) === getTVSeriesId(show2);

export const getTVSeriesName = (tvSeries: TVSeries) => tvSeries.name;

export const getTVSeriesRating = (tvSeries: TVSeries) => tvSeries.rating?.average?.toFixed(1) ?? "No ratings"

export const getTVSeriesStatus = (tvSeries: TVSeries) => tvSeries.status;

export const isTVSeriesInDevelopment = (tvSeries: TVSeries) => getTVSeriesStatus(tvSeries) === "In Development";

export const isTVSeriesPremiered = (tvSeries: TVSeries) => !isTVSeriesInDevelopment(tvSeries);

export const isTVSeriesEnded = (tvSeries: TVSeries) => getTVSeriesStatus(tvSeries) === "Ended";

export const getTVSeriesPremiereDate = (tvSeries: TVSeries) => {
  const premiered = isTVSeriesPremiered(tvSeries);

  if (!premiered) return;

  return new Date(tvSeries.premiered!)
}

export const getTVSeriesEndDate = (tvSeries: TVSeries) => {
  const ended = isTVSeriesEnded(tvSeries);
  if (!ended) return;

  return new Date(tvSeries.ended!);
}

export const getTVSeriesReleaseYear = (tvSeries: TVSeries) => getTVSeriesPremiereDate(tvSeries)?.getFullYear() ?? "Soon";

export const getTVSeriesEndYear = (tvSeries: TVSeries) => getTVSeriesEndDate(tvSeries)?.getFullYear() ?? "Running";

export const getTVSeriesCalendar = (tvSeries: TVSeries) => {
  const releaseYear = getTVSeriesReleaseYear(tvSeries).toString();

  if (isTVSeriesInDevelopment(tvSeries)) return releaseYear;

  const endYear = getTVSeriesEndYear(tvSeries);

  return `${releaseYear} - ${endYear}`;
}

export const getTVSeriesImageUrl = (tvSeries: TVSeries, quality: keyof ImageVariants = "medium") => {
  const images = tvSeries.image;
  if (!images) return;

  return images[quality] ?? images.medium ?? images.original;
};

export const getTVSeriesGenres = (tvSeries: TVSeries) => tvSeries.genres;

export const getTVSeriesSchedule = (tvSeries: TVSeries) => tvSeries.schedule;

export const getTVSeriesSummary = (tvSeries: TVSeries) => {
  if (tvSeries.summary) {
    return sanitizeSummary(tvSeries.summary)
  }

  return ""
}

const sanitizeSummary = (summary: string = "") => {
  const regex_tag = /(<\/?\S+\/?>)/g

  return summary.replace(regex_tag, "");
}
