import { removeHtmlTags } from '@core/strings';
import { Episode, EpisodeImageQuality } from './types'

export const getEpisodeId = (episode: Episode) => episode.id;
export const getEpisodeName = (episode: Episode) => episode.name;
export const getEpisodeNumber = (episode: Episode) => episode.number;
export const getEpisodeSeason = (episode: Episode) => episode.season;
export const getEpisodeRating = (episode: Episode) => episode.rating?.average?.toFixed(1) ?? "No ratings"
export const getEpisodeAirDate = (episode: Episode) => new Date(episode.airdate).toDateString();

export const getEpisodeSummary = (episode: Episode) => {
  const summary = episode.summary;

  if (!summary) return "";

  return removeHtmlTags(summary);
}

export const getEpisodeImageUrl = (episode: Episode, quality: EpisodeImageQuality = "medium") => {
  const images = episode.image;
  if (!images) return;

  return images[quality] ?? images.medium ?? images.original;
};