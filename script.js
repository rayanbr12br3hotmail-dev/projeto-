function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver no modo light mode, adicionar a img light
    img.setAttribute(
      "src",
      "./assets/avatar-light.png",
      "alt = Foto de mayk brito sorrindo, ele está utilizando um oculos PerformanceNavigationTiming, uma jaqueta de couro escura juntamente com uma blusa preta por baixo. E o fundo da imagem está na cor azul.",
    )
  } else {
    //se tiver, no modo  normal, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
