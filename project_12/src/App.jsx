import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <form className="flex p-10">
        <input type="text" placeholder="Enter Notes Heading"
        className="px-5 py-2 border-2 rounded text-white" />
        <input type="text" className="text-white"
        placeholder="Enter details" />
      </form>
    </div>
  );
};

export default App;
