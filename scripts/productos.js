//TARJETA DE PRODUCTOS
class Productos {
  constructor(id, nombre, precioMenor, precioMayor, imagen, igv) {
    this.id = id;
    this.nombre = nombre;
    this.precioMenor = precioMenor;
    this.precioMayor = precioMayor;
    this.imagen = imagen;
    this.igv = igv;
  }

  get supplier() {
    return this._supplier;
  }
  set supplier(newName) {
    this._supplier = newName;
  }
}

const producto1 = new Productos(
  "1",
  "Código Penal Tapa Dura",
  "S/. 75",
  "",
  ["assets/CODIGO PENAL.png"],
  "Incluye IGV"
);
const producto2 = new Productos(
  "2",
  "Código Penal Tapa Rústica",
  "S/. 50",
  "",
  ["assets/CP_TR3-removebg-preview.png"],
  "Incluye IGV"
);
const producto3 = new Productos(
  "3",
  "Código Civil Tapa Dura",
  "S/. 75",
  "",
  ["assets/CODIGO CIVIL.webp"],
  "Incluye IGV"
);
const producto4 = new Productos(
  "4",
  "Código Civil Tapa Rústica",
  "S/. 75",
  "",
  ["assets/CC_TR_3-removebg-preview.png"],
  "Incluye IGV"
);
const producto5 = new Productos(
  "5",
  "Detención policial en flagrancia y proceso inmediato",
  "S/. 130",
  "",
  ["url_de_imagen_1"],
  "Incluye IGV"
);
const producto6 = new Productos(
  "6",
  "Mini código penal",
  "S/. 35",
  "",
  ["assets/MINI CODIGO PENAL.webp"],
  "Incluye IGV"
);
const producto7 = new Productos(
  "7",
  "El Defensor 2",
  "S/. 60",
  "",
  ["assets/EL DEFENSOR 2 - VIVIENDO EL SUEÑO.webp"],
  "Incluye IGV"
);
const producto8 = new Productos(
  "8",
  "Litigación Oral Civil",
  "S/. 100",
  "",
  ["assets/LITIGACION ORAL CIVIL.webp"],
  "Incluye IGV"
);
const producto9 = new Productos(
  "9",
  "Colección ¿Cómo redactar un contrato? Notas desde la práctica",
  "S/. 140",
  "",
  ["assets/COLECCION - COMO REDACTAR UN CONTRATO.webp"],
  "Incluye IGV"
);
const producto10 = new Productos(
  "10",
  "Culpabilidad y Neurociencias",
  "S/. 80",
  "",
  ["assets/CULPABILIDAD Y NEUROCIENCIAS.webp"],
  "Incluye IGV"
);
const producto11 = new Productos(
  "11",
  "Derecho del Consumidor",
  "S/. 60",
  "",
  ["assets/DERECHO DEL CONSUMIDOR.webp"],
  "Incluye IGV"
);
const producto12 = new Productos(
  "12",
  "PAD",
  "S/. 120",
  "",
  ["assets/PAD PROCEDIMIENTO ADMINISTRATIVO DISCIPLINARIO.webp"],
  "Incluye IGV"
);
const producto13 = new Productos(
  "13",
  "La Constitución en las redes",
  "S/. 120",
  "",
  ["assets/LA CONSTITUCION EN LAS REDES.webp"],
  "Incluye IGV"
);
const producto14 = new Productos(
  "14",
  "Colección Litigación Oral en audiencias previas - Con caja",
  "S/. 150",
  "",
  ["assets/COLECCION LITIGACION EN AUDIENCIAS PREVIAS.webp"],
  "Incluye IGV"
);
const producto15 = new Productos(
  "15",
  "Colección Litigación Oral en audiencias previas - Sin caja",
  "S/. 140",
  "",
  ["assets/COLECCION LITIGACION EN AUDIENCIAS PREVIAS - SIN CAJA.webp"],
  "Incluye IGV"
);
const producto16 = new Productos(
  "16",
  "El Nuevo Código Procesal Constitucional",
  "S/. 100",
  "",
  ["assets/EL NUEVO CODIGO PROCESAL CONSTITUCIONAL.webp"],
  "Incluye IGV"
);
const producto17 = new Productos(
  "17",
  "Curso de Redacción Administrativa",
  "S/. 100",
  "",
  ["assets/CURSO DE REDACCION ADMINISTRATIVA.webp"],
  "Incluye IGV"
);
const producto18 = new Productos(
  "18",
  "Derecho penal: parte general",
  "S/. 130",
  "",
  ["url_de_imagen_1"],
  "Incluye IGV"
);
const producto19 = new Productos(
  "19",
  "Mi primer juicio de familia. ¿Qué le digo al juez?",
  "S/. 100",
  "",
  ["assets/MI PRIMER JUICIO DE FAMILIA.webp"],
  "Incluye IGV"
);
const producto20 = new Productos(
  "20",
  "El Defensor",
  "S/. 60",
  "",
  ["assets/EL DEFENSOR.png"],
  "Incluye IGV"
);
const producto21 = new Productos(
  "21",
  "El derecho a la prueba en la investigación preparatoria",
  "S/. 130",
  "",
  ["assets/EL DERECHO A LA PRUEBA EN LA INVESTIGACION.webp"],

  "Incluye IGV"
);

const arrayProductos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
  producto10,
  producto11,
  producto12,
  producto13,
  producto14,
  producto15,
  producto16,
  producto17,
  producto18,
  producto19,
  producto20,
  producto21,
];

function createCard(producto) {
  return `
  <a class = "product-card" href = "./details.html?id=${producto.id}" >  
  <img class="product-img" src="${producto.imagen[0]}" alt="${producto.nombre}" />
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
}
function printCards(arrayProductos, selector) {
  let productosTemplate = "";

  arrayProductos.forEach((producto) => {
    productosTemplate += createCard(producto);
  });

  const productosContainer = document.getElementById(selector);
  productosContainer.innerHTML = productosTemplate;
}

printCards(arrayProductos, "products-container");

//TARJETA DE ORFERTAS
