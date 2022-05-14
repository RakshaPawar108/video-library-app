import { logIn } from "../../services/";

export const dispatchLogin = async (user, authDispatch) => {
  try {
    const res = await logIn(user);
    if (res.status === 200) {
      authDispatch({
        type: "LOGIN",
        payload: {
          user: res.data.foundUser,
          token: res.data.encodedToken,
        },
      });
      return res.status;
    }
  } catch (err) {
    alert(err);
  }
};
