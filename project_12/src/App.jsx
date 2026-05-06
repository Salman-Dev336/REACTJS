import React, { useState } from "react";
import { X } from 'lucide-react';
const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    console.log(title, details);
    e.preventDefault();

    const copyTask = [...task];
    // console.log(task);
    copyTask.push({ title, details });
    settask(copyTask);
    // console.log(copyTask);

    settitle("");
    setdetails("");
  };
  return (
    <div className="h-screen bg-black ">
      <div>
        <nav className="h-1/12 flex justify-between">
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
          <h1 className="text-white text-3xl font-bold">Add Notes</h1>

          {/* pehla input for notes heading */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 w-full py-2 border-2 rounded text-white font-medium"
            value={title}
            onChange={(e) => {
              // console.log(e.target.value);
              settitle(e.target.value);
            }}
          />
          {/* dusra input for notes details */}
          <textarea
            type="text"
            className="px-5 w-full py-2 rounded border-2 h-30 text-start text-white font-medium "
            placeholder="Enter details"
            value={details}
            onChange={(e) => {
              // console.log(e.target.value);

              setdetails(e.target.value);
            }}
          />
          <button className="text-black w-full  bg-white border-2 px-5 py-2  active:bg-blue-400 active:scale-95 hover:text-black rounded-2xl">
            Add Note
          </button>
        </form>
        <div className="  p-10 lg:w-1/2 flex lg:border-l-2 border-white flex-col items-start ">
          <h1 className="text-white text-3xl font-bold">Recent Notes</h1>
          <div className="flex flex-wrap gap-5 mt-10  max-h-141.5 overflow-auto  ">
            {task.map(function(e, index){
              return   <div key={index} className="relative h-52 w-40 rounded-2xl py-8 px-5 bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
                <h2 className="absolute top-7 right-3 border-1 bg-red-500"><X/></h2>
                <h3 className=" text-2xl font-bold leading-tight mt-5">{e.title}</h3>
                <p className="leading-4 mt-2 font-serif text-gray-700" >{e.details}</p>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
