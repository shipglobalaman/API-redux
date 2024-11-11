import { useSelector } from "react-redux";
import { moveTaskForward, moveTaskBackward } from "../actions/Action";
import { useDispatch } from "react-redux";
import TodoCard from "./TodoCard";

const Card = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleMoveTask = (task, direction) => {
    if (direction === "forward") {
      dispatch(moveTaskForward(task.id));
    } else if (direction === "backward") {
      dispatch(moveTaskBackward(task.id));
    }
  };

  const pendingTodos =tasks.filter((task) => task.status === "Pending");
  const todosList =tasks.filter((task) => task.status === "Todos");
  const inProgressTodos =tasks.filter((task) => task.status === "In Progress");
  const completedTodos =tasks.filter((task) => task.status === "Completed");

  

  return <div className="grid grid-cols-4 p-6  justify-center ml-40 items-start">
    <TodoCard tasks={ pendingTodos} title={"PENDING "} onMoveTask={handleMoveTask}/>
    <TodoCard tasks={todosList} title={"CURRENT"} onMoveTask={handleMoveTask}/>
    <TodoCard tasks={inProgressTodos} title={"PROGRESS"} onMoveTask={handleMoveTask}/>
    <TodoCard tasks={completedTodos} title={"COMPLETED"} onMoveTask={handleMoveTask}/>
    
    
  </div>;
};

export default Card;
