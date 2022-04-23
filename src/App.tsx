import style from "./style.module.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/assets/fonts/style.css";
import LayOut from "./components/layout/index";
function App() {
  return (
    <Router>
      <div className={style.app}>
        <LayOut />
      </div>
    </Router>
  );
}

export default App;
