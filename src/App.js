import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Content from "./components/Content";
import { useState } from "react";
import Modal from "./components/Modal";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
function App() {
  return (
    <Router>
      <Header></Header>
      <Content></Content>
    </Router>
  );
}

export default App;
