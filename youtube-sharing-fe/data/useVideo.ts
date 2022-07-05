import useSWR from "swr";

import { getAllVideos } from "../requests/videoApi";

export default function useVideo() {
  const { data, mutate, error } = useSWR("api_video", getAllVideos);

  const loading = !data && !error;
  const loggedIn = !error && data;

  return {
    loading,
    loggedIn,
    videos: data,
    mutate,
  };
}