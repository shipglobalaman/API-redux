const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,

        tasks: [...state.tasks, { ...action.payload, status: "Todos" }],
      };

    case "DEL":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "MOVE_TASK_FORWARD": {
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id === action.payload) {
            if (todo.status === "Pending") return { ...todo, status: "Todos" };
            if (todo.status === "Todos")
              return { ...todo, status: "In Progress" };
            if (todo.status === "In Progress")
              return { ...todo, status: "Completed" };
          }
          return todo;
        }),
      };
    }
    case "MOVE_TASK_BACKWARD": {
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id === action.payload) {
            if (todo.status === "Completed")
              return { ...todo, status: "In Progress" };
            if (todo.status === "In Progress")
              return { ...todo, status: "Todos" };
            if (todo.status === "Todos") return { ...todo, status: "Pending" };
          }
          return todo;
        }),
      };
    }
    default:
      return state;
  }
};
