import { nanoid } from "@reduxjs/toolkit";

export const addTask = (task) => ({
  type: "ADD",
  payload: { title: task, id: nanoid() },
});


export const moveTaskForward = (id) => ({
  type: "MOVE_TASK_FORWARD",
  payload: id,
});
export const moveTaskBackward = (id) => ({
  type: "MOVE_TASK_BACKWARD",
  payload: id,
});
export const delTask =(id)=>({
  type: "DEL",
  payload: id ,
});

