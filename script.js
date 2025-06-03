document.addEventListener("DOMContentLoaded", function () {
  let botaoClaro = document.querySelector(".mode.light");
  let botaoEscuro = document.querySelector(".mode.dark");

  botaoClaro.addEventListener("click", function () {
    document.body.style.background = "#f0e9de";
    document.body.style.color = "#000";
  });

  botaoEscuro.addEventListener("click", function () {
    document.body.style.background = "#2b2b2b";
    document.body.style.color = "#fff";
  });

  let dias = document.querySelectorAll(".day");

  for (let dia of dias) {
    dia.addEventListener("click", function () {
      for (let outro of dias) {
        outro.classList.remove("active");
      }
      dia.classList.add("active");
    });
  }
});
