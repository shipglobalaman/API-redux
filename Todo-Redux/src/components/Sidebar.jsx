import React from "react";
import { IoAddSharp } from "react-icons/io5";
import { CgMoveTask } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-48 h-[700px] bg-gray-500 text-white flex flex-col items-start p-4 fixed left-4 top-28 rounded-3xl">
      <Link to="new-Task">
        <div className="bg-orange-300 w-40 rounded-xl p-2 text-xl  text-black flex justify-center items-center">
          {" "}
          <IoAddSharp className="size-7" /> New Task
        </div>
      </Link>
      <Link to="/">
        <div className="text-xl mt-7 ml-6 rounded-lg flex  gap-2 p-2">
          <FaTasks className="mt-1" />
          My Tasks
        </div>
      </Link>
      <Link to="manage">
        <div className="text-xl mt-7 ml-6 rounded-lg flex  gap-2 p-2">
          <FaTasks className="mt-1" />
          Manage
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
