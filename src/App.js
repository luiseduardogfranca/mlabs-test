import React, { memo } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

const Main = memo((props) => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
));

function App() {
  return <Main />;
}

export default App;
