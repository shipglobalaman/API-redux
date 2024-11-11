const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center bg-black p-4 ">
        <div>
          <h1 className="text-4xl font-bold ml-4 text-orange-300">To Do</h1>
          <p className="text-sm text-gray-100 ml-5 mt-2">
            Note it down, keep it around
          </p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-lg w-60 border border-gray-300 mr-7"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
