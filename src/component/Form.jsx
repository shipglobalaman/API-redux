const Form = ({handleAddMovie}) => {
  return (
    <div>
      <form onSubmit={handleAddMovie} >
        <input
          type="text"
        //   value={Title}
        //   onChange={(e) => setTitle(e.target.value)}
          placeholder="Give Title..."
          className="border-[2px] border-white rounded-md mr-2"
        />

        <input
          type="text"
        //   value={URL}
        //   onChange={(e) => setURL(e.target.value)}
          placeholder="Provide Url .. "
          className="border-[2px] border-white rounded-md mr-2"
        />

        <button type="submit" className="text-white border-white border-[1px] rounded-md p-1">Submit</button>
      </form>
    </div>
  );
};

export default Form ;