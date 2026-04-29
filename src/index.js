import React from "react";
import ReactDOM from "react-dom/client";
import Jsxunderstand from "./Pages/reactbasics/02JsxExpression";
import KeyFeatures from "./Pages/reactbasics/01KeyFeatures";
import JsxExpression from "./Pages/reactbasics/02JsxExpression";
import EmbeddingJs from "./Pages/reactbasics/03EmbeddingJs";
import Array from "./Pages/reactbasics/04Array";
import SingleObject from "./Pages/reactbasics/05SingleObject";
import MUltipleObject from "./Pages/reactbasics/06MultipleObject";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <KeyFeatures />
    <JsxExpression />
    <EmbeddingJs />
    <Array />
    <SingleObject />
    <MUltipleObject />
  </React.StrictMode>,
);
