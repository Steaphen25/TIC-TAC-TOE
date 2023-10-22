var registeredEmails = [];
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if the email is already registered
    if (registeredEmails.includes(email)) {
        var errorMessage = "Email address is already registered. Please use a different email.";
        document.getElementById("message").textContent = errorMessage;
    } else {
        // Add the email to the list of registered emails
        registeredEmails.push(email);
        var successMessage = "You have Successfully registered " + username + " !!!";
        document.getElementById("message").textContent = successMessage;

        // Hide registration container and show success container
        document.getElementById("registrationContainer").style.display = "none";
        document.getElementById("successContainer").style.display = "block";
    }
});
