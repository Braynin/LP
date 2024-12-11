import Style from "./Hero.module.css";
import { useEffect, useState } from "react";
import { heroOptions } from "../assets/HeroOptions.js";

interface Imagen {
  id: number;
  imgUrl: string;
}

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para mover las imágenes (anterior o siguiente)
  const scrollToImage = (direction: string) => {
    if (direction === "prev") {
      setCurrentIndex((curr) =>
        curr === 0 ? heroOptions.length - 1 : curr - 1
      );
    } else {
      setCurrentIndex((curr) =>
        curr === heroOptions.length - 1 ? 0 : curr + 1
      );
    }
  };

  // Función para ir a una imagen específica al hacer clic en un dot
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Evitar scroll no deseado cuando se cambia de imagen automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroOptions.length);
    }, 5000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={Style["hero-container"]}>
      <div className={Style["slider-container"]}>
        {/* Flechas de navegación */}
        <div
          className={Style["leftArrow"]}
          onClick={() => scrollToImage("prev")}
          tabIndex={-1} // Desactivar foco
        >
          &#8249;
        </div>
        <div
          className={Style["rightArrow"]}
          onClick={() => scrollToImage("next")}
          tabIndex={-1} // Desactivar foco
        >
          &#8250;
        </div>

        {/* Contenedor de imágenes */}
        <div className={Style["container-images"]}>
          <ul>
            {heroOptions && heroOptions.length > 0 ? (
              heroOptions.map((item: Imagen, index: number) => (
                <li
                  key={item.id}
                  style={{ display: index === currentIndex ? "block" : "none" }} // Mostrar solo la imagen activa
                >
                  <img src={item.imgUrl} alt={`image-${item.id}`} />
                </li>
              ))
            ) : (
              <p>No hay imágenes disponibles</p>
            )}
          </ul>
        </div>

        {/* Dots de navegación */}
        <div className={Style["dots-container"]}>
          {heroOptions.map((_, idx) => (
            <div
              key={idx}
              className={`${Style["dot-container-item"]} ${
                idx === currentIndex ? Style["active"] : ""
              }`}
              onClick={() => goToSlide(idx)}
              tabIndex={-1} // Desactivar foco
            >
              &#x2689;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
