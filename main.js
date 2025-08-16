const form = document.getElementById("form-contas");
let formEValido = false;

function validaConta(num1, num2) {
    return num2 > num1; // true se o segundo for maior
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const primeiroNumero = document.getElementById("numero-1");
    const segundoNumero = document.getElementById("numero-2");

    const num1 = parseFloat(primeiroNumero.value);
    const num2 = parseFloat(segundoNumero.value);

    const mensagemSucesso = `
        O primeiro número: <b>${num1}</b> <br>
        O segundo número: <b>${num2}</b> <br>
        ✅ O segundo número é maior que o primeiro!
    `;

    const containerMensagemSucesso = document.querySelector('.success-message');
    const containerMensagemErro = document.querySelector('.error-message');

    containerMensagemSucesso.classList.remove("show");
    containerMensagemErro.classList.remove("show");
    primeiroNumero.classList.remove("error");

    formEValido = validaConta(num1, num2);

    if (formEValido) {
        console.log("O segundo número é maior que o primeiro.");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.classList.add("show");
    } else if (num2 === num1) {
        console.log("Os números são iguais.");
        containerMensagemErro.innerText = "⚠️ Os números são iguais.";
        containerMensagemErro.classList.add("show");
        primeiroNumero.classList.add("error");
    } else {
        console.log("O segundo número não é maior que o primeiro.");
        containerMensagemErro.innerText = "❌ O segundo número não é maior que o primeiro.";
        containerMensagemErro.classList.add("show");
        primeiroNumero.classList.add("error");
    }
});

// 👇 Esconde erro automaticamente quando o usuário digitar de novo
document.getElementById("numero-1").addEventListener("input", () => {
    document.querySelector('.error-message').classList.remove("show");
    document.getElementById("numero-1").classList.remove("error");
});
document.getElementById("numero-2").addEventListener("input", () => {
    document.querySelector('.error-message').classList.remove("show");
});