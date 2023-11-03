//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import CartComponent from "./component/cart";

//render your react application
ReactDOM.render(<CartComponent />, document.querySelector("#app"));
