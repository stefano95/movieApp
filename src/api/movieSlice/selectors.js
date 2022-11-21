export const selectMovies = (state) => state.movies.filteredMoviesList;

export const selectMovieById = (state, id) => {
  return state.movies.filteredMoviesList.find(
    (m) => m._id.toString() === id.toString()
  );
};
