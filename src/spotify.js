export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/";
const clientId = "cc513073d5f64aeb995fd1cec2dae83b";

const scopes = [
  "user-read-currently-playing", //Read currently playing music on any device that the users using
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read", //	Read access to a user's top artists and tracks.
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // acesstoken=mysecretkey&name=gaurav
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUri = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&show_dialog=true&response_type=token`;

// respone = https://accounts.spotify.com/en/authorize?client_id=cc513073d5f64aeb995fd1cec2dae83b&redirect_uri=http:%2F%2Flocalhost:3000%2F&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&show_dialog=true&response_type=token
