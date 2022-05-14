import { createContext, useContext } from "react";

const AuthContext = createContext({ token: "", user: {} });

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
