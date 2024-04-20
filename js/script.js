const botaoCalcular = document.querySelector("#calculate");
const result = document.querySelector("#result");

function mostrarIdade() {
  const dataNascimento = document.querySelector("#birthday").value;
  const anoNascimento = new Date(dataNascimento).getFullYear();
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNascimento;

  if (anoNascimento === "" || isNaN(anoNascimento)) {
    window.alert("Você não escolheu o ano de seu nascimento");
    result.innerHTML = "";
  } else {
    result.innerHTML = `Sua idade é ${idade} anos`;
  }
}

botaoCalcular.addEventListener("click", mostrarIdade);
