import axios from "axios";
import { API_KEY } from "../config/baseConfig";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: API_KEY,
  },
});
