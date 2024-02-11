import React from "react";
import ReactDOM from "react-dom/client";
import "./Assignment.css";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
    />
  </a>
);

const HeaderComponent = () => {
  return (
    <div className = "header">
      <Title/>
      <div className = "nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );  
};



const Body = () => {
  return(
    <h4>Body</h4>
 )
}
const Footer = () => {
  return (
  <h4>Footer</h4>
 )
};

const AppLayout = () => {
  return(
    <>
      <HeaderComponent/>
      <Body/>
      <Footer/>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);