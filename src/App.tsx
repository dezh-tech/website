import { Header, Footer } from "layout";
import { ReactLenis } from "lenis/react";
import Home from "components/Home";
import RedirectHandler from "components/RedirectHandler";
import "./App.css";

function App() {
  return (
    <>
      <ReactLenis root>
        <RedirectHandler />
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
}

export default App;
