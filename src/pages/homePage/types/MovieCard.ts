export interface Torrent {
    quality: string;
    size: string;
    url: string;
}

export type Movie = {
    id: number;
    title: string;
    year: number;
    rating: number;
    genres: string[];
    language: string;
    runtime: number;
    imdb_code: string;
    small_cover_image: string;
    medium_cover_image: string;
    large_cover_image: string;
    torrents: Torrent[];
}
export interface FetchMoviesParams {
    sort_by: string;
    limit: number;
    order_by: string;
}