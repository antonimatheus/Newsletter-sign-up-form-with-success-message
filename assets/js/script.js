var emailField = document.getElementById('iemail');
var emailLabel = document.getElementById('ilabel');
var emailError = document.getElementById('required');
var submitButton = document.getElementById('submit');

function validateEmail() {
    emailField.style.background = 'rgba(255, 0, 0, 0.1)';

    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.style.display = 'inline-block';
        emailField.style.borderColor = 'red';
        return false;
    } else {
        emailField.style.background = 'rgba(0, 255, 0, 0.1)';
    emailField.style.borderColor = 'green';
    emailError.style.display = 'none';
    return true;
    }
}

var btn = document.querySelector("#submit");

btn.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    var text = document.querySelector("#iemail").value;
    localStorage.setItem('valueText', text);
    submitForm(); // Chama a função submitForm
});

function submitForm() {
    if (validateEmail()) {
        window.location.href = 'subscribing/subscribing.html';
    } else {
        return false;
    }
}


/*let yourEmail = document.querySelector("#yourEmail")
const confirmation = document.querySelector("#confirmation")

if (confirmation) {
    window.alert('oioioi')
}*/
