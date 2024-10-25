/*Conteiners*/

const messageContainer = document.getElementById("messages-container");
const headerContainer = document.getElementById("header-container");
const navContainer = document.getElementById("nav-container");
const footerContainer = document.getElementById("footer-container");

/*Classes*/

class message {
  constructor(text, linkto) {
    this.text = text;
    this.linkto = linkto;
  }
}

class socialLink {
  constructor(name, linkto, svg) {
    this.name = name;
    this.linkto = linkto;
    this.svg = svg;
  }
}

class navOption {
  constructor(text, linkto, section) {
    this.text = text;
    this.linkto = linkto;
    this.section = section;
  }
}

class footerOption {
  constructor(
    title,
    option1,
    linkto1,
    option2,
    linkto2,
    option3,
    linkto3,
    option4,
    linkto4
  ) {
    this.title = title;
    this.option1 = option1;
    this.linkto1 = linkto1;
    this.option2 = option2;
    this.linkto2 = linkto2;
    this.option3 = option3;
    this.linkto3 = linkto3;
    this.option4 = option4;
    this.linkto4 = linkto4;
  }
}

/*Objects*/

const message1 = new message("lp pasion por el derecho", "#");
const message2 = new message("contactanos para mas informacion", "#");
const message3 = new message("llamanos o escribenos", "#");

const socialLink1 = new socialLink(
  "Facebook",
  "https://www.facebook.com/lpderecho",
  `<svg
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="currentColor"
       class="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook"
     >
       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
       <path
         d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1  a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z"
       />
  </svg>`
);
const socialLink2 = new socialLink(
  "Whatsapp",
  "https://wa.me/939613209",
  `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path
                  d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
                />
              </svg>`
);
const socialLink3 = new socialLink(
  "Instagram",
  "https://www.instagram.com/lpderecho",
  `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
                />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>`
);
const socialLink4 = new socialLink(
  "TikTok",
  "https://www.tiktok.com/@editorial.lp",
  `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-brand-tiktok"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z"
                />
              </svg>`
);
const socialLink5 = new socialLink(
  "Youtube",
  "#",
  `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                />
              </svg>`
);

const navOption1 = new navOption("Penal", "#", "penal");
const navOption2 = new navOption("Civil", "#", "civil");
const navOption3 = new navOption("Familia", "#", "familia");
const navOption4 = new navOption("Administrativo", "#", "administrativo");
const navOption5 = new navOption("Constitucional", "#", "constitucional");

const footerOption1 = new footerOption(
  "Servicio al cliente",
  "Opiniones de clientes",
  "#",
  "Preguntas Frecuentes",
  "#",
  "Cambios y Devoluciones",
  "#",
  "Política de Privacidad",
  "#"
);

const footerOption2 = new footerOption(
  "Libros Juridicos",
  "Libros de Civil",
  "#",
  "Libros de Penal",
  "#",
  "Packs",
  "#",
  "",
  ""
);

/*Arrays*/

const arrayMessages = [message1, message2, message3];
const arraySocialLinks = [
  socialLink1,
  socialLink2,
  socialLink3,
  socialLink4,
  socialLink5,
];
const arrayNavOptions = [
  navOption1,
  navOption2,
  navOption3,
  navOption4,
  navOption5,
];

const arrayFooterOptions = [footerOption1, footerOption2];

/*Functions */
/**Creators **/
function createMessage(message) {
  return `
<a class="message" href="${message.linkto}">${message.text}</a>
`;
}

function createSocialLink(socialLink) {
  return `
<li id="${socialLink.name}" class="header-li"><a href="${socialLink.linkto}">${socialLink.svg}</a></li>
`;
}

function createNavOption(option) {
  return `
<li class="nav-option"><a class="nav-link" href="${option.linkto}" data-section="${option.section}" >${option.text}</a></li>
`;
}

function createFooterOption(option) {
  return `
<div class="footer-section">
          <h4 class="footer-title">${option.title}</h4>
          <ul class="footer-options">
            <li><a class="footer-option" href="${option.linkto1}">${
    option.option1
  }</a></li>
            <li><a class="footer-option" href="${option.linkto2}">${
    option.option2
  }</a></li>
            <li>
              <a class="footer-option" href="${option.linkto3}">${
    option.option3
  }</a>
            </li>
             ${
               option.option4 && option.linkto4
                 ? `<li><a class="footer-option" href="${option.linkto4}">${option.option4}</a></li>`
                 : ""
             }
          </ul>
        </div>`;
}

/**Function**/

/***Template***/
function template(array, creater) {
  let template = "";
  array.forEach((item) => {
    template += creater(item);
  });
  return template;
}

function printMessage(array, creator) {
  return `<div class="messages">
            ${template(array, creator)}
        </div>`;
}

function printHeader() {
  return `
  <a href="./index.html">
          <img class="header-logo" src="./assets/logolp.webp" alt="Logo Lp" />
  </a>
  <form class="header-search">
          <input
            class="search-input"
            type="text"
            placeholder="Buscar"
            id="search"
            oninput="captureText(event)"
          />
  </form>
  <ul class="social-links"></ul>
  `;
}

function printNav(array, creator) {
  return `<nav class="nav">
          <ul class="nav-options">
            ${template(array, creator)}
          </ul>
  </nav> `;
}

function printFooter(array, creator) {
  return `
  ${template(array, creator)}
  <div class="footer-section">
          <h4 class="footer-title">¿Consultas?</h4>
          <a class="footer-option" href="tel:+51997743461">+51 997 743 461</a>
          <h4 class="footer-title">Síguenos en</h4>
          <ul class="social-links"></ul>
  </div>
  `;
}

/*Prints */

messageContainer.innerHTML = printMessage(arrayMessages, createMessage);
headerContainer.innerHTML = printHeader();
footerContainer.innerHTML = printFooter(arrayFooterOptions, createFooterOption);
document.querySelectorAll(".social-links").forEach((container) => {
  container.innerHTML = template(arraySocialLinks, createSocialLink);
});
navContainer.innerHTML = printNav(arrayNavOptions, createNavOption);

// FILTER NAVfunction filterBySection(section) {
