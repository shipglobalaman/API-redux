import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieData: [],
  },
  reducers: {
    fetchMoviesSuccess(state, action) {
      state.movieData = action.payload;
    },
    addMovie: (state, action) => {
      state.movieData.push({
        imdbID: Date.now(),
        Title: action.payload.title,
        Poster: action.payload.url,
      });
    },

    editMovie: (state, action) => {
      const { id, Title } = action.payload;
      const index = state.movieData.findIndex((item) => item.imdbID === id);
      if (index !== -1) {
        state.movieData[index] = { ...state.movieData[index], Title };
      }
    },
    deleteMovie: (state, action) => {
      state.movieData = state.movieData.filter(
        (movie) => movie.imdbID != action.payload
      );
    },
  },
});

export const { fetchMoviesSuccess, deleteMovie, addMovie, editMovie } =
  movieSlice.actions;
export default movieSlice.reducer;
