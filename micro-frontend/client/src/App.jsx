import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Footer from "./Footer";
import Header1 from "remote/SECOND"


const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    aaaaa
    <div className="bg-green-700">
    <Header1 />
    </div>
    aaaaa
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
