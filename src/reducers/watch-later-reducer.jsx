export const watchLaterReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INITIAL_WATCH_LATER":
      return { ...state, watchlater: action.payload };

    case "ADD_TO_WATCH_LATER":
      return { ...state, watchlater: action.payload };

    case "REMOVE_FROM_WATCH_LATER":
      return { ...state, watchlater: action.payload };

    case "EMPTY_WATCH_LATER":
      return { ...state, watchlater: [] };

    default:
      return state;
  }
};
