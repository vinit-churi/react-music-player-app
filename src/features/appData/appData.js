import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {firestoreUtils} from "@/db/firestore";

export const appDataApi = createApi({
    reducerPath: 'appDataApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getUserPlaylists: builder.query({
            queryFn: async (userId) => {
                try{
                    const response = await firestoreUtils.getUserPlaylists(userId);
                    return {data: await response.json(), error: null};
                } catch(err){
                    console.log(err);
                    return {error : err.message, data: null};
                }
            },
            transformResponse: (response) => {
                console.log(response, "this is the response");
                return response.data;
            }
        }),
        createPlaylist: builder.mutation({
            queryFn: async (playlistName, userId) => {
                try{
                    const response = await firestoreUtils.createUserPlaylist(userId, playlistName);
                    return {data: await response.json(), error: null};
                } catch(err){
                    console.log(err);
                    return {error : err.message, data: null};
                }
            }
        }),
        addSongToPlaylist: builder.mutation({}),
        getFavoriteList: builder.mutation({}),
        addToFavoriteList: builder.mutation({}),
        removeFromFavoriteList: builder.mutation({}),
        getUserHistory: builder.mutation({}),
        addToUserHistory: builder.mutation({}),
        removeFromUserHistory: builder.mutation({}),
    })
});






















/*
    get user playlists,
    create a playlist,
    add song to a playlist,
    get user like list
    add song to like list 
    remove song from  the like list
    
*/