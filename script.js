var registeredUsers = [];

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var isAlreadyRegistered = registeredUsers.some(function(user) {
        return user.username === username && user.email === email && user.password === password;
    });

    if (isAlreadyRegistered) {
        var errorMessage = "You have already registered with the same name, email, and password.";
        document.getElementById("message").textContent = errorMessage;
    } else {


        registeredUsers.push({ username: username, email: email, password: password });

        var successMessage = "You have Successfully registered " + username + " !!!";
        document.getElementById("message").textContent = successMessage;

        document.getElementById("registrationContainer").style.display = "none";
        document.getElementById("successContainer").style.display = "block";
    }
});
