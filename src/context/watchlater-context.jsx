import { createContext, useContext, useReducer } from "react";
import { watchLaterReducer } from "../reducers";

const WatchLaterContext = createContext(null);

const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, {
    watchlater: [],
  });

  return (
    <WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
