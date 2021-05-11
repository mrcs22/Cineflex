import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}
