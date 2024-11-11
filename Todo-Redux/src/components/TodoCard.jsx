import React from "react";
import { useDispatch } from "react-redux";
import { delTask } from "../actions/Action";

function TodoCard({ title, onMoveTask, tasks }) {
  const dispatch = useDispatch();
  const handleDel=(task)=> {
    dispatch(delTask(task.id));
  }
  return (
    
    <div className="py-5 ml-10 bg-gray-100 flex justify-center rounded-xl shadow-xl  ">
      <div className="w-1/2">
        <h2 className="text-3xl font-bold  text-gray-800 mb-8">
          {title}
        </h2>

        <div className="flex flex-col gap-6 p-5">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-black p-5 w-48 ml-[-60px] rounded-lg shadow-lg border-black border-[1px] transform transition-all duration-300 ease-in-out hover:scale-110 hover:bg-orange-300   "
            >
              <div className="flex items-center justify-between ">
                <span className="text-xl font-semibold text-white">
                  {task.title}
                </span>
                <div>
                  <button
                    className="bg-blue-500 text-white w-8 h-8 rounded hover:bg-green-600 focus:outline-none ml-auto"
                    onClick={() => onMoveTask(task, "forward")}
                  >
                    →
                  </button>

                  <button
                    className="bg-blue-500 text-white w-8 h-8 rounded hover:bg-green-600 focus:outline-none ml-2"
                    onClick={() => onMoveTask(task, "backward")}
                  >
                    ←
                  </button>
                  <button
                    className="bg-blue-500 text-white w-8 h-8 rounded hover:bg-green-600 focus:outline-none ml-2"
                    onClick={()=>handleDel(task)}
                  >
                    del
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default TodoCard;
