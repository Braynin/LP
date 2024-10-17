const productsContainer = document.getElementById("products");
const librosContainer = document.getElementById("tarjetas-libros");
const preventaContainer = document.getElementById("tarjetas-preventa");

const productos = [
  {
    nombre: "Código Penal Tapa Dura",
    precio: "S/. 75",
    imagen: "url_de_imagen_1",
  },
  {
    nombre: "Código Penal Tapa Rústica",
    precio: "S/. 50",
    imagen: "url_de_imagen_2",
  },
  {
    nombre: "Código Civil Tapa Dura",
    precio: "S/. 75",
    imagen: "url_de_imagen_3",
  },
  {
    nombre: "Detención policial en flagrancia y proceso inmediato",
    precio: "S/. 130",
    imagen: "url_de_imagen_1",
  },
  { nombre: "Mini código penal", precio: "S/. 35", imagen: "url_de_imagen_2" },
  { nombre: "El Defensor 2", precio: "S/. 60", imagen: "url_de_imagen_3" },
  {
    nombre: "Litigación Oral Civil",
    precio: "S/. 100",
    imagen: "url_de_imagen_1",
  },
  {
    nombre: "Colección ¿Cómo redactar un contrato? Notas desde la práctica",
    precio: "S/. 140",
    imagen: "url_de_imagen_2",
  },
  {
    nombre: "Culpabilidad y Neurociencias",
    precio: "S/. 80",
    imagen: "url_de_imagen_3",
  },
  {
    nombre: "Derecho del Consumidor",
    precio: "S/. 60",
    imagen: "url_de_imagen_1",
  },
  { nombre: "PAD", precio: "S/. 120", imagen: "url_de_imagen_2" },
  {
    nombre: "La Constitución en las redes",
    precio: "S/. 120",
    imagen: "url_de_imagen_3",
  },
  {
    nombre: "Colección Litigación Oral en audiencias previas - Con caja",
    precio: "S/. 150",
    imagen: "url_de_imagen_1",
  },
  {
    nombre: "Colección Litigación Oral en audiencias previas - Sin caja",
    precio: "S/. 140",
    imagen: "url_de_imagen_1",
  },
  {
    nombre: "El Nuevo Código Procesal Constitucional",
    precio: "S/. 100",
    imagen: "url_de_imagen_2",
  },
  {
    nombre: "Curso de Redacción Administrativa",
    precio: "S/. 100",
    imagen: "url_de_imagen_3",
  },
  {
    nombre: "Derecho penal: parte general",
    precio: "S/. 130",
    imagen: "url_de_imagen_1",
  },
  {
    nombre: "Mi primer juicio de familia. ¿Qué le digo al juez?",
    precio: "S/. 100",
    imagen: "url_de_imagen_2",
  },
  { nombre: "El Defensor", precio: "S/. 60", imagen: "url_de_imagen_3" },
  {
    nombre: "El derecho a la prueba en la investigación preparatoria",
    precio: "S/. 120",
    imagen: "url_de_imagen_1",
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
        <span class="product-price">${producto.precio}</span>
      </div>
    </div>
  `;

  productsContainer.appendChild(card);
});
