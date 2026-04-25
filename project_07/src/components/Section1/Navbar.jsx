import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-18 py-8 bg-gray-400">
      <h4 className="bg-black text-white px-6 py-2 rounded-full text-sm">
        {" "}
        TARGET AUDIENCE
      </h4>
      <button className="bg-white text-black px-6 py-2 rounded-full tracking-widest text-sm hover:bg-purple-500 hover:text-white">DIGITAL BANKING PLATFORM</button>
    </div>
  );
};

export default Navbar;
