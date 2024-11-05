import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, delTodo } from "./features/todoSlice";
import { useEffect } from "react";

const URL = "http://www.omdbapi.com/?i=tt3896198";
const API_KEY = "6b8d413c";
function Todo({ setmovieData }) {
  // const [text, setText] = useState("");
  // const todos = useSelector((state) => state.todos);
  // const dispatch = useDispatch();

  // const handleInputChange = (e) => {
  //   setText(e.target.value);
  // };

  // const handleAddTodo = () => {
  //   if (text) {
  //     dispatch(addTodo(text));
  //   }
  //   setText("");
  // };
  // const handleDelTodo = (id) => {
  //   dispatch(delTodo(id));
  // };

  const [querry, setQuerry] = useState("Avenger");
  const handleSearchBox = (e) => {
    setQuerry(e.target.value);
  };
  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(`${URL}&apikey=${API_KEY}&s=${querry}`);
      const data = await res.json();
      console.log(data.Search);
      setmovieData(data.Search);
    }
    fetchMovie();
  }, [querry]);
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-y-1 bg-black p-5">
        {/* <input
          value={text}
          type="text"
          placeholder="write here ..."
          onChange={handleInputChange}
          className="mt-4 mb-2 border-white rounded-md w-60 h-8 p-2"
        />
        <button
          className=" bg-slate-200 text-black w-16 h-7 ml-1 rounded-lg"
          onClick={handleAddTodo}
        >
          Add
        </button> */}
        <h1 className="text-white text-5xl">Watch A Movie</h1>

        <input
          onChange={handleSearchBox}
          value={querry}
          type="text"
          className="border-[2px] border-black w-56 h-10 mt-10 rounded-md p-2"
          placeholder="Search your food ...."
        />
      </div>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              className=" bg-slate-200 text-black w-16 h-7 ml-1 rounded-lg"
              onClick={()=>handleDelTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Todo;
