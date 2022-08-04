import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
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
