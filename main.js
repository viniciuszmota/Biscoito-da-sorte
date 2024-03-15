const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

screen1.querySelector("img").addEventListener("click", changeScreen)
screen2.querySelector("button").addEventListener("click", changeScreen)

function changeScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
