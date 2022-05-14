import { logIn } from "../../services/";

export const dispatchLogin = async (user, authDispatch) => {
  try {
    const res = await logIn(user);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(res.data.foundUser));
      authDispatch({
        type: "LOGIN",
        payload: {
          user: res.data.foundUser,
          token: res.data.encodedToken,
        },
      });
      return res.status;
    }
  } catch (err) {}
};
