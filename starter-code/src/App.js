import React from "react";
import Navbar from "./Navbar.jsx";
import FormField from "./FormField.js";
import Button from "./Button.jsx"
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="email" type="email" placeholder="enter your email here" />
        <FormField label="password" type="password" placeholder="enter your password here" />
        <Button buttonStyle="is-primary" content="login"/>
      </div>
    );
  }
}

export default App;
