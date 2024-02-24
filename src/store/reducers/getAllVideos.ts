import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetRequest } from "../../plugins/http";

export const getAllVideos = createAsyncThunk(
  "youtubeApp/homePageVidoes",
  async ({ searchTerm }: { searchTerm?: string }) => {
    try {
      const data = await GetRequest("/search", 10, searchTerm);
      return {
        videos: data?.data?.items,

        error: null,
      };
    } catch (error: any) {
      console.log(error);
      return {
        videos: [],
        error: error?.message,
      };
    }
  }
);
