import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { napsterApi } from "@/features/music/napsterApi";
import { appDataApi } from "@/features/appData/appData";
import audioPlayerSlice from "@/features/audioPlayer/audioPlayerSlice";
const initialState = {};

export const store = configureStore({
  initialState,
  reducer: {
    auth: authReducer,
    audioPlayer: audioPlayerSlice,
    [napsterApi.reducerPath]: napsterApi.reducer,
    [appDataApi.reducerPath]: appDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(napsterApi.middleware)
      .concat(appDataApi.middleware),
});

setupListeners(store.dispatch);
