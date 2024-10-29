import styles from "./App.module.css";

/*Components*/

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
      <script src="scripts/layout.js"></script>
      <script src="scripts/products.js"></script>
      <script src="scripts/index.js"></script>
      <script src="scripts/ofertas.js"></script>

      <script></script>
    </>
  );
}

export default Home;
