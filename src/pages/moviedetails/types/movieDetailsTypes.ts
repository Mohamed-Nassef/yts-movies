export interface Torrent {
  url: string;
  hash: string;
  quality: string;
  type: string;
  is_repack: string;
  video_codec: string;
  bit_depth: string;
  audio_channels: string;
  size: string;
  seeds: number;
  peers: number;
  date_uploaded: string;
}

export interface Cast {
  name: string;
  character_name: string;
  imdb_code: string;
  url_small_image: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  title_long: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  description_full: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  large_cover_image: string;
  yt_trailer_code: string;
  like_count: number;
  torrents: Torrent[];
  cast: Cast[];
  date_uploaded: string;
  large_screenshot_image1: string;
  large_screenshot_image2: string;
  large_screenshot_image3: string;
}

export interface MovieDetailsResponse {
  movie: MovieDetails;
}
export interface SimilarMovie {
  id: number;
  medium_cover_image: string;
  title: string;
}
