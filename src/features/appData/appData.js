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
          return { data: response };
        } catch (err) {
          console.log(err);
          return { error: err.message };
        }
      },
      transformResponse: (response) => {
        console.log(response, "this is the response");
        return response.data;
      },
      providesTags: ["UserPlaylists"],
    }),
    createPlaylist: builder.mutation({
      queryFn: async (params) => {
        console.log(params, "line 19..................");
        const { userId, name } = params;
        console.log(userId, name, "line 19..................");
        try {
          const response = await fireStoreUtils.createUserPlaylist(params);
          return { data: response };
        } catch (err) {
          console.log(err);
          return { error: err.message };
        }
      },
      invalidatesTags: ["UserPlaylists"],
    }),
    addSongToPlaylist: builder.mutation({
      queryFn: async (params) => {
        const { playlistId, songId } = params;
        try {
          const response = await fireStoreUtils.addSongToPlaylist({
            playlistId,
            songId,
          });
          return { data: response };
        } catch (err) {
          console.log(err);
          return { error: err.message };
        }
      },
      invalidatesTags: ["UserPlaylists"],
    }),
    removeSongFromPlaylist: builder.mutation({
      queryFn: async (params) => {
        const { playlistId, songId } = params;
        try {
          const response = await fireStoreUtils.removeSongFromPlaylist({
            playlistId,
            songId,
          });
          return { data: response };
        } catch (err) {
          console.log(err);
          return { error: err.message };
        }
      },
      invalidatesTags: ["UserPlaylists"],
    }),
  }),
});

export const {
  useGetUserPlaylistsQuery,
  useCreatePlaylistMutation,
  useAddSongToPlaylistMutation,
  useRemoveSongFromPlaylistMutation,
} = appDataApi;

/*
    get user playlists,
    create a playlist,
    add song to a playlist,
    get user like list
    add song to like list 
    remove song from  the like list
    
*/
