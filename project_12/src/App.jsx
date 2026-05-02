import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-black ">
      <form className="flex items-start gap-5 p-10 justify-between">
        <div className="flex items-start flex-col w-1/2 gap-4 ">
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 w-full py-2 border-2 rounded text-white"
          />
          <input
            type="text"
            className="px-5 w-full py-2 rounded border-2 h-20 text-white"
            placeholder="Enter details"
          />
          <button className="text-black w-full  bg-white border-2 px-5 py-2 hover:bg-blue-400 hover:text-black rounded-2xl">
            Add Note
          </button>
        </div>
         <img
        className="h-60"
        src="https://pngimg.com/uploads/sticky_note/sticky_note_PNG18899.png"
        alt=""
      />
      </form>
     
    </div>
  );
};

export default App;
