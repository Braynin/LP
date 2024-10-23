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

function printer(array) {
  let template = "";
  array.forEach((option) => {
    template += createOption(option);
  });
  return template;
}
`<nav class="nav">
          <ul class="nav-options">
            ${optionsTemplate}
          </ul>
        </nav>`;
navContainer.innerHTML = printOptions(arrayOptions);
