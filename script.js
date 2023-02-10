// JavaScript to handle the form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Validate the form data
    if (!name || !email || !message) {
      alert("Please fill out all fields");
      return;
    }

    // Submit the form data to the server
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/send-message", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ name: name, email: email, message: message }));

    // Show a success message
    alert("Message sent successfully");
  });
