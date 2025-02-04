// Enable/Disable Login Button
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

usernameInput.addEventListener("input", toggleLoginButton);
passwordInput.addEventListener("input", toggleLoginButton);

function toggleLoginButton() {
  if (passwordInput.value.length >= 6 && usernameInput.value.trim() !== "") {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

loginButton.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission

  // Check if password meets the minimum length requirement
  if (passwordInput.value.length >= 6) {
    window.location.href = "2fa.html"; // Redirect to 2FA page
  }
});

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

document
  .querySelector(".trouble-login")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    setTimeout(() => {
      window.location.href = "2fa.html"; // Redirect after a short delay
    }, 200); // 200ms delay for a smooth transition
  });
