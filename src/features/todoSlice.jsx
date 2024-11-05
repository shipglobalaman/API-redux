import { createSlice, nanoid } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    // addTodo: (state, action) => {
    //   const newTodo = {
    //     id: nanoid(),
    //     text: action.payload,
    //   };
    //   state.push(newTodo);
    // },
    // delTodo: (state, action) => {
    //   const index = state.findIndex((todo) => todo.id === action.payload);
    //   if (index !== -1) {
    //     state.splice(index, 1);
    //   }
    // },
  },
});

export const { addTodo, delTodo } = todoSlice.actions;
export default todoSlice.reducer;
