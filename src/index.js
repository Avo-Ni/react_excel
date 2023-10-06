import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GooglePickerDrive from "./GooglePickerDrive";
import LoginGoogle from "./LoginGoogle";

import "./styles.css";

const responseGoogle = response => {
  return <App />;
  console.log(response);
};

const responseGoogleFailure = response => {
  console.log(response);
};

const rootElement = document.getElementById("root");

ReactDOM.render(<LoginGoogle />, rootElement);
