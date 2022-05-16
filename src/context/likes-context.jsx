import { createContext, useContext } from "react";

const LikesContext = createContext(null);

const LikesProvider = ({ children }) => {
  return <LikesContext.Provider>{children}</LikesContext.Provider>;
};

const useLikes = () => useContext(LikesContext);

export { LikesProvider, useLikes };
