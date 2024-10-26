import "./App.module.css";

function Home() {
  return (
    <>
      <body>
        <header>
          <div id="messages-container"></div>
          <div id="header-container"></div>
          <div id="nav-container"></div>
        </header>
        <main>
          <div id="main-hero"></div>
          <div id="products-container"></div>
          <div id="offers-container"></div>
        </main>
        <footer>
          <div id="footer-container"></div>
        </footer>
        <script src="scripts/layout.js"></script>
        <script src="scripts/products.js"></script>
        <script src="scripts/index.js"></script>
        <script src="scripts/ofertas.js"></script>
      </body>
    </>
  );
}

export default Home;
