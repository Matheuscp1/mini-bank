import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <div></div>
      <Header></Header>
      <Content></Content>
    </Router>
  );
}

export default App;
