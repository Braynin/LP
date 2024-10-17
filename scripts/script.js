const productsContainer = document.getElementById("products");
const librosContainer = document.getElementById("tarjetas-libros");
const preventaContainer = document.getElementById("tarjetas-preventa");

const productos = [
  {
    nombre: "Código Penal Tapa Dura",
    precioMenor: "S/. 75",
    imagen: "LP/assets/CODIGO PENAL.webp",
  },
  {
    nombre: "Código Penal Tapa Rústica",
    precioMenor: "S/. 50",
    imagen: "LP/assets/CODIGO PENAL.webp",
  },
  {
    nombre: "Código Civil Tapa Dura",
    precioMenor: "S/. 75",
    imagen: "LP/assets/CODIGO CIVIL.webp",
  },
  {
    nombre: "Código Civil Tapa Rústica",
    precioMenor: "S/. 75",
    imagen: "LP/assets/CODIGO CIVIL.webp",
  },
  {
    nombre: "Detención policial en flagrancia y proceso inmediato",
    precioMenor: "S/. 130",
    imagen: "url_de_imagen_1",
  },
  {
    nombre: "Mini código penal",
    precioMenor: "S/. 35",
    imagen: "LP/assets/MINI CODIGO PENAL.webp",
  },

  {
    nombre: "El Defensor 2",
    precioMenor: "S/. 60",
    imagen: "LP/assets/EL DEFENSOR 2 - VIVIENDO EL SUEÑO.webp",
  },
  {
    nombre: "Litigación Oral Civil",
    precioMenor: "S/. 100",
    imagen: "LP/assets/LITIGACION ORAL CIVIL.webp",
  },
  {
    nombre: "Colección ¿Cómo redactar un contrato? Notas desde la práctica",
    precioMenor: "S/. 140",
    imagen: "LP/assets/COLECCION - COMO REDACTAR UN CONTRATO.webp",
  },
  {
    nombre: "Culpabilidad y Neurociencias",
    precioMenor: "S/. 80",
    imagen: "LP/assets/CULPABILIDAD Y NEUROCIENCIAS.webp",
  },
  {
    nombre: "Derecho del Consumidor",
    precioMenor: "S/. 60",
    imagen: "LP/assets/DERECHO DEL CONSUMIDOR.webp",
  },
  {
    nombre: "PAD",
    precioMenor: "S/. 120",
    imagen: "LP/assets/PAD PROCEDIMIENTO ADMINISTRATIVO DISCIPLINARIO.webp",
  },
  {
    nombre: "La Constitución en las redes",
    precioMenor: "S/. 120",
    imagen: "LP/assets/LA CONSTITUCION EN LAS REDES.webp",
  },
  {
    nombre: "Colección Litigación Oral en audiencias previas - Con caja",
    precioMenor: "S/. 150",
    imagen: "LP/assets/COLECCION LITIGACION EN AUDIENCIAS PREVIAS.webp",
  },
  {
    nombre: "Colección Litigación Oral en audiencias previas - Sin caja",
    precioMenor: "S/. 140",
    imagen:
      "LP/assets/COLECCION LITIGACION EN AUDIENCIAS PREVIAS - SIN CAJA.webp",
  },
  {
    nombre: "El Nuevo Código Procesal Constitucional",
    precioMenor: "S/. 100",
    imagen: "LP/assets/EL NUEVO CODIGO PROCESAL CONSTITUCIONAL.webp",
  },
  {
    nombre: "Curso de Redacción Administrativa",
    precioMenor: "S/. 100",
    imagen: "LP/assets/CURSO DE REDACCION ADMINISTRATIVA.webp",
  },
  {
    nombre: "Derecho penal: parte general",
    precioMenor: "S/. 130",
    imagen: "url_de_imagen_1",
  },
  {
    nombre: "Mi primer juicio de familia. ¿Qué le digo al juez?",
    precioMenor: "S/. 100",
    imagen: "LP/assets/MI PRIMER JUICIO DE FAMILIA.webp",
  },
  {
    nombre: "El Defensor",
    precioMenor: "S/. 60",
    imagen: "LP/assets/EL DEFENSOR.webp",
  },
  {
    nombre: "El derecho a la prueba en la investigación preparatoria",
    imagen: "LP/assets/EL DERECHO A LA PRUEBA EN LA INVESTIGACION.webp",
    precioMenor: "S/. 130",
  },
];

// Generar tarjetas de productos
productos.forEach((producto) => {
  const card = document.createElement("a");
  card.className = "product-card";
  card.href = "./details.html";

  card.innerHTML = `
    <img class="product-img" src="${producto.imagen}" alt="${producto.nombre}" />
    <div class="product-info">
      <span class="product-title">${producto.nombre}</span>
      <div class="product-price-block">
        <span class="product-price">${producto.precioMenor}</span>
      </div>
    </div>
  `;

  productsContainer.appendChild(card);
});
