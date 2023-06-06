const gridElement = document.querySelector(".grid")

gridElement.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains('santa')) {
      target.style.opacity = 0
    }
})
