document.addEventListener("DOMContentLoaded", function () {
  let botoes = document.querySelectorAll(".botao-opcao");

  for (let botao of botoes) {
    botao.addEventListener("click", function () {
      let grupo = botao.dataset.grupo;
      let botoesDoGrupo = document.querySelectorAll('.botao-opcao[data-grupo="' + grupo + '"]');

      for (let b of botoesDoGrupo) {
        b.classList.remove("selecionada");
      }

      botao.classList.add("selecionada");
    });
  }
});