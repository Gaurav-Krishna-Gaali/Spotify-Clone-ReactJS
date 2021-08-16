export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "https://localhost:3000/";
const clientId = "cc513073d5f64aeb995fd1cec2dae83b";

const scops = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-rated",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scops.join(
  "%20"
)}`;
