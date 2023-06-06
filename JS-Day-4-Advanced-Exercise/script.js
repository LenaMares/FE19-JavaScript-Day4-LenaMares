const messageElement = document.getElementById("message")
const circleElement = document.getElementById("circle")
const bodyElement = document.querySelector("body")

circleElement.addEventListener("mouseover", function () {
    messageElement.innerHTML = "You are in the circle."
})

circleElement.addEventListener("mouseleave", function () {
    messageElement.innerHTML = "You are outside the circle."
})

circleElement.addEventListener("click", function () {
    bodyElement.style.backgroundColor = "grey"
})

circleElement.addEventListener("dblclick", function () {
    bodyElement.style.backgroundColor = "blue"
})