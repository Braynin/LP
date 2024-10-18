const productsContainer = document.getElementById("products");
const librosContainer = document.getElementById("tarjetas-libros");
const preventaContainer = document.getElementById("tarjetas-preventa");

const productos = [
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
    imagen: "assets/CODIGO PENAL.webp",
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
    imagen: "assets/CODIGO CIVIL.webp",
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
       <div class="product-impuesto">
        <span class="product-igv">${producto.igv}</span>
      </div>
    </div>
  `;

  productsContainer.appendChild(card);
});

// Array de ofertas
const ofertas = [
  {
    title: "Kindle Paperwhite",
    description: "Black",
    price: "100000",
    discount: "50% Off",
    imgSrc: "https://i.postimg.cc/2ymFtsTn/kindle2.jpg",
    link: "./details.html",
  },
  {
    title: "Kindle Paperwhite",
    description: "Black",
    price: "100000",
    discount: "50% Off",
    imgSrc: "https://i.postimg.cc/2ymFtsTn/kindle2.jpg",
    link: "./details.html",
  },
  {
    title: "Kindle Paperwhite",
    description: "Black",
    price: "100000",
    discount: "50% Off",
    imgSrc: "https://i.postimg.cc/2ymFtsTn/kindle2.jpg",
    link: "./details.html",
  },
];

// Crear el contenido HTML usando innerHTML
let productosHTML = "";

ofertas.forEach((product) => {
  productosHTML += `
    <a class="card-ofertas" href="${product.link}">
      <img class="product-img" src="${product.imgSrc}" alt="${product.title}" />
      <div class="product-info">
        <span class="product-title">${product.title}</span>
        <span class="product-description">${product.description}</span>
        <div class="product-price-block">
          <span class="product-price">${product.price}</span>
          <span class="product-discount">${product.discount}</span>
        </div>
        <div class="product-tax-policy">
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </a>
  `;
});

// Asignar el HTML generado al bloque de ventas
salesBlock.innerHTML = productosHTML;

// Añadir el salesBlock al div 'contenedor-ofertas'
const contenedorOfertas = document.getElementById("contenedor-ofertas");
contenedorOfertas.appendChild(salesBlock);
