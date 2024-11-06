import { fetchMoviesSuccess } from "./movieSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../component/card";
import Form from "../component/Form";

export const MovieGrid = () => {
  const movieData = useSelector((state) => state.movies.movieData);
  const dispatch = useDispatch();

  async function fetchMovie() {
    try {
      const res = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=6b8d413c&s=Avenger/"
      );
      const data = await res.json();
      console.log(data);
      data.Search && dispatch(fetchMoviesSuccess(data.Search));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
  useEffect(() => {
    fetchMovie();
  }, [dispatch]);
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-y-2 bg-black p-4">
        <h1 className="text-white text-5xl">Watch A Movie</h1>

        <Form />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10 ml-20">
        {movieData &&
          movieData.map((movie) => (
            <Card
              movie={movie}
              Id={movie.imdbID}
            />
          ))}
      </div>
    </div>
  );
};
