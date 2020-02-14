import React from "react";
import "./App.css";
import NavBar from "./navBar";

function App() {
  const listMenu = [
    {
      name: "Home",
      menu: ["nabil", "cherifa", "ameni"]
    },
    {
      name: "Services",
      menu: ["for entrepreneurs", "for students", "for hobbyists"]
    },
    { name: "contact", menu: null }
  ];

  return (
    <div>
      <NavBar listMenu={listMenu} />
    </div>
  );
}

export default App;
