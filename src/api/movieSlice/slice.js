import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./requests";

const initialState = {
  moviesList: [],
  filteredMoviesList: [],
  movie: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    filterMovies: (state, action) => {
      const filtered = state.moviesList.filter((m) =>
        m.name.toLowerCase().startsWith(action.payload.toLowerCase())
      );
      state.filteredMoviesList = filtered;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      const { movies } = action.payload.data.data;
      state.moviesList = movies;
      state.filteredMoviesList = movies;
    });
  },
});

export default movieSlice;
