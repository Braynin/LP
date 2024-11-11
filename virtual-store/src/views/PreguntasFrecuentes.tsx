import Header from "../components/Header.tsx";  
import Footer from "../components/Footer.tsx";  
import styles from "./PreguntasFrecuentes.module.css";
import arrayProducts from "../assets/ProductsOptions.js";
import { useState } from "react";
import Swal from "sweetalert2";

const PreguntasFrecuentes = () => {  
    const [filteredProducts, setFilteredProducts] = useState(arrayProducts); // Estado de productos filtrados
    const [isFiltered, setIsFiltered] = useState(false); // Para saber si se ha realizado un filtro
    const [selectedSection, setSelectedSection] = useState(null); // Para manejar la selección de secciones

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
                onSearch={handleSearch} 
                handleSelectSection={handleSelectSection} 
            />  
            {/* Pasa handleSearch a Header */}

            <main className={styles["preguntasFrecuentes-main"]}>
                <div className={styles["preguntasFrecuentes-container"]}>
                    <h1>Preguntas Frecuentes</h1>
                    <p>
                        Somos una empresa comprometida con la innovación y la satisfacción de nuestros clientes...
                    </p>

                    {/* Aquí puedes agregar más contenido estático de "Quiénes Somos" */}

                    <div className={styles["productos-section"]}>
                        <h2>{isFiltered ? 'Productos Filtrados' : 'Nuestros Productos'}</h2>
                        {filteredProducts.length === 0 ? (
                            <p>No se encontraron productos.</p>  // Si no hay productos, mostrar mensaje
                        ) : (
                            <div className={styles["productos-list"]}>
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className={styles["product-item"]}>
                                        <img src={product.image} alt={product.nombre} />
                                        <p>{product.nombre}</p>
                                        <p>{product.precio}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />  
        </>  
    );  
};  

export default PreguntasFrecuentes;
