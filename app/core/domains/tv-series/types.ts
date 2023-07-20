export type Day = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"

export type TvSeriesStatus = "In Development" | "Running" | "Ended"

export type Country = {
  name: string;
  code: string;
  timezone: string;
}

export type Schedule = {
  time: string;
  days: Day[]
}

export type Rating = {
  average: number
};

export type Network = {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export type WebChannel = {
  id: number;
  name: string;
  country?: Country;
  officialSite: string;
}

export type Externals = {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export type ImageVariants = {
  medium: string;
  original: string;
}

export type Links = {
  self: {
    href: string;
  };
  previousepisode: {
    href: string;
  }
}

export type TVSeries = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: TvSeriesStatus;
  runtime?: number;
  averageRuntime: number;
  premiered?: string;
  ended?: string;
  officialSite?: string
  schedule?: Schedule;
  rating?: Rating;
  weight: number;
  network?: Network;
  webChannel?: WebChannel;
  dvdCountry?: Country;
  externals: Externals;
  image?: ImageVariants;
  summary?: string;
  updated: number;
  _links: Links;
}