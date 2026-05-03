import React from "react";
const App = () => {
  const submitHandler = (e) => {
    console.log("form submitted");
    e.preventDefault();
  };
  return (
    <div className="h-screen bg-black p-10  ">
      <div>
        <nav className="h-20 flex justify-between ">
          <h3 className="text-white font-bold text-xl font-serif">My Notes</h3>
          <img
            className="rotate-y-180 h-15  w-15"
            src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
            alt=""
          />
        </nav>
      </div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-start p-10 gap-4 flex-col justify-between"
      >
       
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 w-full py-2 border-2 rounded text-white font-medium"
          />
          <textarea
            type="text"
            className="px-5 w-full py-2 rounded border-2 h-30 text-start text-white font-medium "
            placeholder="Enter details"
          />
          <button className="text-black w-full  bg-white border-2 px-5 py-2 hover:bg-blue-400 hover:text-black rounded-2xl">
            Add Note
          </button>
      </form>
      <div className="flex flex-wrap p-10 ">
        <div className="h-32 w-32 rounded-2xl bg-white">
        </div>
      </div>
    </div>
  );
};

export default App;
