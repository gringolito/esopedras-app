import React from "react";
import NavigationBar from "./components/NavigationBar";
import Reports from "./views/Reports";
import Sales from "./views/Sales";
import "./App.css";

function App() {
  let curretView = "";

  switch (window.location.pathname) {
    case "/reports":
      curretView = <Reports />;
      break;

    default:
      curretView = <Sales />;
      break;
  }

  return (
    <div className="App">
      <NavigationBar />
      {curretView}
    </div>
  );
}

export default App;
