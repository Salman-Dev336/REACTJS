import React from "react";
const App = () => {
  const submitHandler = (e) => {
    console.log("form submitted");
    e.preventDefault();
  };
  return (
    <div className="h-screen bg-black ">
      <div>
        <nav className="h-20 flex justify-between">
          <h3 className="text-white font-bold text-xl font-serif">My Notes</h3>
          <img
            className="rotate-y-180 h-15  w-15"
            src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
            alt=""
          />
        </nav>
      </div>
      <div className="lg:flex">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex items-start p-10 gap-4 flex-col lg:w-1/2 "
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
        <div className="  p-10 lg:w-1/2 bg-gray-900 flex flex-col items-start">
          <h1 className="text-white text-xl font-bold">Your Notes</h1>
          <div className="flex flex-wrap gap-5 mt-10 overflow-auto h-135">
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>




          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
