// Enable/Disable Login Button
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

usernameInput.addEventListener("input", toggleLoginButton);
passwordInput.addEventListener("input", toggleLoginButton);

function toggleLoginButton() {
  if (usernameInput.value && passwordInput.value) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

// Show/Hide Password
function togglePassword() {
  const passwordField = document.getElementById("password");
  const toggleText = document.querySelector(".toggle-password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleText.textContent = "Hide";
  } else {
    passwordField.type = "password";
    toggleText.textContent = "Show";
  }
}

// Form Submission with Error Handling
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Simulate incorrect credentials
  if (username !== "user" || password !== "pass") {
    loginForm.classList.add("shake");
    setTimeout(() => loginForm.classList.remove("shake"), 500);
    alert("Sorry, your password was incorrect. Please try again.");
  } else {
    alert("Login successful! Redirecting...");
    // Redirect to 2FA page
    window.location.href = "2fa.html";
  }
});
