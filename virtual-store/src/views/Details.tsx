import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrayProducts from "../assets/ProductsOptions.js";
import Swal from "sweetalert2";

/*Components*/
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import MainDetails from "../components/MainDetails.tsx";

function Details() {
  const [filteredProducts, setFilteredProducts] = useState([]); // Estado de productos filtrados
  const [isFiltered, setIsFiltered] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const location = useLocation();
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
      setIsFiltered(filtered.length > 0);
    } else {
      setFilteredProducts(filtered);
      setIsFiltered(filtered.length > 0);
    }
  };
  const handleSelectSection = (section) => {
    setSelectedSection(section);
    setIsFiltered(false);
  };

  // Restaura el array de productos filtrados cuando cambia la URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.has("id")) {
      setFilteredProducts([]); // Vacía el array de productos filtrados
    }
  }, [location]);
  return (
    <>
      <header>
        <Header
          onSearch={handleSearch}
          handleSelectSection={handleSelectSection}
        />
      </header>
      <main>
        <MainDetails
          filteredProducts={filteredProducts}
          isFiltered={isFiltered}
          selectedSection={selectedSection}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default Details;
