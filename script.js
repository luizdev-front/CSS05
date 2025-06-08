const botao = document.getElementById("animarBotao");
const caixa = document.getElementById("caixaClick");

botao.addEventListener("click", () => {
  caixa.classList.add("animar");

  // Remove a classe após a animação para permitir múltiplos cliques
  setTimeout(() => {
    caixa.classList.remove("animar");
  }, 600);
});

