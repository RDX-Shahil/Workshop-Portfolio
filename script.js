function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");
    var isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Message validation
    if (message === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    } else {
        messageError.textContent = "";
    }

    return isValid;
}

function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

