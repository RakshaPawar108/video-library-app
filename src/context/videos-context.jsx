import { createContext, useContext, useState } from "react";

const VideoContext = createContext(null);

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  return (
    <VideoContext.Provider value={videos}>{children}</VideoContext.Provider>
  );
};

const useVideos = () => useContext(VideoContext);

export { VideoProvider, useVideos };
