import React from "react";
import Navbar from "./Navbar.jsx";
import FormField from "./FormField.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField />
        <FormField />
      </div>
    );
  }
}

export default App;
