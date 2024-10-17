const productsContainer = document.getElementById("products");
const librosContainer = document.getElementById("tarjetas-libros");
const preventaContainer = document.getElementById("tarjetas-preventa");

const productos = [
  {
    id: "1",
    nombre: "Código Penal Tapa Dura",
    precioMenor: "S/. 75",
    imagen: "url_de_imagen_1",
  },
  {
    id: "2",
    nombre: "Código Penal Tapa Rústica",
    precioMenor: "S/. 50",
    imagen: "url_de_imagen_2",
  },
  {
    id: "3",
    nombre: "Código Civil Tapa Dura",
    precioMenor: "S/. 75",
    imagen: "url_de_imagen_3",
  },
  {
    id: "4",
    nombre: "Código Civil Tapa Rústica",
    precioMenor: "S/. 75",
    imagen: "url_de_imagen_3",
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
    imagen: "url_de_imagen_2",
  },

  {
    id: "7",
    nombre: "El Defensor 2",
    precioMenor: "S/. 60",
    imagen: "url_de_imagen_3",
  },
  {
    id: "8",
    nombre: "Litigación Oral Civil",
    precioMenor: "S/. 100",
    imagen: "url_de_imagen_1",
  },
  {
    id: "9",
    nombre: "Colección ¿Cómo redactar un contrato? Notas desde la práctica",
    precioMenor: "S/. 140",
    imagen: "url_de_imagen_2",
  },
  {
    id: "10",
    nombre: "Culpabilidad y Neurociencias",
    precioMenor: "S/. 80",
    imagen: "url_de_imagen_3",
  },
  {
    id: "11",
    nombre: "Derecho del Consumidor",
    precioMenor: "S/. 60",
    imagen: "url_de_imagen_1",
  },
  {
    id: "12",
    nombre: "PAD",
    precioMenor: "S/. 120",
    imagen: "url_de_imagen_2",
  },
  {
    id: "13",
    nombre: "La Constitución en las redes",
    precioMenor: "S/. 120",
    imagen: "url_de_imagen_3",
  },
  {
    id: "14",
    nombre: "Colección Litigación Oral en audiencias previas - Con caja",
    precioMenor: "S/. 150",
    imagen: "url_de_imagen_1",
  },
  {
    id: "15",
    nombre: "Colección Litigación Oral en audiencias previas - Sin caja",
    precioMenor: "S/. 140",
    imagen: "url_de_imagen_1",
  },
  {
    id: "16",
    nombre: "El Nuevo Código Procesal Constitucional",
    precioMenor: "S/. 100",
    imagen: "url_de_imagen_2",
  },
  {
    id: "17",
    nombre: "Curso de Redacción Administrativa",
    precioMenor: "S/. 100",
    imagen: "url_de_imagen_3",
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
    imagen: "url_de_imagen_2",
  },
  {
    id: "20",
    nombre: "El Defensor",
    precioMenor: "S/. 60",
    imagen: "url_de_imagen_3",
  },
  {
    id: "21",
    nombre: "El derecho a la prueba en la investigación preparatoria",
    imagen: "url_de_imagen_1",
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
