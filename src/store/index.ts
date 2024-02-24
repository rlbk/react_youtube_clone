import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialStateI, VideoItemI } from "../interfaces/common";
import { getAllVideos } from "./reducers/getAllVideos";

const initialState: InitialStateI = {
  videos: [],
  selectedVideo: null,
  searchTerm: "",
  error: null,
};

const YoutubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.selectedVideo = null;
      state.searchTerm = "";
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    changeSelectedVideo: (state, action: PayloadAction<VideoItemI>) => {
      state.selectedVideo = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
    clearSelectedVideo: (state) => {
      state.selectedVideo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllVideos.fulfilled, (state, action) => {
      state.videos = action.payload.videos;
      state.error = action.payload.error;
    });
  },
});

export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeSlice.reducer,
  },
});

export const {
  clearVideos,
  changeSearchTerm,
  changeSelectedVideo,
  clearSearchTerm,
  clearSelectedVideo,
} = YoutubeSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
