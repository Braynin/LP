import Header from "../components/Header.tsx";  
import Footer from "../components/Footer.tsx";  
import styles from "./CambiosYDevoluciones.module.css";
import arrayProducts from "../assets/ProductsOptions.js";
import { useState } from "react";
import Swal from "sweetalert2";
import ProductsCard from "../components/ProductsCard.tsx";

const CambiosYDevoluciones = () => {  
    const [selectedSection, setSelectedSection] = useState<string | null>(null);
    const [searchText, setSearchText] = useState(""); // Para almacenar el texto de búsqueda
    const [filteredProducts, setFilteredProducts] = useState(arrayProducts); // Productos iniciales sin filtro
    const [isFiltered, setIsFiltered] = useState(false);// Para manejar la selección de secciones

    // Función de filtrado
    const handleSearch = (searchText: string) => {
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
            console.log(filtered);

            setFilteredProducts([]); // Mostrar lista vacía si no se encuentran productos
            setIsFiltered(false); // No hay productos filtrados
        } else {
            setFilteredProducts(filtered); // Actualiza el estado con los productos filtrados
            setIsFiltered(true); // Indica que hubo un filtro
        }
    };

    // Manejo de secciones
    const handleSelectSection = (section: any) => {
        setSelectedSection(section);
        setIsFiltered(false); // Limpiar filtro cuando se selecciona una nueva sección
    };

    return (  
        <>  
        <Header 
            onSearch={handleSearch} handleSelectSection={handleSelectSection} 
        />  

        <main className={styles["cambiosYDevoluciones-main"]}>
           
            {isFiltered ? (<ProductsCard
    filteredProducts={filteredProducts}
    isFiltered={isFiltered}
    selectedSection={selectedSection}
  />
    
  ):( <div className={styles["cambiosYDevoluciones-container"]}>
    <h1>Cambios y Devoluciones</h1>
    <div className={styles["imagen-footer"]}></div>
    <div className={styles["imagen-footer"]}></div>

</div> )}

   
  
        </main>

        <footer>
    <Footer />
  </footer>
    </>
    );  
};  

export default CambiosYDevoluciones;
