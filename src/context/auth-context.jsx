import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers";

const AuthContext = createContext({ user: null, token: null });

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    user: null,
    token: null,
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      authDispatch({ type: "FETCH_INITIAL", payload: { user:user, token:token } });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
