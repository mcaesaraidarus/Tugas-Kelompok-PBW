document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    // Tambahkan elemen untuk pesan error
    const emailError = document.createElement("p");
    emailError.classList.add("error-message");
    emailInput.insertAdjacentElement("afterend", emailError);

    const passwordError = document.createElement("p");
    passwordError.classList.add("error-message");
    confirmPasswordInput.insertAdjacentElement("afterend", passwordError);

    form.addEventListener("submit", function (event) {
        let valid = true; // Menentukan apakah form bisa dikirim

        // Reset tampilan input setiap kali submit ditekan
        emailInput.classList.remove("error");
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("error");
        emailError.style.display = "none";
        passwordError.style.display = "none";

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        // Cek apakah email diakhiri dengan @gmail.com
        if (!emailValue.endsWith("@gmail.com")) {
            emailError.textContent = "Email harus menggunakan domain @gmail.com!";
            emailError.style.display = "block";
            emailInput.classList.add("error");
            valid = false;
        }

        // Cek apakah password dan konfirmasi password cocok
        if (passwordValue !== confirmPasswordValue) {
            passwordError.textContent = "Password dan Konfirmasi Password harus sama!";
            passwordError.style.display = "block";
            passwordInput.classList.add("error");
            confirmPasswordInput.classList.add("error");
            valid = false;
        }

        // Jika ada kesalahan, form tidak akan dikirim
        if (!valid) {
            event.preventDefault();
        }
    });
});