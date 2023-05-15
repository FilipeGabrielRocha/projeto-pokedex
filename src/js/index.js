document.querySelector("#botao-alterar-tema").addEventListener("click", () => {
  if (document.querySelector("body").classList.contains("modo-noturno")) {
    document.querySelector("body").classList.remove("modo-noturno");
    document.querySelector(".imagem-botao").setAttribute("src", "src/images/sun.png");
  } else {
    document.querySelector("body").classList.add("modo-noturno");
    document.querySelector(".imagem-botao").setAttribute("src", "src/images/moon.png");
  }
});
