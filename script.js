function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("golden")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("golden")) {
    //se tiver no modo light mode, adicionar a img light
    img.setAttribute(
      "src",
      "./assets/logonubiasemijoias.webp",
      "alt =A imagem retrada a letra N S em dourado com o fundo preto.",
    )
  } else {
    //se tiver, no modo  normal, manter a imagem normal
    img.setAttribute("src", "./assets/logonubiasemijoias.webp")
  }
}
