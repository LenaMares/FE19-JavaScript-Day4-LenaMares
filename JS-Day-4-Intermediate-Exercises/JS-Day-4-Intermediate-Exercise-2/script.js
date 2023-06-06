const buttonElement = document.getElementById("btn")
const bodyElement = document.querySelector("body")

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return 'rgb(' + r + ',' + g + ',' + b + ')'
  }


buttonElement.addEventListener("click", function () {
    bodyElement.style.backgroundColor = randomRgbColor()
})