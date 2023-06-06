const firstNameElement = document.getElementById("firstname")
const lastNameElement = document.getElementById("lastname")
const ageElement = document.getElementById("age")
const submitElement = document.getElementById("submit")
const valuesElement = document.getElementById("values")
const professionElement = document.getElementById("profession")

submitElement.addEventListener("click", function() {
    event.preventDefault()
    let firstNameValue = firstNameElement.value
    let lastNameValue = lastNameElement.value
    let ageValue = ageElement.value
    let professionValue = professionElement.value

    if (firstNameValue.length > 5) {
        valuesElement.innerHTML += `<div class="green>${firstNameValue}</div>`
    } else {
        valuesElement.innerHTML += `<div class="red">${firstNameValue}</div>`
    }

    valuesElement.innerHTML += `<div>${lastNameValue}</div>`

    valuesElement.innerHTML += `<div>${ageValue}</div>`

    if (professionValue === "IT") {
        valuesElement.innerHTML += `<div class="purple">${professionValue}</div>`
    } else {
        valuesElement.innerHTML += `<div class="yellow">${professionValue}</div>`
    }

})
