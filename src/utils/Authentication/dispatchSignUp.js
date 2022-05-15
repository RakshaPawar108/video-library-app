import { signUp } from "../../services";

export const dispatchSignUp = async (user, authDispatch, navigate) => {
  try {
    const res = await signUp(user, authDispatch);
    if (res.status === 201) {
      localStorage.setItem("token", res.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(res.data.createdUser));
      authDispatch({
        type: "SIGN_UP",
        payload: {
          user: res.data.createdUser,
          token: res.data.encodedToken,
        },
      });
      alert("Successfully Signed Up");
      navigate("/");
    }
  } catch (err) {
    console.log(err);
  }
};
