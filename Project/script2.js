document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    var messageContainer = document.getElementById("messageContainer");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Display submission message
      var message = document.createElement("div");
      message.textContent = "Form submitted successfully!";
      messageContainer.appendChild(message);
  
      // Clear message after 3 seconds
      setTimeout(function() {
        messageContainer.removeChild(message);
      }, 3000);
  
      // Clear form inputs
      contactForm.reset();
    });
  });
  