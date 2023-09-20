// redux toolkit audioPlayerSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  volume: 50,
  currentTime: 0,
  duration: 0,
  currentTrack: null,
  songQueue: [],
  historyQueue: [],
  expandedQueue: false,
  showSidebar: false,
  showPlaylistModal: false,
};

export const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    setShowPlaylistModal: (state, action) => {
      state.showPlaylistModal = action.payload;
    },
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
    playNext: (state) => {
      if (state.songQueue.length > 0) {
        state.currentTrack = state.songQueue.shift();
      } else {
        console.log("no more songs in queue");
        if (!state.isPlaying) {
          state.currentTrack = null;
        }
        // state.currentTime = 0;
        // state.duration = 0;
        // state.isPlaying = false;
      }
    },
    playPrevious: (state) => {
      console.log("playPrevious", state.historyQueue);
      if (state.historyQueue.length === 0) return;
      if (state.currentTrack && state.historyQueue.length > 1) {
        state.historyQueue.pop();
        state.songQueue.unshift(state.currentTrack);
        state.currentTrack = state.historyQueue.pop();
        state.currentTime = 0;
        state.duration = 0;
        state.isPlaying = false;
        return;
      }
      if (!state.currentTrack && state.historyQueue.length > 0) {
        state.currentTrack = state.historyQueue.pop();
        state.currentTime = 0;
        state.duration = 0;
        state.isPlaying = false;
        return;
      }
      // if (state.currentTrack) {
      //   if (state.historyQueue.length > 1) {
      //     state.songQueue.unshift(state.currentTrack);
      //   }
      //   state.historyQueue.pop();
      //   if (state.historyQueue.length <= 0) return;
      //   state.currentTime = 0;
      //   state.duration = 0;
      //   state.isPlaying = false;
      //   state.currentTrack = state.historyQueue.pop();
      // } else {
      //   state.historyQueue.pop();
      //   if (state.historyQueue.length <= 0) return;
      //   state.currentTime = 0;
      //   state.duration = 0;
      //   state.isPlaying = false;
      //   state.currentTrack = state.historyQueue.pop();
      // }
    },
    addSongToHistory: (state, action) => {
      state.historyQueue.push(action.payload);
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
    setShowSidebar: (state, action) => {
      state.showSidebar = action.payload;
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
  playNext,
  setShowSidebar,
  setShowPlaylistModal,
  addSongToHistory,
  playPrevious,
} = audioPlayerSlice.actions;

export const selectIsPlaying = (state) => state.audioPlayer.isPlaying;
export const selectVolume = (state) => state.audioPlayer.volume;
export const selectCurrentTime = (state) => state.audioPlayer.currentTime;
export const selectDuration = (state) => state.audioPlayer.duration;
export const selectCurrentTrack = (state) => state.audioPlayer.currentTrack;
export const selectSongQueue = (state) => state.audioPlayer.songQueue;
export const selectExpandedQueue = (state) => state.audioPlayer.expandedQueue;
export const selectShowSidebar = (state) => state.audioPlayer.showSidebar;
export const selectShowPlaylistModal = (state) =>
  state.audioPlayer.showPlaylistModal;
export const selectHistoryQueue = (state) => state.audioPlayer.historyQueue;

export default audioPlayerSlice.reducer;
