import movieSlice from "./slice";

export const { filterMovies } = movieSlice.actions;

export * from "./requests";
export * from "./selectors";

export default movieSlice.reducer;
