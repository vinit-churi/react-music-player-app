// redux toolkit audioPlayerSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  volume: 50,
  currentTime: 0,
  duration: 0,
  currentTrack: null,
  songQueue: [],
  expandedQueue: false,
};

export const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setCurrentTrack: (state, action) => {
      if (state.currentTrack == null) {
        state.currentTrack = action.payload;
      } else {
        state.songQueue.unshift(state.currentTrack);
        state.currentTrack = action.payload;
      }
    },
    setSongQueue: (state, action) => {
      state.songQueue = action.payload;
    },
    addToSongQueue: (state, action) => {
      if (state.currentTrack == null) {
        state.currentTrack = action.payload;
      } else {
        state.songQueue.push(action.payload);
      }
    },
    resetSongQueue: (state) => {
      state.songQueue = [];
    },
    setExpandedQueue: (state, action) => {
      state.expandedQueue = action.payload;
    },
  },
});

export const {
  play,
  pause,
  setVolume,
  setCurrentTime,
  setDuration,
  setCurrentTrack,
  setExpandedQueue,
  addToSongQueue,
  setSongQueue,
  resetSongQueue,
} = audioPlayerSlice.actions;

export const selectIsPlaying = (state) => state.audioPlayer.isPlaying;
export const selectVolume = (state) => state.audioPlayer.volume;
export const selectCurrentTime = (state) => state.audioPlayer.currentTime;
export const selectDuration = (state) => state.audioPlayer.duration;
export const selectCurrentTrack = (state) => state.audioPlayer.currentTrack;
export const selectSongQueue = (state) => state.audioPlayer.songQueue;
export const selectExpandedQueue = (state) => state.audioPlayer.expandedQueue;
export default audioPlayerSlice.reducer;
