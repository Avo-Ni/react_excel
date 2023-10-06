import React, { Component } from "react";
import ReactDOM from "react-dom";

import GoogleAuthorize from "react-google-authorize";
import GooglePickerDrive from "./GooglePickerDrive";
import App from "./App";

const responseGoogleOK = googleUser => {
  var id_token = googleUser.access_token;
  var googleId = googleUser;

  console.log(
    "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + { id_token }
  );
  console.log({ accessToken: id_token });
  const rootElement = document.getElementById("root");

  ReactDOM.render(<App id_token={id_token} />, rootElement);

  //anything else you want to do(save to localStorage)...
};

const responseGoogleKO = googleUser => {
  var id_token = googleUser.access_token;
  var googleId = googleUser;

  console.log({ googleId });
  console.log({ accessToken: id_token });

  const rootElement = document.getElementById("root");

  ReactDOM.render(<GooglePickerDrive />, rootElement);
  //anything else you want to do(save to localStorage)...
};
class LoginGoogle extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <GoogleAuthorize
        clientId="176467058854-pcmotttdsmqb59fp96n2j1fmr82meid6.apps.googleusercontent.com"
        buttonText="Accede con cuenta Google"
        onSuccess={responseGoogleOK}
        onFailure={responseGoogleKO}
      />
    );
  }
}

export default LoginGoogle;
