import axios from "axios";

export const MazeTVService = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MAZE_TV_BASE_URL
});