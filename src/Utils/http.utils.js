// import axios from "axios";

// const http = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   headers: {
//     Accept: "application/json",
//     Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_ACCESS_TOKEN_AUTH}`,
//   },
// });

// export default http;

import axios from "axios";

export const http = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_ACCESS_TOKEN_AUTH}`,
  },
});

export const topRated = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/top_rated",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_ACCESS_TOKEN_AUTH}`,
  },
});
