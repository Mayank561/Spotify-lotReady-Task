import axios from "axios";

const authEndpoint ='https://accounts.spotify.com/authorize?';
const clientId = "3b4bbd453da745b2a8a4a9122fae796e";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/"

});
// console.log(apiClient);


export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;