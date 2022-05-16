import { logIn } from "../../services/";
import { fetchLikedVideos } from "../Likes/fetch-liked-videos";

export const dispatchLogin = async (
  user,
  authDispatch,
  navigate,
  likesDispatch
) => {
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
      fetchLikedVideos(likesDispatch, res.data.encodedToken);
      alert("Successfully Logged In");
      navigate("/");
    }
  } catch (err) {
    console.log(err);
  }
};
