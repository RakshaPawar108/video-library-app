export const authReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INITIAL":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };

    case "SIGN_UP":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
