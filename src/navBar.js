import React from "react";

function NavBar({ listMenu }) {
  return (
    <ul className="name">
      {listMenu.map((el, key) => (
        <li className={el.menu ? "Services" : ""} key={key}>
          {el.name}
          {el.menu && (
            <ul className="menu">
              {el.menu.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
export default NavBar;
