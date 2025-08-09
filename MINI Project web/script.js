document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all fields.");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      alert("Thank you, " + name + "! Your message has been sent successfully.");
      form.reset();
    });
  
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  