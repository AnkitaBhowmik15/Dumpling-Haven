// Login page (login.html)
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Extract username and password from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Make a POST request to the login endpoint
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      // Handle response from the server (e.g., redirect on success)
      if (data.success) {
        window.location.href = "/dashboard"; // Redirect to dashboard on successful login
      } else {
        document.getElementById("message").textContent = "Invalid username or password";
      }
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("message").textContent = "An error occurred. Please try again later.";
    });
    window.location.href = "home.html";
    app.post("/login", (req, res) => {
        const { username, password } = req.body;}
});

