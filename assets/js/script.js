var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    var emailInput = document.getElementById('iemail');
    var email = emailInput.value;

    if (!email.includes("@")) {
        window.alert("Invalid email address. '@' symbol is missing.");
        emailInput.classList.add('required');
    } else {
        window.location.href = "subscribing.html";
    }
});
