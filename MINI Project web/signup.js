document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;
        const firstName = document.getElementById("fn").value.trim();
        const lastName = document.getElementById("ln").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("num").value.trim();
        const address = document.getElementById("add").value.trim();
        const education = document.getElementById("education").value;
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked');

        if (!firstName || !lastName || !email || !phone || !address || !dob || !gender || !education) {
            alert("Please fill in all required fields.");
            isValid = false;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Phone number must be 10 digits.");
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });
});
