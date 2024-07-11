import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
// import Header from "./Footer"
import Footer from "./Footer";
import Header from "./Header"

const App = () => (
  <div className="mt-10 text-3xl bg-blue-500 mx-auto max-w-6xl">
    <Header />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
