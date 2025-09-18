//variáveis que pegam os elementos do formulário
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let button = document.getElementById("button");

//botão padrão
function defaultButton() {
  button.disabled = false;
  button.style.backgroundColor = "#866583";
  button.style.cursor = "pointer";
  button.textContent = "Enviar";
}

//botão desativado
function disabledButton() {
  button.disabled = true;
  button.style.backgroundColor = "gray";
  button.style.cursor = "not-allowed";
  button.textContent = "Enviando...";
}

//inicializa com seu user ID
(function () {
  emailjs.init("jE4BtdhB9o7FC3qfI");
})();

//captura envio do formulário
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    disabledButton();

    emailjs
      .sendForm("service_6jdub7f", "template_7j911uf", this)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        name.value = "";
        email.value = "";
        message.value = "";
        defaultButton();
      })
      .catch((err) => {
        alert("Erro: " + JSON.stringify(err));
        defaultButton();
      });
  });
