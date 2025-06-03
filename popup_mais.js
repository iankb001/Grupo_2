document.addEventListener("DOMContentLoaded", function () {
  let botao_mais = document.querySelector(".add-btn");
  let popup_mais = document.getElementById("popup_mais");

  botao_mais.addEventListener("click", function (e) {
    e.preventDefault();
    popup_mais.classList.toggle("escondido");
  });
});
