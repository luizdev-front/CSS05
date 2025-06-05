const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
  botao.classList.add('girar');

  botao.addEventListener('animationend', () => {
    botao.classList.remove('girar');
  }, { once: true });
});
