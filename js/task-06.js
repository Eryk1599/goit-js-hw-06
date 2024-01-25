const validationInput = document.getElementById("validation-input");
validationInput.addEventListener("blur", () => {
    const appropriateLength = parseInt(
        validationInput.getAttribute("data-length")
    );
    const inputValue = validationInput.value;
    if (inputValue.length === appropriateLength) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
    }
});
