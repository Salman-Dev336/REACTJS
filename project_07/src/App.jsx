import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1648862513729-cb2556ba3219?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium, saepe deserunt sit temporibus expedita?",
      tag: "Satisfied ",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium, saepe deserunt sit temporibus expedita?",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1654249706314-fbb44dbf0ebb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium, saepe deserunt sit temporibus expedita?",
      tag: "Underbanked",
    },
  ];
  return (
    <>
      <Section1 users={users}/>
      <Section2 />
    </>
  );
};

export default App;
