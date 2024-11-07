import { fetchMoviesSuccess } from "./movieSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../component/card";
import Form from "../component/Form";
import { useState } from "react";

export const MovieGrid = () => {
  const [dataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(null);
  const movieData = useSelector((state) => state.movies.movieData);
  const dispatch = useDispatch();

  async function fetchMovie() {
    setDataLoading(true);
    try {
      const res = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=6b8d413c&s=Avenger/"
      );
      const data = await res.json();
      setTimeout(() => {
        dispatch(fetchMoviesSuccess(data.Search));
        setDataLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching movies:");
    }
  }
  useEffect(() => {
    fetchMovie();
  }, [dispatch]);
  return (
    <div>
      
      {dataLoading ? (
        <div class="flex items-center justify-center h-screen bg-gray-900">
          <svg
            class="w-24 h-24 text-yellow-500 animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path fill="currentColor" d="M13 2L11 9H7l6 9v4l5-10h-4l2-11z" />
          </svg>
        </div>
      ) : (
        <div>
        
          {" "}
          <div className="flex flex-col items-center justify-center gap-y-2 bg-black p-4">
            <h1 className="text-white text-5xl">Watch A Movie</h1>

            <Form />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10 ml-20">
            {movieData &&
              movieData.map((movie) => (
                <Card movie={movie} Id={movie.imdbID} />
              ))}
          </div>{" "}
        </div>
      )}
    </div>
  );
};
