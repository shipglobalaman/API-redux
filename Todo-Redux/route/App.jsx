// import Form from "../src/components/Form";
// import Card from "../src/components/Card";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import { BrowserRouter, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Sidebar />
    </div>
  );
}
