const API_URL = "https://login-system-db.onrender.com";

console.log("APP.JS LOADED");


const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegisterBtn = document.getElementById("showRegister");

const messageEl = document.getElementById("message");
const registerMessageEl = document.getElementById("registerMessage");


// ========================================
// SHOW REGISTER
// ========================================

if (showRegisterBtn) {

    showRegisterBtn.addEventListener("click", function (e) {

        e.preventDefault();

        document
            .getElementById("loginSection")
            .classList.add("hidden");

        registerForm.classList.remove("hidden");

    });

}


// ========================================
// REGISTER
// ========================================

if (registerForm) {

    registerForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        console.log("REGISTER CLICKED");

        registerMessageEl.textContent = "Processing...";
        registerMessageEl.style.color = "black";


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("regEmail").value.trim();

        const password =
            document.getElementById("regPassword").value;


        try {

            const response = await fetch(
                `${API_URL}/api/register`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password
                    })
                }
            );


            const data = await response.json();

            console.log("REGISTER RESPONSE:", data);


            if (response.ok) {

                registerMessageEl.style.color = "green";

                registerMessageEl.textContent =
                    "Registration successful! You can now log in.";


                setTimeout(function () {

                    registerForm.classList.add("hidden");

                    document
                        .getElementById("loginSection")
                        .classList.remove("hidden");

                    registerForm.reset();

                }, 1500);


            } else {

                registerMessageEl.style.color = "red";

                registerMessageEl.textContent =
                    data.message || "Registration failed.";

            }

        } catch (error) {

            console.error("REGISTER ERROR:", error);

            registerMessageEl.style.color = "red";

            registerMessageEl.textContent =
                "Unable to connect to the server.";

        }

    });

}


// ========================================
// LOGIN
// ========================================

if (loginForm) {

    loginForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        console.log("LOGIN BUTTON CLICKED");


        messageEl.textContent = "Processing...";
        messageEl.style.color = "black";


        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;


        try {

            console.log("SENDING LOGIN REQUEST");


            const response = await fetch(
                `${API_URL}/api/login`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );


            const data = await response.json();


            console.log(
                "LOGIN STATUS:",
                response.status
            );

            console.log(
                "LOGIN RESPONSE:",
                data
            );


            // ========================================
            // LOGIN SUCCESS
            // ========================================

            if (response.ok && data.token) {

                console.log("LOGIN SUCCESSFUL");

                // Save token
                localStorage.setItem(
                    "token",
                    data.token
                );


                messageEl.style.color = "green";

                messageEl.textContent =
                    "Login successful!";


                // ========================================
                // GO DIRECTLY TO YOUR LANDING PAGE
                // ========================================

                setTimeout(function () {

                    console.log(
                        "REDIRECTING TO DASHBOARD"
                    );

                    window.location.href =
                        "./dashboard.html";

                }, 500);


            } else {

                messageEl.style.color = "red";

                messageEl.textContent =
                    data.message || "Login failed.";

            }


        } catch (error) {

            console.error(
                "LOGIN ERROR:",
                error
            );

            messageEl.style.color = "red";

            messageEl.textContent =
                "Unable to connect to the server.";

        }

    });

}
