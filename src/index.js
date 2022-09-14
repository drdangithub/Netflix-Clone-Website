import React from "react";
import * as ReactDom from "react-dom/client";
import "./index.css";
import App from"./App.js";


function Youtube() {
  return (
    <React.Fragment>
      <App/>
    </React.Fragment>
  )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Youtube/>);