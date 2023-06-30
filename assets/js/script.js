var emailField = document.getElementById('iemail');
var emailLabel = document.getElementById('ilabel');
var emailError = document.getElementById('required');
var submitButton = document.getElementById('submit');

function validateEmail() {
    emailField.style.background = 'rgba(255, 0, 0, 0.2)';

    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailField.style.borderColor = 'red';
        emailError.style.display = 'inline';
        return false;
    }

    emailError.innerHTML = "";
    emailField.style.background = 'rgba(0, 255, 0, 0.2)';
    emailField.style.borderColor = 'green';
    emailError.style.display = 'none';
    return true;
}

function submit() {
    if (validateEmail()) {
        window.location.href = 'subscribing/subscribing.html';
    } else {
        return false;
    }
}
