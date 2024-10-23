//TARJETA DE PRODUCTOS
class Products {
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

const product1 = new Products(
  "1",
  "Código Penal Tapa Dura",
  "S/. 75",
  "",
  ["assets/CODIGO PENAL.png"],
  "Incluye IGV"
);
const product2 = new Products(
  "2",
  "Código Penal Tapa Rústica",
  "S/. 50",
  "",
  ["assets/CP_TR3-removebg-preview.png"],
  "Incluye IGV"
);
const product3 = new Products(
  "3",
  "Código Civil Tapa Dura",
  "S/. 75",
  "",
  ["assets/CODIGO CIVIL.webp"],
  "Incluye IGV"
);
const product4 = new Products(
  "4",
  "Código Civil Tapa Rústica",
  "S/. 75",
  "",
  ["assets/CC_TR_3-removebg-preview.png"],
  "Incluye IGV"
);
const product5 = new Products(
  "5",
  "Detención policial en flagrancia y proceso inmediato",
  "S/. 130",
  "",
  ["url_de_imagen_1"],
  "Incluye IGV"
);
const product6 = new Products(
  "6",
  "Mini código penal",
  "S/. 35",
  "",
  ["assets/MINI CODIGO PENAL.webp"],
  "Incluye IGV"
);
const product7 = new Products(
  "7",
  "El Defensor 2",
  "S/. 60",
  "",
  ["assets/EL DEFENSOR 2 - VIVIENDO EL SUEÑO.webp"],
  "Incluye IGV"
);
const product8 = new Products(
  "8",
  "Litigación Oral Civil",
  "S/. 100",
  "",
  ["assets/LITIGACION ORAL CIVIL.webp"],
  "Incluye IGV"
);
const product9 = new Products(
  "9",
  "Colección ¿Cómo redactar un contrato? Notas desde la práctica",
  "S/. 140",
  "",
  ["assets/COLECCION - COMO REDACTAR UN CONTRATO.webp"],
  "Incluye IGV"
);
const product10 = new Products(
  "10",
  "Culpabilidad y Neurociencias",
  "S/. 80",
  "",
  ["assets/CULPABILIDAD Y NEUROCIENCIAS.webp"],
  "Incluye IGV"
);
const product11 = new Products(
  "11",
  "Derecho del Consumidor",
  "S/. 60",
  "",
  ["assets/DERECHO DEL CONSUMIDOR.webp"],
  "Incluye IGV"
);
const product12 = new Products(
  "12",
  "PAD",
  "S/. 120",
  "",
  ["assets/PAD PROCEDIMIENTO ADMINISTRATIVO DISCIPLINARIO.webp"],
  "Incluye IGV"
);
const product13 = new Products(
  "13",
  "La Constitución en las redes",
  "S/. 120",
  "",
  ["assets/LA CONSTITUCION EN LAS REDES.webp"],
  "Incluye IGV"
);
const product14 = new Products(
  "14",
  "Colección Litigación Oral en audiencias previas - Con caja",
  "S/. 150",
  "",
  ["assets/COLECCION LITIGACION EN AUDIENCIAS PREVIAS.webp"],
  "Incluye IGV"
);
const product15 = new Products(
  "15",
  "Colección Litigación Oral en audiencias previas - Sin caja",
  "S/. 140",
  "",
  ["assets/COLECCION LITIGACION EN AUDIENCIAS PREVIAS - SIN CAJA.webp"],
  "Incluye IGV"
);
const product16 = new Products(
  "16",
  "El Nuevo Código Procesal Constitucional",
  "S/. 100",
  "",
  ["assets/EL NUEVO CODIGO PROCESAL CONSTITUCIONAL.webp"],
  "Incluye IGV"
);
const product17 = new Products(
  "17",
  "Curso de Redacción Administrativa",
  "S/. 100",
  "",
  ["assets/CURSO DE REDACCION ADMINISTRATIVA.webp"],
  "Incluye IGV"
);
const product18 = new Products(
  "18",
  "Derecho penal: parte general",
  "S/. 130",
  "",
  ["url_de_imagen_1"],
  "Incluye IGV"
);
const product19 = new Products(
  "19",
  "Mi primer juicio de familia. ¿Qué le digo al juez?",
  "S/. 100",
  "",
  ["assets/MI PRIMER JUICIO DE FAMILIA.webp"],
  "Incluye IGV"
);
const product20 = new Products(
  "20",
  "El Defensor",
  "S/. 60",
  "",
  ["assets/EL DEFENSOR.png"],
  "Incluye IGV"
);
const product21 = new Products(
  "21",
  "El derecho a la prueba en la investigación preparatoria",
  "S/. 130",
  "",
  ["assets/EL DERECHO A LA PRUEBA EN LA INVESTIGACION.webp"],

  "Incluye IGV"
);

const arrayProducts = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
  product21,
];

function createCard(product) {
  return `
  <a class = "product-card" href = "./details.html?id=${product.id}" >  
  <img class="product-img" src="${product.imagen[0]}" alt="${product.nombre}" />
      <div class="product-info">
        <span class="product-title">${product.nombre}</span>
        <div class="product-price-block">
          <span class="product-price">${product.precioMenor}</span>
        </div>
        <div class="product-impuesto">
          <span class="product-igv">${product.igv}</span>
        </div>
      </div>
      </a>
`;
}
function printCards(arrayProducts, selector) {
  let productsTemplate = "";

  arrayProducts.forEach((product) => {
    productsTemplate += createCard(product);
  });

  const productsContainer = document.getElementById(selector);
  productsContainer.innerHTML = productsTemplate;
}

printCards(arrayProducts, "products-container");
