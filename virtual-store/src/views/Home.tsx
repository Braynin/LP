import { useState } from "react";
import Swal from "sweetalert2";
import Header from "../components/Header";
import MainIndex from "../components/MainIndex";
import Footer from "../components/Footer";
import arrayProducts from "../assets/ProductsOptions.js";
function Home() {
  const [filteredProducts, setFilteredProducts] = useState(arrayProducts); // Estado de productos filtrados

  // Función de filtrado
  const handleSearch = (searchText) => {
    const filtered = arrayProducts.filter((product) =>
      product.nombre
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(
          searchText
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
        )
    );

    if (filtered.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Producto no encontrado",
        text: "No se encontraron productos con ese nombre. Intenta otra búsqueda.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
      });
      setFilteredProducts([]); // Si no hay resultados, vacía el array de productos filtrados
    } else {
      setFilteredProducts(filtered);
    } // Actualiza el estado con los productos filtrados
  };

  return (
    <>
      <header>
        <Header onSearch={handleSearch} /> {/* Pasa handleSearch a Header */}
      </header>
      <main>
        <MainIndex filteredProducts={filteredProducts} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
