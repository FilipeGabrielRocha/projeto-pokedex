document.querySelector("#botao-alterar-tema").addEventListener("click", () => {
  if (document.querySelector("body").classList.contains("modo-noturno")) {
    tirarClasse("body", "modo-noturno")
    mudarIcone(".imagem-botao", "src", "src/images/sun.png")
  } else {
    colocarClasse("body", "modo-noturno")
    mudarIcone(".imagem-botao", "src", "src/images/moon.png")
  }
});

function tirarClasse(item, classe) {
    document.querySelector(item).classList.remove(classe);
}

function colocarClasse(item, classe) {
    document.querySelector(item).classList.add(classe);
}

function mudarIcone(item, atributo, caminhoImagem) {
    document.querySelector(item).setAttribute(atributo, caminhoImagem);
}