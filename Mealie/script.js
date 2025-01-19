function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const fieldType = field.getAttribute("type") === "password" ? "text" : "password";
    field.setAttribute("type", fieldType);

    const icon = field.nextElementSibling.querySelector("i");
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Logged in successfully!');
    $('#loginModal').modal('hide');
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Signed up successfully!');
    $('#signupModal').modal('hide');
});