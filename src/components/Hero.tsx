import Style from "./Hero.module.css";
import { useEffect, useState } from "react";
import { heroOptions } from "../assets/HeroOptions.js";
import { Link } from "react-router-dom";

interface Imagen {
  id: number;
  imgUrl: string;
  link?: string; // Campo opcional para el enlace
}

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Estado para pausar el intervalo

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

  // useEffect para iniciar el intervalo automático
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroOptions.length);
      }, 4000);

      return () => clearInterval(interval); // Limpiar intervalo al desmontar
    }
  }, [isPaused]);

  // Manejar pausa y reanudación al pasar/quitar el cursor
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className={Style["hero-container"]}>
      <div className={Style["slider-container"]}>
        {/* Flechas de navegación */}
        <div
          className={Style["leftArrow"]}
          onClick={() => scrollToImage("prev")}
          onMouseEnter={handleMouseEnter} // Pausar al pasar el cursor
          onMouseLeave={handleMouseLeave} // Reanudar al quitar el cursor
          tabIndex={-1} // Desactivar foco
        >
          &#8249;
        </div>
        <div
          className={Style["rightArrow"]}
          onClick={() => scrollToImage("next")}
          onMouseEnter={handleMouseEnter} // Pausar al pasar el cursor
          onMouseLeave={handleMouseLeave} // Reanudar al quitar el cursor
          tabIndex={-1} // Desactivar foco
        >
          &#8250;
        </div>

        {/* Contenedor de imágenes */}
        <div className={Style["container-images"]}>
          <ul
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Movimiento de deslizamiento
            }}
          >
            {heroOptions && heroOptions.length > 0 ? (
              heroOptions.map((item: Imagen) => (
                <li key={item.id}>
                  <Link
                    to={item.link || "#"} // Enlace (por defecto # si no está definido)
                    onMouseEnter={handleMouseEnter} // Pausar al pasar el cursor
                    onMouseLeave={handleMouseLeave} // Reanudar al quitar el cursor
                  >
                    <img src={item.imgUrl} alt={`image-${item.id}`} />
                  </Link>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#000000"
                className="icon icon-tabler icons-tabler-filled icon-tabler-point"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
