/*Class*/
class Products {
  constructor(id, nombre, precioMenor, precioMayor, imagen, igv, description) {
    this.id = id;
    this.nombre = nombre;
    this.precioMenor = precioMenor;
    this.precioMayor = precioMayor;
    this.imagen = imagen;
    this.igv = igv;
    this.description = description;
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
  ["public/CODIGO PENAL.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vid transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product2 = new Products(
  "2",
  "Código Penal Tapa Rústica",
  "50",
  "",
  ["public/CODIGO PENAL TAPA RUSTICA.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product3 = new Products(
  "3",
  "Código Civil Tapa Dura",
  "75",
  "",
  ["public/CODIGO CIVIL.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product4 = new Products(
  "4",
  "Código Civil Tapa Rústica",
  "75",
  "",
  ["public/CODIGO CIVIL TAPA RUSTICA.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product5 = new Products(
  "5",
  "Detencion policial en flagrancia y proceso inmediato",
  "130",
  "",
  ["public/DETENCION-POLICIAL.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product6 = new Products(
  "6",
  "Mini Código penal",
  "35",
  "",
  ["public/MINI CODIGO PENAL.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product7 = new Products(
  "7",
  "El Defensor 2",
  "60",
  "",
  ["public/EL DEFENSOR 2 - VIVIENDO EL SUEÑO.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product8 = new Products(
  "8",
  "Litigacion Oral Civil",
  "100",
  "",
  ["public/LITIGACION ORAL CIVIL.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product9 = new Products(
  "9",
  "Coleccion ¿Cómo redactar un contrato? Notas desde la práctica",
  "140",
  "",
  ["public/COLECCION - COMO REDACTAR UN CONTRATO.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product10 = new Products(
  "10",
  "Culpabilidad y Neurociencias",
  "80",
  "",
  ["public/CULPABILIDAD Y NEUROCIENCIAS.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product11 = new Products(
  "11",
  "Derecho del Consumidor",
  "60",
  "",
  ["public/DERECHO DEL CONSUMIDOR.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product12 = new Products(
  "12",
  "PAD",
  "120",
  "",
  ["public/PAD PROCEDIMIENTO ADMINISTRATIVO DISCIPLINARIO.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product13 = new Products(
  "13",
  "La Constitucion en las redes",
  "120",
  "",
  ["public/LA CONSTITUCION EN LAS REDES.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product14 = new Products(
  "14",
  "Coleccion Litigacion Oral en audiencias previas - Con caja",
  "150",
  "",
  ["public/COLECCION LITIGACION EN AUDIENCIAS PREVIAS.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product15 = new Products(
  "15",
  "Coleccion Litigacion Oral en audiencias previas - Sin caja",
  "140",
  "",
  ["public/COLECCION LITIGACION EN AUDIENCIAS PREVIAS - SIN CAJA.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product16 = new Products(
  "16",
  "El Nuevo Código Procesal Constitucional",
  "100",
  "",
  ["public/EL NUEVO CODIGO PROCESAL CONSTITUCIONAL.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product17 = new Products(
  "17",
  "Curso de Redaccion Administrativa",
  "100",
  "",
  ["public/CURSO DE REDACCION ADMINISTRATIVA.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product18 = new Products(
  "18",
  "Derecho penal: parte general",
  "130",
  "",
  ["public/DERECHO-PENAL-PARTE-GENERAL.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product19 = new Products(
  "19",
  "Mi primer juicio de familia. ¿Qué le digo al juez?",
  "100",
  "",
  ["public/MI PRIMER JUICIO DE FAMILIA.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product20 = new Products(
  "20",
  "El Defensor",
  "60",
  "",
  ["public/EL DEFENSOR.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
);
const product21 = new Products(
  "21",
  "El derecho a la prueba en la investigacion preparatoria",
  "130",
  "",
  ["public/EL DERECHO A LA PRUEBA EN LA INVESTIGACION.webp"],
  "Incluye IGV",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos."
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
