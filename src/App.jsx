import { useState } from "react";
import Todo from "./Todo";
import Card from "./component/card";

function App() {
  const [movieData, setmovieData] = useState([]);
  const handleDelete = (id) => {
    setmovieData((prevData) => prevData.filter((food) => food.imdbID !== id));
  };

  return (
    <div>
      <Todo setmovieData={setmovieData} />
      <Card movieData={movieData} onDelete={handleDelete}/>
    </div>
  );
}
export default App;