import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const napsterApi = createApi({
  reducerPath: "napsterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://napi-v2-2-cloud-run-b3gtd5nmxq-uw.a.run.app/v2.2/",
  }),
  endpoints: (builder) => ({
    getSongById: builder.query({
      query: (songId) =>
        `tracks/${songId}?apikey=${import.meta.env.VITE_NAPSTER_API_KEY}`,
      transformResponse: (response) => {
        const { tracks: data } = response;
        return data;
      },
    }),
    getMultipleSongsById: builder.query({
      query: (songIds) =>
        `tracks/${songIds.join(",")}?apikey=${
          import.meta.env.VITE_NAPSTER_API_KEY
        }`,
      transformResponse: (response) => {
        const { tracks: data } = response;
        return data;
      },
    }),
    getPopularAlbums: builder.query({
      query: () =>
        `albums/top?limit=10&apikey=${import.meta.env.VITE_NAPSTER_API_KEY}`,
      transformResponse: (response) => {
        const { albums: data } = response;
        return data;
      },
    }),
    getAlbumTracks: builder.query({
      query: (albumId) =>
        `albums/${albumId}/tracks?apikey=${
          import.meta.env.VITE_NAPSTER_API_KEY
        }`,
      transformResponse: (response) => {
        const { tracks: data } = response;
        return data;
      },
    }),
    getArtistAlbums: builder.query({
      query: (artistId) =>
        `artists/${artistId}/albums?limit=10&apikey=${
          import.meta.env.VITE_NAPSTER_API_KEY
        }`,
      transformResponse: (response) => {
        const { albums: data } = response;
        return data;
      },
    }),
    getTopTracks: builder.query({
      query: () =>
        `tracks/top?limit=15&apikey=${import.meta.env.VITE_NAPSTER_API_KEY}`,
      transformResponse: (response) => {
        const { tracks: data } = response;
        return data;
      },
    }),
    getAllGenres: builder.query({
      query: () => `genres?apikey=${import.meta.env.VITE_NAPSTER_API_KEY}`,
      transformResponse: (response) => {
        const { genres: data } = response;
        return data.map(({ id, name }) => ({ id, name }));
      },
    }),
    getSongsByGenre: builder.query({
      query: (genreId) =>
        `genres/${genreId}/tracks/top?limit=15&apikey=${
          import.meta.env.VITE_NAPSTER_API_KEY
        }`,
      transformResponse: (response) => {
        const { tracks: data } = response;
        return data;
      },
    }),
    getPopularArtists: builder.query({
      query: () =>
        `artists/top?limit=10&apikey=${import.meta.env.VITE_NAPSTER_API_KEY}`,
      transformResponse: (response) => {
        const { artists: data } = response;
        return data;
      },
    }),
    searchSongs: builder.query({
      query: (searchTerm) =>
        `search?query=${searchTerm}&type=track,artist,album&limit=15&apikey=${
          import.meta.env.VITE_NAPSTER_API_KEY
        }`,
      transformResponse: (response) => {
        const { search: data } = response;
        return data;
      },
    }),
  }),
});

export const {
  useGetSongByIdQuery,
  useGetMultipleSongsByIdQuery,
  useGetPopularAlbumsQuery,
  useGetAlbumTracksQuery,
  useGetTopTracksQuery,
  useGetAllGenresQuery,
  useGetSongsByGenreQuery,
  useSearchSongsQuery,
  useGetPopularArtistsQuery,
  useGetArtistAlbumsQuery,
} = napsterApi;
