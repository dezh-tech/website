import { Header, Footer } from "layout";
import { ReactLenis } from "lenis/react";
import Home from "components/Home";
import "./App.css";

function App() {
  return (
    <>
      <ReactLenis root>
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
