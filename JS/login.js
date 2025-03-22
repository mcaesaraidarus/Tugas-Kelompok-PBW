document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");

    // Tambahkan elemen untuk pesan error
    const emailError = document.createElement("p");
    emailError.classList.add("error-message");
    emailInput.insertAdjacentElement("afterend", emailError);

    form.addEventListener("submit", function (event) {
        let valid = true; // Menentukan apakah form bisa dikirim

        // Reset tampilan error setiap kali tombol login ditekan
        emailInput.classList.remove("error");
        emailError.style.display = "none";

        const emailValue = emailInput.value.trim();

        // Cek apakah email diakhiri dengan @gmail.com
        if (!emailValue.endsWith("@gmail.com")) {
            emailError.textContent = "Email harus menggunakan domain @gmail.com!";
            emailError.style.display = "block";
            emailInput.classList.add("error");
            valid = false;
        }

        // Jika ada kesalahan, form tidak akan dikirim
        if (!valid) {
            event.preventDefault();
        }
    });
});