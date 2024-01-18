
// script.js
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    // Send data to the backend (e.g., using AJAX)
    // Use the server URL instead of 'file:///C:/submit'
    fetch('https://' + window.location.hostname + ':3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email }),
    })
    .then(response => response.json())
    .then(data => {
        // Display the result message on the web page
        document.getElementById("resultMessage").textContent = data.message;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }
  
  
  
  
  
