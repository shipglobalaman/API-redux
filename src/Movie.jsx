import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addTodo, delTodo } from "./features/movieSlice";
import { useEffect } from "react";
import Form from "./component/Form";
import { fetchMovies } from "./features/movieSlice";

// const URL = "http://www.omdbapi.com/?i=tt3896198";
// const API_KEY = "6b8d413c";

function Todo({ setmovieData }) {
  const [querry, setQuerry] = useState("Avenger");
  const dispatch = useDispatch();

  const handleSearchBox = (e) => {
    setQuerry(e.target.value);
    dispatch(fetchMovies(querry));
    
  };
  // useEffect(() => {
  //   async function fetchMovie() {
  //     try {
  //       const res = await fetch(`${URL}&apikey=${API_KEY}&s=${querry}`);
  //       const data = await res.json();
  //       console.log(data.Search);
  //       setmovieData(data.Search);
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //     }
  //   }
  //   fetchMovie();
  // }, [querry]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-y-2 bg-black p-4">
        <h1 className="text-white text-5xl">Watch A Movie</h1>

        <input
          onChange={handleSearchBox}
          value={querry}
          type="text"
          className="border-[2px] border-black w-56 h-10 mt-10 rounded-md p-2"
          placeholder="Search your food ...."
        />

        <Form />
      </div>
    </div>
  );
}

export default Todo;
