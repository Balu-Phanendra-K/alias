document.addEventListener("DOMContentLoaded", function () {

    // ==================================
    // CONFIGURATION: FOUR TIME PASSWORDS
    // ==================================

    const passwords = [
        {
            start: 0,
            end: 6,
            password: "DAWN@123",
            label: "Midnight – Early Morning"
        },
        {
            start: 6,
            end: 12,
            password: "MORNING@456",
            label: "Morning"
        },
        {
            start: 12,
            end: 18,
            password: "AFTERNOON@789",
            label: "Afternoon"
        },
        {
            start: 18,
            end: 24,
            password: "EVENING@321",
            label: "Evening – Night"
        }
    ];

    // ==================================
    // ELEMENTS
    // ==================================

    const passwordScreen = document.getElementById("passwordScreen");
    const appContent = document.getElementById("appContent");
    const passwordInput = document.getElementById("accessPassword");
    const loginButton = document.getElementById("loginButton");
    const errorMessage = document.getElementById("errorMessage");
    const timePeriod = document.getElementById("timePeriod");
    const togglePassword = document.getElementById("togglePassword");

    // ==================================
    // GET CURRENT TIME PERIOD
    // ==================================

    function getCurrentPeriod() {

        const currentHour = new Date().getHours();

        return passwords.find(period =>
            currentHour >= period.start &&
            currentHour < period.end
        );

    }

    const activePeriod = getCurrentPeriod();

    timePeriod.textContent = activePeriod.label;

    // ==================================
    // LOAD WEBSITE SCRIPTS AFTER LOGIN
    // ==================================

    function loadScript(src) {

        return new Promise((resolve, reject) => {

            const script = document.createElement("script");

            script.src = src;

            script.onload = resolve;
            script.onerror = reject;

            document.body.appendChild(script);

        });

    }

    async function unlockWebsite() {

        const enteredPassword = passwordInput.value;

        if (enteredPassword === activePeriod.password) {

            errorMessage.textContent = "";

            loginButton.disabled = true;
            loginButton.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Loading...';

            try {

                // Load your existing application scripts
                await loadScript("script.js");
                await loadScript("list.js");
                await loadScript("preview.js");

                passwordScreen.style.display = "none";
                appContent.style.display = "block";

            } catch (error) {

                errorMessage.textContent =
                    "Unable to load the application. Please refresh.";

                loginButton.disabled = false;
                loginButton.innerHTML =
                    '<i class="fas fa-unlock-alt"></i> Unlock Access';

            }

        } else {

            errorMessage.textContent =
                "Incorrect password. Please try again.";

            passwordInput.value = "";
            passwordInput.focus();

        }

    }

    // ==================================
    // LOGIN EVENTS
    // ==================================

    loginButton.addEventListener("click", unlockWebsite);

    passwordInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            unlockWebsite();
        }

    });

    // ==================================
    // SHOW / HIDE PASSWORD
    // ==================================

    togglePassword.addEventListener("click", function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            togglePassword.innerHTML =
                '<i class="fas fa-eye-slash"></i>';

        } else {

            passwordInput.type = "password";
            togglePassword.innerHTML =
                '<i class="fas fa-eye"></i>';

        }

    });

});
