export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after finish
  token:
    "BQDVTLpR6KNwlGY5bv9M9jibDygUMy762UkzoSY5YmHiSJq5rfC4bpEn9Xzc5XDya9TEObHZjXxC_4_Jwu5uYV707YwZBxoQWGCowHgIFl_slI51J8P1kWM16xRZ0QQKY3JZVfFXYmk7hqIkLQntwHeELHW9MwrEiLLpo5rJG38XnXsC",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
