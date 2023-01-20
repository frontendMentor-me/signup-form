document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();

    let inputForm = document.querySelectorAll(".inputForm")
    let divErrors = document.querySelectorAll(".errorText")
    let iconErrors = document.querySelectorAll(".iconError")

    const data = Object.fromEntries(
        new FormData(e.target)
    )
    let errors = []
    let alerts = [
        "First Name cannot be empty",
        "Last Name cannot be empty",
        "Looks like this is not an email",
        "Password cannot be empty"
    ]
    Object.entries(data).forEach((keys, pos) => {
        errors.push({ error: keys[0], text: alerts[pos] })
    })

    let cantErrors = 0;
    divErrors.forEach((divError, pos) => {
        divError.innerHTML = (inputForm[pos].value.length === 0) ? errors[pos].text : ""
        divError.style.display = (inputForm[pos].value.length === 0) ? "flex" : "none"
        iconErrors[pos].style.display = (inputForm[pos].value.length === 0) ? "flex" : "none"

        if (divError.style.display === "none") {
            cantErrors++;
        }
        if (cantErrors === 4) {
            alert("Correo enviado correctamente!")
        }
    })

})