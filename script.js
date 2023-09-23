document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const signupMessage = document.getElementById("signup-message");

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Generate a random 16-byte access token (not secure, just for demonstration)
        const accessToken = Array.from({ length: 16 }, () => Math.floor(Math.random() * 256));
        
        // Store user data and access token in local storage
        const userData = {
            username: document.getElementById("username").value,
            email:  document.getElementById("email").value,
            password:  document.getElementById("password").value,
            accessToken: btoa(String.fromCharCode.apply(null, accessToken))
        };
        localStorage.setItem("user", JSON.stringify(userData));

        // Display success message and redirect to the profile page
        signupMessage.textContent = "Signup successful!";
        setTimeout(() => {
            window.location.href = "profile.html";
        }, 2000);
    });
});
