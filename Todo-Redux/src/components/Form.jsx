import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/Action";

const Form = () => {
  const [taskData, setTaskData] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTask(taskData));
    setTaskData("");
  };
  return (
    <div className="flex items-center justify-center mt-56">
      <form
        onSubmit={handleAddTodo}
        className="flex flex-col items-center justify-center h-"
      >
        <h2 className="text-5xl font-semibold  mb-10 text-gray-700 text-center">
          Add Your Task Here
        </h2>
        <input
          type="text"
          value={taskData}
          onChange={(e) => setTaskData(e.target.value)}
          placeholder="Enter your task..."
          className="border w-[600px] border-gray-300 rounded-md p-3 mb-4 text-gray-700 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-black w-52 mt-5 text-white font-semibold rounded-md py-3 hover:bg-orange-300 transition-colors duration-200"
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default Form;
