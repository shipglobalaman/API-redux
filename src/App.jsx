import { useState } from "react";
// import Movie from "./Movie";
import Card from "./component/card";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { MovieGrid } from "./features/MovieGrid";

function App() {
  // const [movieData, setmovieData] = useState([]);
  // const handleDelete = async (title) => {
  //   try {
  //     const response = await fetch(
  //       `http://www.omdbapi.com/?i=tt3896198&apikey=6b8d413c&s=Avenger/${title}`,
  //       { method: "DELETE" }
  //     );
  //     if (response.ok) {
  //       setmovieData((prevMovies) =>
  //         prevMovies.filter((movie) => movie.Title !== title)
  //       );
  //     } else {
  //       console.error("Failed to delete the movie");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting movie:", error);
  //   }
  // };

  return (
    <Provider store={store}>
    <div>
      <MovieGrid  />
    </div>
    </Provider>
  );
}
export default App;