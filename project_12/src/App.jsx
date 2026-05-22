import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    settask(copyTask);

    settitle("");
    setdetails("");
  };

  const deleteNote = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);

    settask(copyTask);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white overflow-hidden">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 backdrop-blur-md">
        <h3 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-extrabold text-3xl tracking-wide">
          My Notes
        </h3>

        <img
          className="h-16 rotate-y-180 w-16 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt=""
        />
      </nav>

      {/* Main Section */}
      <div className="lg:flex gap-10 px-6 py-8">

        {/* Form Section */}
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex items-start gap-5 flex-col lg:w-[40%] bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Add Notes
          </h1>

          {/* Title Input */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 py-3 w-full rounded-2xl bg-[#1e293b] border border-gray-700 focus:border-cyan-400 outline-none text-white placeholder:text-gray-400 transition-all duration-300 shadow-lg"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />

          {/* Details Input */}
          <textarea
            type="text"
            className="px-5 py-3 w-full rounded-2xl bg-[#1e293b] border border-gray-700 focus:border-purple-400 outline-none h-36 resize-none text-white placeholder:text-gray-400 transition-all duration-300 shadow-lg"
            placeholder="Enter details"
            value={details}
            onChange={(e) => {
              setdetails(e.target.value);
            }}
          />

          {/* Button */}
          <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg hover:shadow-cyan-500/40">
            Add Note
          </button>
        </form>

        {/* Notes Section */}
        <div className="mt-10 lg:mt-0 lg:w-[60%] bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
            Recent Notes
          </h1>

          <div className="flex flex-wrap gap-6 mt-10 max-h-[70vh] overflow-auto pr-2">

            {task.map(function (e, index) {
              return (
                <div
                  key={index}
                  className="relative w-64 min-h-60 rounded-3xl p-6 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 shadow-xl hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => {
                      deleteNote(index);
                    }}
                    className="absolute top-4 right-4 h-8 w-8 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center shadow-lg transition-all duration-200"
                  >
                    <X size={16} color="#fff" strokeWidth={3} />
                  </button>

                  {/* Note Title */}
                  <h3 className="text-2xl font-bold leading-tight text-cyan-300 mt-5 break-words">
                    {e.title}
                  </h3>

                  {/* Note Details */}
                  <p className="leading-6 mt-4 text-gray-300 font-medium break-words">
                    {e.details}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;