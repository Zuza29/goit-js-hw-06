const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", (event) => {
    const dataLength = inputElement.getAttribute("data-length");

    const currentLength = event.target.value.length && event.target.value.length.toString();

    if (dataLength === currentLength) {
        inputElement.classList.add("valid");
        if (inputElement.classList.contains("invalid")) {
            inputElement.classList.remove("invalid");
        };
    } else {
        inputElement.classList.add("invalid");
        if (inputElement.classList.contains("valid")) {
            inputElement.classList.remove("valid");
        };
    };
});