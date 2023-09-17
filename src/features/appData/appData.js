import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { fireStoreUtils } from "@/db/firestore";

export const appDataApi = createApi({
  reducerPath: "appDataApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getUserPlaylists: builder.query({
      queryFn: async (userId) => {
        try {
          const response = await fireStoreUtils.getUserPlaylists(userId);
          return { data: await response.json() };
        } catch (err) {
          console.log(err);
          return { error: err.message };
        }
      },
      transformResponse: (response) => {
        console.log(response, "this is the response");
        return response.data;
      },
    }),
    createPlaylist: builder.mutation({
      queryFn: async (playlistName, userId) => {
        try {
          const response = await fireStoreUtils.createUserPlaylist(
            userId,
            playlistName
          );
          return { data: await response.json() };
        } catch (err) {
          console.log(err);
          return { error: err.message };
        }
      },
    }),
    addSongToPlaylist: builder.mutation({}),
    getFavoriteList: builder.query({}),
    addToFavoriteList: builder.mutation({}),
    removeFromFavoriteList: builder.mutation({}),
    getUserHistory: builder.query({}),
    addToUserHistory: builder.mutation({}),
    removeFromUserHistory: builder.mutation({}),
  }),
});

/*
    get user playlists,
    create a playlist,
    add song to a playlist,
    get user like list
    add song to like list 
    remove song from  the like list
    
*/
