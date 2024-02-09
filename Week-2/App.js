import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Hi Everyone"
);

// created first element
const heading1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Hi Everyone"
);

// created second element
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

// created a thrid element which consists of the intial two elemets
const root = ReactDOM.createRoot(document.getElementById("root"));
// only one root will be there always while we create a react JS code

root.render(container);
