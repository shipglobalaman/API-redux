import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6b8d413c";

export const fetchMovies = createAsyncThunk(
  "movies/fetchmovies",
  async (querry) => {
    const response = await fetch(`${API_URL}&s=${querry}`);
    const data = await response.json();
    console.log("Fetched Data:", data.Search);
    return data.Search;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieData: [],
  },
  reducers: {
    deleteMovie: (state, action) => {
      state.movieData = state.movieData.filter(
        (movie) => movie.imdbID != action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movieData = action.payload || [];
    });
  },
});

export const { deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;
