import axios from "axios";

export const TVMazeService = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MAZE_TV_BASE_URL
});