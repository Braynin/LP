/*Class*/
class Products {
  constructor(
    id,
    nombre,
    precioMenor,
    precioMayor,
    imagen,
    igv,
    section,
    sipnosis,
    isbn,
    autor,
    editorial,
    año,
    paginas,
    presentacion,
    peso,
    alto,
    ancho
  ) {
    this.id = id;
    this.nombre = nombre;
    this.precioMenor = precioMenor;
    this.precioMayor = precioMayor;
    this.imagen = imagen;
    this.igv = igv;
    this.section = section;
    this.sipnosis = sipnosis;
    this.isbn = isbn;
    this.autor = autor;
    this.editorial = editorial;
    this.año = año;
    this.paginas = paginas;
    this.presentacion = presentacion;
    this.peso = peso;
    this.alto = alto;
    this.ancho = ancho;
  }
  get supplier() {
    return this._supplier;
  }
  set supplier(newName) {
    this._supplier = newName;
  }
}

/*Objects*/

const product1 = new Products(
  "1",
  "Código Penal Tapa Dura",
  "75",
  "",
  [
    "public/CÓDIGO PENAL/TAPA DURA/CODIGO-PENAL-CENITAL-DURA.png",
    "public/CÓDIGO PENAL/TAPA DURA/CODIGO-PENAL-BACK-IZQUIERDA-DURA.png",
    "public/CÓDIGO PENAL/TAPA DURA/CODIGO-PENAL-FRONT-DERECHA-DURA.png",
    "public/CÓDIGO PENAL/TAPA DURA/CODIGO-PENAL-FRONT-IZQUIERDA-DURA.png",
  ],
  "Incluye IGV",
  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vid transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-6-8",
  "LP",
  "Editorial LP",
  "2024",
  "1004",
  "Tapa Dura",
  "1.4kg",
  "21cm",
  "16cm"
);
const product2 = new Products(
  "2",
  "Código Penal Tapa Rústica",
  "50",
  "",
  ["public/CODIGO PENAL TAPA RUSTICA.webp"],
  "Incluye IGV",
  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-6-8",
  "LP",
  "Editorial LP",
  "2024",
  "1004",
  "Tapa Rústica",
  "1.3kg",
  "21cm",
  "16cm"
);
const product3 = new Products(
  "3",
  "Código Civil Tapa Dura",
  "75",
  "",
  ["public/CODIGO CIVIL.webp"],
  "Incluye IGV",
  "Civil",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-7-4",
  "LP",
  "Editorial LP",
  "2024",
  "1007",
  "Tapa Dura",
  "1.4kg",
  "21cm",
  "16cm"
);
const product4 = new Products(
  "4",
  "Código Civil Tapa Rústica",
  "75",
  "",
  ["public/CODIGO CIVIL TAPA RUSTICA.webp"],
  "Incluye IGV",
  "Civil",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-7-4",
  "LP",
  "Editorial LP",
  "2024",
  "1007",
  "Tapa Rústica",
  "1.4kg",
  "21cm",
  "16cm"
);
const product5 = new Products(
  "5",
  "Detencion policial en flagrancia y proceso inmediato",
  "130",
  "",
  ["public/DETENCION-POLICIAL.webp"],
  "Incluye IGV",
  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-6-8",
  "Giammpol Taboada Pilco",
  "Editorial LP",
  "2024",
  "813",
  "Tapa Dura",
  "1.6kg",
  "25cm",
  "17cm"
);
const product6 = new Products(
  "6",
  "Mini Código penal",
  "35",
  "",
  ["public/MINI CODIGO PENAL.webp"],
  "Incluye IGV",
  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-6-8",
  "LP",
  "Editorial LP",
  "2024",
  "591",
  "Tapa Dura",
  "0.8kg",
  "18cm",
  "11cm"
);
const product7 = new Products(
  "7",
  "El Defensor 2",
  "60",
  "",
  ["public/EL DEFENSOR 2 - VIVIENDO EL SUEÑO.webp"],
  "Incluye IGV",
  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249720-2-7",
  "Jefferson Moreno Nieves",
  "Editorial LP",
  "2024",
  "238",
  "Tapa Rustica",
  "1kg",
  "23cm",
  "16cm"
);
const product8 = new Products(
  "8",
  "Litigacion Oral Civil",
  "100",
  "",
  ["public/LITIGACION ORAL CIVIL.webp"],
  "Incluye IGV",
  "Civil",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-5-1",
  "Carlos E. Polanco Gutiérrez",
  "Editorial LP",
  "2024",
  "383",
  "Tapa Rustica",
  "0.50kg",
  "24cm",
  "16cm"
);
const product9 = new Products(
  "9",
  "Coleccion ¿Cómo redactar un contrato? Notas desde la práctica",
  "140",
  "",
  ["public/COLECCION - COMO REDACTAR UN CONTRATO.webp"],
  "Incluye IGV",
  "Civil",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-8-2",
  "Jhoel Chipana Catalán",
  "Editorial LP",
  "2024",
  "238",
  "Tapa Rustica",
  "1kg",
  "20cm",
  "13cm"
);
const product10 = new Products(
  "10",
  "Culpabilidad y Neurociencias",
  "80",
  "",
  ["public/CULPABILIDAD Y NEUROCIENCIAS.webp"],
  "Incluye IGV",
  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-612-49490-2-9",
  "Frank Alamanza Altamirano",
  "San Bernardo Libros Jurídicos",
  "2024",
  "325",
  "Tapa Rustica",
  "0.60kg",
  "24cm",
  "17cm"
);
const product11 = new Products(
  "11",
  "Derecho del Consumidor",
  "60",
  "",
  ["public/DERECHO DEL CONSUMIDOR.webp"],
  "Incluye IGV",
  "Aministrativo",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-0-6",
  "Julio Baltazar Durand Carrión, Pavel FLores Flores",
  "Editorial LP",
  "2024",
  "285",
  "Tapa Rustica",
  "0.40kg",
  "23cm",
  "15cm"
);
const product12 = new Products(
  "12",
  "PAD",
  "120",
  "",
  ["public/PAD PROCEDIMIENTO ADMINISTRATIVO DISCIPLINARIO.webp"],
  "Incluye IGV",
  "Aministrativo",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61248993-0-0",
  "Gustavo A. Rico Iberico",
  "Escuela de Derecho LP",
  "2022",
  "285",
  "Tapa Rustica",
  "0.40kg",
  "23cm",
  "15cm"
);
const product13 = new Products(
  "13",
  "La Constitucion en las redes",
  "120",
  "",
  ["public/LA CONSTITUCION EN LAS REDES.webp"],
  "Incluye IGV",
  "Constitucional",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61248993-3-1",
  "Omar Sar",
  "Escuela de Derecho LP",
  "2023",
  "542",
  "Tapa Rustica",
  "0.80kg",
  "23cm",
  "15cm"
);
const product14 = new Products(
  "14",
  "Coleccion Litigacion Oral en audiencias previas - Con caja",
  "150",
  "",
  ["public/COLECCION LITIGACION EN AUDIENCIAS PREVIAS.webp"],
  "Incluye IGV",
  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61248993-7-9",
  "Jefferson Moreno Nieves",
  "Escuela de Derecho LP",
  "2023",
  "231",
  "Tapa Rustica",
  "1kg",
  "20cm",
  "15cm"
);
const product15 = new Products(
  "15",
  "Coleccion Litigacion Oral en audiencias previas - Sin caja",
  "140",
  "",
  ["public/COLECCION LITIGACION EN AUDIENCIAS PREVIAS - SIN CAJA.webp"],
  "Incluye IGV",
  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61248993-7-9",
  "Jefferson Moreno Nieves",
  "Escuela de Derecho LP",
  "2023",
  "231",
  "Tapa Rustica",
  "1kg",
  "20cm",
  "15cm"
);
const product16 = new Products(
  "16",
  "El Nuevo Código Procesal Constitucional",
  "100",
  "",
  ["public/EL NUEVO CODIGO PROCESAL CONSTITUCIONAL.webp"],
  "Incluye IGV",
  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249315-5-0",
  "Luis Andrés Roel Alva",
  "Escuela de Derecho LP",
  "2023",
  "446",
  "Tapa Rustica",
  "0.6kg",
  "24cm",
  "16cm"
);
const product17 = new Products(
  "17",
  "Curso de Redaccion Administrativa",
  "100",
  "",
  ["public/CURSO DE REDACCION ADMINISTRATIVA.webp"],
  "Incluye IGV",
  "Administrativo",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61248993-2-4",
  "José María Pacori Cari",
  "Escuela de Derecho LP",
  "2023",
  "479",
  "Tapa Rustica",
  "0.65kg",
  "24cm",
  "15cm"
);
const product18 = new Products(
  "18",
  "Derecho penal: parte general",
  "130",
  "",
  ["public/DERECHO-PENAL-PARTE-GENERAL.webp"],
  "Incluye IGV",
  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249315-0-5",
  "Dino Carlos Caro Coria, Luis Miguel Reyna Alfaro",
  "Escuela de Derecho LP",
  "2023",
  "718",
  "Tapa Dura",
  "1.15kg",
  "24cm",
  "17cm"
);
const product19 = new Products(
  "19",
  "Mi primer juicio de familia. ¿Qué le digo al juez?",
  "100",
  "",
  ["public/MI PRIMER JUICIO DE FAMILIA.webp"],
  "Incluye IGV",
  "Familia",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61248993-9-3",
  "Juan Carlos Del Aguila LLanos",
  "Escuela de Derecho LP",
  "2023",
  "382",
  "Tapa Rustica",
  "0.55kg",
  "23cm",
  "15cm"
);
const product20 = new Products(
  "20",
  "El Defensor",
  "60",
  "",
  ["public/EL DEFENSOR.webp"],
  "Incluye IGV",
  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978- 61248629-6-0",
  "Jefferson Moreno Nieves",
  "Editorial LP",
  "2022",
  "221",
  "Tapa Rustica",
  "0.8kg",
  "21cm",
  "16cm"
);
const product21 = new Products(
  "21",
  "El derecho a la prueba en la investigacion preparatoria",
  "130",
  "",
  ["public/EL DERECHO A LA PRUEBA EN LA INVESTIGACION.webp"],
  "Incluye IGV",
  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-612-322-411-0",
  "Jose Luis Castillo Alva",
  "Instituto Pacífico",
  "2023",
  "608",
  "Tapa Dura",
  "1kg",
  "24cm",
  "17cm"
);

/*Array*/

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

export default arrayProducts;
