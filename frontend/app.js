const API_URL = "https://login-system-db.onrender.com";

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegisterBtn = document.getElementById("showRegister");

const messageEl = document.getElementById("message");
const registerMessageEl = document.getElementById("registerMessage");

// Switch to register form view
if (showRegisterBtn) {
  showRegisterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  });
}

// Handle Registration
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    registerMessageEl.textContent = "Processing...";
    registerMessageEl.style.color = "black";

    const name = document.getElementById("name").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    try {
      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        registerMessageEl.style.color = "green";
        registerMessageEl.textContent = "Registration successful! You can now log in.";
        setTimeout(() => {
          registerForm.classList.add("hidden");
          loginForm.classList.remove("hidden");
        }, 2000);
      } else {
        registerMessageEl.style.color = "red";
        registerMessageEl.textContent = data.message || "Registration failed.";
      }
    } catch (error) {
      registerMessageEl.style.color = "red";
      registerMessageEl.textContent = "Unable to connect to the server.";
    }
  });
}

// Handle Login
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    messageEl.textContent = "Processing...";
    messageEl.style.color = "black";

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "dashboard.html";
      } else {
        messageEl.style.color = "red";
        messageEl.textContent = data.message || "Login failed.";
      }
    } catch (error) {
      messageEl.style.color = "red";
      messageEl.textContent = "Unable to connect to the server.";
    }
  });
}