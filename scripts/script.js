const productsContainer = document.getElementById("products-container");
const librosContainer = document.getElementById("tarjetas-libros");
const preventaContainer = document.getElementById("tarjetas-preventa");
const contenedorOfertas = document.getElementById("offers-container");

export const productos = [
  {
    id: "1",
    nombre: "Código Penal Tapa Dura",
    precioMenor: "S/. 75",
    imagen: "assets/CODIGO PENAL.png",
    igv: "Incluye IGV",
  },
  {
    id: "2",
    nombre: "Código Penal Tapa Rústica",
    precioMenor: "S/. 50",
    imagen: "assets/CP_TR3-removebg-preview.png",
    igv: "Incluye IGV",
  },
  {
    id: "3",
    nombre: "Código Civil Tapa Dura",
    precioMenor: "S/. 75",
    imagen: "assets/CODIGO CIVIL.webp",
    igv: "Incluye IGV",
  },
  {
    id: "4",
    nombre: "Código Civil Tapa Rústica",
    precioMenor: "S/. 75",
    imagen: "assets/CC_TR_3-removebg-preview.png",
    igv: "Incluye IGV",
  },
  {
    id: "5",
    nombre: "Detención policial en flagrancia y proceso inmediato",
    precioMenor: "S/. 130",
    imagen: "url_de_imagen_1",
    igv: "Incluye IGV",
  },
  {
    id: "6",
    nombre: "Mini código penal",
    precioMenor: "S/. 35",
    imagen: "assets/MINI CODIGO PENAL.webp",
    igv: "Incluye IGV",
  },

  {
    id: "7",
    nombre: "El Defensor 2",
    precioMenor: "S/. 60",
    imagen: "assets/EL DEFENSOR 2 - VIVIENDO EL SUEÑO.webp",
    igv: "Incluye IGV",
  },
  {
    id: "8",
    nombre: "Litigación Oral Civil",
    precioMenor: "S/. 100",
    imagen: "assets/LITIGACION ORAL CIVIL.webp",
    igv: "Incluye IGV",
  },
  {
    id: "9",
    nombre: "Colección ¿Cómo redactar un contrato? Notas desde la práctica",
    precioMenor: "S/. 140",
    imagen: "assets/COLECCION - COMO REDACTAR UN CONTRATO.webp",
    igv: "Incluye IGV",
  },
  {
    id: "10",
    nombre: "Culpabilidad y Neurociencias",
    precioMenor: "S/. 80",
    imagen: "assets/CULPABILIDAD Y NEUROCIENCIAS.webp",
    igv: "Incluye IGV",
  },
  {
    id: "11",
    nombre: "Derecho del Consumidor",
    precioMenor: "S/. 60",
    imagen: "assets/DERECHO DEL CONSUMIDOR.webp",
    igv: "Incluye IGV",
  },
  {
    id: "12",
    nombre: "PAD",
    precioMenor: "S/. 120",
    imagen: "assets/PAD PROCEDIMIENTO ADMINISTRATIVO DISCIPLINARIO.webp",
    igv: "Incluye IGV",
  },
  {
    id: "13",
    nombre: "La Constitución en las redes",
    precioMenor: "S/. 120",
    imagen: "assets/LA CONSTITUCION EN LAS REDES.webp",
    igv: "Incluye IGV",
  },
  {
    id: "14",
    nombre: "Colección Litigación Oral en audiencias previas - Con caja",
    precioMenor: "S/. 150",
    imagen: "assets/COLECCION LITIGACION EN AUDIENCIAS PREVIAS.webp",
    igv: "Incluye IGV",
  },
  {
    id: "15",
    nombre: "Colección Litigación Oral en audiencias previas - Sin caja",
    precioMenor: "S/. 140",
    imagen: "assets/COLECCION LITIGACION EN AUDIENCIAS PREVIAS - SIN CAJA.webp",
    igv: "Incluye IGV",
  },
  {
    id: "16",
    nombre: "El Nuevo Código Procesal Constitucional",
    precioMenor: "S/. 100",
    imagen: "assets/EL NUEVO CODIGO PROCESAL CONSTITUCIONAL.webp",
    igv: "Incluye IGV",
  },
  {
    id: "17",
    nombre: "Curso de Redacción Administrativa",
    precioMenor: "S/. 100",
    imagen: "assets/CURSO DE REDACCION ADMINISTRATIVA.webp",
    igv: "Incluye IGV",
  },
  {
    id: "18",
    nombre: "Derecho penal: parte general",
    precioMenor: "S/. 130",
    imagen: "url_de_imagen_1",
    igv: "Incluye IGV",
  },
  {
    id: "19",
    nombre: "Mi primer juicio de familia. ¿Qué le digo al juez?",
    precioMenor: "S/. 100",
    imagen: "assets/MI PRIMER JUICIO DE FAMILIA.webp",
    igv: "Incluye IGV",
  },
  {
    id: "20",
    nombre: "El Defensor",
    precioMenor: "S/. 60",
    imagen: "assets/EL DEFENSOR.png",
    igv: "Incluye IGV",
  },
  {
    id: "21",
    nombre: "El derecho a la prueba en la investigación preparatoria",
    imagen: "assets/EL DERECHO A LA PRUEBA EN LA INVESTIGACION.webp",
    precioMenor: "S/. 130",
    igv: "Incluye IGV",
  },
];

// Generar tarjetas de productos

productos.forEach((producto) => {
  // Crear un nuevo elemento para cada producto
  const card = document.createElement("a");
  card.classList.add("product-card");
  card.href = `./details.html?id=${producto.id}`;

  card.innerHTML = `
      <img class="product-img" src="${producto.imagen}" alt="${producto.nombre}" />
      <div class="product-info">
        <span class="product-title">${producto.nombre}</span>
        <div class="product-price-block">
          <span class="product-price">${producto.precioMenor}</span>
        </div>
        <div class="product-impuesto">
          <span class="product-igv">${producto.igv}</span>
        </div>
      </div>
    </a>
  `;

  // Agregar el card al contenedor
  productsContainer.appendChild(card);
});

// Array de ofertas
export const ofertas = [
  {
    id: "1",
    nombre: "Código Penal Tapa Dura",
    precio: "S/. 75",
    impuesto: "Incluye IGV",
    imagen: "assets/CODIGO PENAL.webp",
    link: "./details.html",
  },
  {
    id: "3",
    nombre: "Código Civil Tapa Dura",
    precio: "S/. 75",
    impuesto: "Incluye IGV",
    imagen: "assets/CODIGO CIVIL.webp",
    link: "./details.html",
  },
  {
    id: "7",
    nombre: "El Defensor 2",
    precio: "S/. 60",
    impuesto: "Incluye IGV",
    imagen: "assets/EL DEFENSOR 2 - VIVIENDO EL SUEÑO.webp",
    link: "./details.html",
  },
];

ofertas.forEach((product) => {
  // Crear un nuevo elemento para la oferta
  const card = document.createElement("a");
  card.classList.add("product-card");
  card.href = `${product.link}`;

  // Insertar el contenido HTML en la tarjeta de la oferta
  card.innerHTML = `
      <img class="product-img" src="${product.imagen}" alt="${product.nombre}" />
      <div class="product-info">
        <span class="product-title">${product.nombre}</span>
        <div class="product-price-block">
          <span class="product-price">${product.precio}</span>
        </div>
        <div class="product-tax-policy">
          <span class="product-discount">${product.impuesto}</span>
        </div>
      </div>
 
  `;

  // Agregar la tarjeta al contenedor de ofertas
  contenedorOfertas.appendChild(card);
});
