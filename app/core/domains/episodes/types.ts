export type Rating = {
  average: number
};
export type Links = {
  self: {
    href: string;
  };
  show: {
    href: string;
  }
}

export type ImageVariants = {
  medium: string;
  original: string;
}

export type Episode = {
  id: number,
  url: string,
  name: string,
  season: number,
  number: number,
  type: string,
  airdate: string,
  airtime: string,
  airstamp: string,
  runtime: number,
  rating: Rating,
  image: ImageVariants,
  summary: string,
  _links: Links
}