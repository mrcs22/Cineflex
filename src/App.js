import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import Landing from "./pages/Landing";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Roboto";
    font-weight: 400;
    margin: 0;
    padding: 0;
  }`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Landing />
    </>
  );
}
