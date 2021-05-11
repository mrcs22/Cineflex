import ReactDom from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }`;

ReactDom.render(<App />, document.querySelector(".root"));
