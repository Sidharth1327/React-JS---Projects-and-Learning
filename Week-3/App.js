//{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

/* const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

const TitleElement = () => {
  return <h2 style={{ color: "red" }}>This Title Element</h2>;
}; // This is Title Component */

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       {/* This is {TitleComponent} */}
//       {element}
//       <h1 style={{ color: "blue" }} key="h1">
//         This is h1 tag
//       </h1>
//       {/* This is {<TitleComponent/>} */}
//       <TitleElement />
//       <h2 style={{ color: "palevioletred" }} key="h2">
//         This is h2 tag
//       </h2>
//       {/* This is {<TitleComponent></TitleComponent>}*/}
//       <TitleElement></TitleElement>
//       <h3 style={{ color: "green" }} key="h3">
//         This is h3 tag
//       </h3>
//     </div>
//   );
// };

/* 
Create a Header Component from scratch using Functional Component with JSX
Add a Logo on Left
Add a search bar in middle
Add User icon on right
Add CSS to make it look nice */

import React from "react";
import ReactDOM from "react-dom/client";
import "./Assignment.css";
import logo from "./logo.png";
import userIcon from "./user icon.png";

const Header = () => {
  return (
    /* React Fragments */
    <>   
      <header className="header">
        <div className="left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
      </header>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);