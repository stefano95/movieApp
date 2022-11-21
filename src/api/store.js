import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./dialogSlice";
import movieSlice from "./movieSlice";

const reducer = {
  movies: movieSlice,
  dialog: dialogSlice,
};

export default () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
