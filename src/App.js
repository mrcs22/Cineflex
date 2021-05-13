import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import Landing from "./pages/Landing";
import MovieSessions from "./pages/MovieSessions";
import Session from "./pages/Session";
import Success from "./pages/Success";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Roboto";
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-decoration: none;
    
  }`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/sessoes/:movieId" component={MovieSessions} />
          <Route path="/assentos/:sessionId" component={Session} />
          <Route path="/sucesso" component={Success} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
