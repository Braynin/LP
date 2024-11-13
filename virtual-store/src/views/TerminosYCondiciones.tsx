import Header from "../components/Header.tsx";  
import Footer from "../components/Footer.tsx";  
import styles from "./TerminosYCondiciones.module.css";
import arrayProducts from "../assets/ProductsOptions.js";
import { useState } from "react";
import Swal from "sweetalert2";
import ProductsCard from "../components/ProductsCard.tsx";

const TerminosYCondiciones = () => {  
    const [selectedSection, setSelectedSection] = useState<string | null>(null);
    const [searchText, setSearchText] = useState(""); // Para almacenar el texto de búsqueda
    const [filteredProducts, setFilteredProducts] = useState(arrayProducts); // Productos iniciales sin filtro
    const [isFiltered, setIsFiltered] = useState(false); // Para saber si se ha realizado un filtro

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

        // Si no se encuentran productos, mostramos un mensaje
        if (filtered.length === 0) {
            Swal.fire({
                icon: "warning",
                title: "Producto no encontrado",
                text: "No se encontraron productos con ese nombre. Intenta otra búsqueda.",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#3085d6",
            });
        }

        // Actualizamos el estado con los productos filtrados y el texto de búsqueda
        setFilteredProducts(filtered);
        setIsFiltered(filtered.length > 0); // Si hay productos filtrados, actualizamos el estado
        setSearchText(searchText); // Guardamos el texto de búsqueda en el estado
    };

    // Manejo de secciones (esto lo dejo igual a tu código original)
    const handleSelectSection = (section: string) => {
        setSelectedSection(section);
        setIsFiltered(false); // Limpiar filtro cuando se selecciona una nueva sección
    };

    return (  
        <>  
            <Header 
                onSearch={handleSearch} handleSelectSection={handleSelectSection} 
            />  

            <main className={styles["terminosYCondiciones-main"]}>
               
                {isFiltered ? (<ProductsCard
        filteredProducts={filteredProducts}
        isFiltered={isFiltered}
        selectedSection={selectedSection}
      />
        
      ):( <div className={styles["terminosYCondiciones-container"]}>
        <h1>Terminos y condiciones</h1>
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

export default TerminosYCondiciones;
