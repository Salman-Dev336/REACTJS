import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    { img: "https://images.unsplash.com/photo-1685760259914-ee8d2c92d2e0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium, saepe deserunt sit temporibus expedita?",
      tag: "Satisfied ",
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium, saepe deserunt sit temporibus expedita?",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1733348137613-90f1af8674fd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium, saepe deserunt sit temporibus expedita?",
      tag: "Satisfied",
    },
    {

      img: "https://images.unsplash.com/photo-1648862513729-cb2556ba3219?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium, saepe deserunt sit temporibus expedita?",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661657504327-4c9f9466105a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium, saepe deserunt sit temporibus expedita?",
      tag: "Underbanked",
    },
     {
      img: "https://images.unsplash.com/photo-1633600180489-65ef075f6068?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium, saepe deserunt sit temporibus expedita?",
      tag: "Satisfied",
    },
     {
      img: "https://images.unsplash.com/photo-1747741744097-bae633939e47?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium, saepe deserunt sit temporibus expedita?",
      tag: "Satisfied",
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
