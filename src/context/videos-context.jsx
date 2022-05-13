import { createContext, useContext, useState, useEffect } from "react";
import { getVideos } from "../utils";

const VideoContext = createContext(null);

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos(setVideos);
  },[]);

  return (
    <VideoContext.Provider value={videos}>{children}</VideoContext.Provider>
  );
};

const useVideos = () => useContext(VideoContext);

export { VideoProvider, useVideos };
