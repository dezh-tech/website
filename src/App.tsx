import Home from "components/Home";
import "./App.css";
import { Header, Footer } from "layout";
import { ReactLenis } from "@studio-freight/react-lenis";

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
