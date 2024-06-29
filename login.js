document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Add your authentication logic here.
        // For demonstration purposes, let's assume a simple check.
        if (username === "user" && password === "password") {
            alert("Login successful!");
        } else {
            alert("Login failed. Please check your credentials.");
        }
    });
});
