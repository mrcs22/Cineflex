import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import Landing from "./pages/Landing";
import CinemaSessions from "./pages/CinemaSessions";

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
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/sessoes/:movieId" component={CinemaSessions} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
