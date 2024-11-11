import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../route/App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/Store.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "./components/Form.jsx";
import Card from "./components/Card.jsx";
// import TaskList from "./components/TaskList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Card /> },
      { path: "/new-Task", element: <Form /> },
      // { path: "/manage", element: <TaskList /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
