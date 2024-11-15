function Validateloginform() {
  let Username = document.getElementById("user").value;
  let Password = document.getElementById("Pass").value;

  if (!Username && !Password) {
    alert("Username and Password is required");
    return;
  } else if (!Username) {
    alert("Username is required");
    return;
  } else if (!Password) {
    alert("Password is required");
    return;
  } else {
    let registeredUsername = localStorage.getItem("registeredUsername");
    let registeredPassword = localStorage.getItem("registeredPassword");

    if (Username === registeredUsername && Password === registeredPassword) {
      alert("Login Successfully!!");
      document.getElementById("form2").reset();
      localStorage.setItem("is_logged_in", "true");
      window.location.href = "index.html";
    } else {
      alert("Username or Password is not correct");
    }
  }
}

function logout() {
  // Remove login state
  localStorage.removeItem("is_logged_in");
  alert("You have logged out successfully.");
  window.location.href = "Dashboard.html"; // Redirect to login page
}
