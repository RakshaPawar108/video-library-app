import { createContext, useContext } from "react";

const WatchLaterContext = createContext(null);

const WatchLaterProvider = ({ children }) => {
  return <WatchLaterContext.Provider>{children}</WatchLaterContext.Provider>;
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
