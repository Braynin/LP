const productsContainer = document.getElementById("products");
const librosContainer = document.getElementById("tarjetas-libros");
const preventaContainer = document.getElementById("tarjetas-preventa");

const productos = [
  {
    id: "1",
    nombre: "Código Penal Tapa Dura",
    precioMenor: "S/. 75",
    imagen: "LP/assets/CODIGO PENAL.webp",
  },
  {
    id: "2",
    nombre: "Código Penal Tapa Rústica",
    precioMenor: "S/. 50",
    imagen: "LP/assets/CODIGO PENAL.webp",
  },
  {
    id: "3",
    nombre: "Código Civil Tapa Dura",
    precioMenor: "S/. 75",
    imagen: "LP/assets/CODIGO CIVIL.webp",
  },
  {
    id: "4",
    nombre: "Código Civil Tapa Rústica",
    precioMenor: "S/. 75",
    imagen: "LP/assets/CODIGO CIVIL.webp",
  },
  {
    id: "5",
    nombre: "Detención policial en flagrancia y proceso inmediato",
    precioMenor: "S/. 130",
    imagen: "url_de_imagen_1",
  },
  {
    id: "6",
    nombre: "Mini código penal",
    precioMenor: "S/. 35",
    imagen: "LP/assets/MINI CODIGO PENAL.webp",
  },

  {
    id: "7",
    nombre: "El Defensor 2",
    precioMenor: "S/. 60",
    imagen: "LP/assets/EL DEFENSOR 2 - VIVIENDO EL SUEÑO.webp",
  },
  {
    id: "8",
    nombre: "Litigación Oral Civil",
    precioMenor: "S/. 100",
    imagen: "LP/assets/LITIGACION ORAL CIVIL.webp",
  },
  {
    id: "9",
    nombre: "Colección ¿Cómo redactar un contrato? Notas desde la práctica",
    precioMenor: "S/. 140",
    imagen: "LP/assets/COLECCION - COMO REDACTAR UN CONTRATO.webp",
  },
  {
    id: "10",
    nombre: "Culpabilidad y Neurociencias",
    precioMenor: "S/. 80",
    imagen: "LP/assets/CULPABILIDAD Y NEUROCIENCIAS.webp",
  },
  {
    id: "11",
    nombre: "Derecho del Consumidor",
    precioMenor: "S/. 60",
    imagen: "LP/assets/DERECHO DEL CONSUMIDOR.webp",
  },
  {
    id: "12",
    nombre: "PAD",
    precioMenor: "S/. 120",
    imagen: "LP/assets/PAD PROCEDIMIENTO ADMINISTRATIVO DISCIPLINARIO.webp",
  },
  {
    id: "13",
    nombre: "La Constitución en las redes",
    precioMenor: "S/. 120",
    imagen: "LP/assets/LA CONSTITUCION EN LAS REDES.webp",
  },
  {
    id: "14",
    nombre: "Colección Litigación Oral en audiencias previas - Con caja",
    precioMenor: "S/. 150",
    imagen: "LP/assets/COLECCION LITIGACION EN AUDIENCIAS PREVIAS.webp",
  },
  {
    id: "15",
    nombre: "Colección Litigación Oral en audiencias previas - Sin caja",
    precioMenor: "S/. 140",
    imagen:
      "LP/assets/COLECCION LITIGACION EN AUDIENCIAS PREVIAS - SIN CAJA.webp",
  },
  {
    id: "16",
    nombre: "El Nuevo Código Procesal Constitucional",
    precioMenor: "S/. 100",
    imagen: "LP/assets/EL NUEVO CODIGO PROCESAL CONSTITUCIONAL.webp",
  },
  {
    id: "17",
    nombre: "Curso de Redacción Administrativa",
    precioMenor: "S/. 100",
    imagen: "LP/assets/CURSO DE REDACCION ADMINISTRATIVA.webp",
  },
  {
    id: "18",
    nombre: "Derecho penal: parte general",
    precioMenor: "S/. 130",
    imagen: "url_de_imagen_1",
  },
  {
    id: "19",
    nombre: "Mi primer juicio de familia. ¿Qué le digo al juez?",
    precioMenor: "S/. 100",
    imagen: "LP/assets/MI PRIMER JUICIO DE FAMILIA.webp",
  },
  {
    id: "20",
    nombre: "El Defensor",
    precioMenor: "S/. 60",
    imagen: "LP/assets/EL DEFENSOR.webp",
  },
  {
    id: "21",
    nombre: "El derecho a la prueba en la investigación preparatoria",
    imagen: "LP/assets/EL DERECHO A LA PRUEBA EN LA INVESTIGACION.webp",
    precioMenor: "S/. 130",
  },
];

// Generar tarjetas de productos

productos.forEach((producto) => {
  const card = document.createElement("a");
  card.className = "product-card";
  card.href = `./details.html?id=${producto.id}`;

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
