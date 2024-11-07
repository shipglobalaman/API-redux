import { useState } from "react";

const Form = () => {
    const [task ,setTask] = useState("")
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={Task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className="border-[2px] border-white rounded-md mr-2"
        />

        <button
          type="submit"
          className="text-white border-white border-[1px] rounded-md p-1"
        >
           Add
        </button>
      </form>
    </div>
  );
};
