/*Contenedores*/
const navContainer = document.getElementById("nav-container");

/*Clases-Arrays*/
class option {
  constructor(text, linkto) {
    this.text = text;
    this.linkto = linkto;
  }
}

const option1 = new option("Penal", "#");
const option2 = new option("Civil", "#");
const option3 = new option("Familia", "#");
const option4 = new option("Administrativo", "#");

const arrayOptions = [option1, option2, option3, option4];

class message {
  constructor(text, linkto) {
    this.text = text;
    this.linkto = linkto;
  }
}

const message1 = new message("lp pasion por el derecho", "#");
const message2 = new message("contactanos para mas informacion", "#");
const message3 = new message("llamanos o escribenos", "#");

const arrayMessages = [message1, message2, message3];

/*Functions */
function createMessage(message) {
  return `
<a class="message" href="${message.linkto}">${message.text}</a>
`;
}

function createOption(option) {
  return `
<li class="nav-option"><a class="nav-link" href="${option.linkto}">${option.text}</a></li>
`;
}

function template(array, creater) {
  let template = "";
  array.forEach((item) => {
    template += creater(item);
  });
  return template;
}

function printe(array, creater) {
  return;
  `<nav class="nav">
          <ul class="nav-options">
            ${template(array, creater)}
          </ul>
        </nav>`;
}

/*Printers */
navContainer.innerHTML = printer(arrayOptions, createOption);
navContainer.innerHTML = printer(arrayMessages, createMessage);
