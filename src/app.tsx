import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

export default function App() {

  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Joshua Trefzer</Title>
          <Navigation></Navigation>
          <Suspense>{props.children}</Suspense>
          <Footer></Footer>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
