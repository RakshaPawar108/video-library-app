export const likesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INITIAL_LIKED":
      return { ...state, likes: action.payload };

    case "ADD_TO_LIKES":
      return { ...state, likes: action.payload };
    case "REMOVE_FROM_LIKES":
      return { ...state, likes: action.payload };

    case "EMPTY_LIKE_PAGE":
      return { ...state, likes: [] };

    default:
      return state;
  }
};
