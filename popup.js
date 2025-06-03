document.addEventListener("DOMContentLoaded", function () {
  let botao_menu_hamburguer = document.querySelector(".menu-btn");
  let popup_hamburguer = document.getElementById("popup");
  let botao_fechar_hamburguer = document.querySelector(".close-popup");

  botao_menu_hamburguer.addEventListener("click", function (e) {
    e.preventDefault();
    popup_hamburguer.classList.remove("hidden");
  });

  botao_fechar_hamburguer.addEventListener("click", function () {
    popup_hamburguer.classList.add("hidden");
  });
});
