const form = document.querySelector('form');

const submitForm = (event) => {
    // zapobiegamy reloadowi strony
    event.preventDefault();

    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;

    if (!emailValue || !passwordValue) {
        alert('All fields need to be filled')
    } else {
   
        const userData = {
            email: emailValue,
            password: passwordValue
        };

        console.log(userData);

        form.reset();
    }
}

// nasłuchujemy zdarzenia submit
form.addEventListener('submit', submitForm);