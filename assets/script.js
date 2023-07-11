function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./avatar-light.png")
  } else {
    img.setAttribute("src", "./avatar.png")
  }

  // IF e ELSE funcionando no codigo

  // if (html.classList.contains('light')) {
  //  html.classList.remove('light')
  // } else {
  //  html.classList.add('light')
  //}
}