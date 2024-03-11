(function () {
  "use strict";

  var form = document.getElementById("form");

  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        alert("Please fill in all required fields.");
      } else {
        // Perform custom validation
        if (validateForm()) {
          // Simulate form submission
          setTimeout(function () {
            // Display success message
            showSuccessMessage();
            // Reset the form
            form.reset();
          }, 1000); 
        }
        alert("Submitted successfully. We will contact you soon.");
      }
      form.classList.add("was-validated");
    },
    false
  );
})();

function validateForm() {
  var form = document.getElementById("form");
  var email = form.elements["email"].value.trim();
  var phoneNumber = form.elements["phonenumber"].value.trim();

  // Check if email is empty
  if (email === "") {
    alert("Please enter your email address.");
    return false;
  }

  // Check if phone number is empty
  if (phoneNumber === "") {
    alert("Please enter your phone number.");
    return false;
  }

  // Additional validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (isNaN(phoneNumber)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  return true; // Validation passed
}

// Dynamically change submit button label based on screen size
window.addEventListener("resize", function () {
  var submitButton = document.getElementById("submitButton");
  if (window.innerWidth < 768) {
    submitButton.textContent = "Jetzt kontaktieren"; // Change label for mobile
  } else {
    submitButton.textContent = "Senden"; // Change label for desktop
  }
});

// Initial label change on page load
window.addEventListener("load", function () {
  var submitButton = document.getElementById("submitButton");
  if (window.innerWidth < 768) {
    submitButton.textContent = "Jetzt kontaktieren"; // Change label for mobile
  }
});