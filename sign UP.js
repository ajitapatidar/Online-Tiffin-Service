function validateform() {
  let Username = document.getElementById("user").value;
  let Password = document.getElementById("pass").value;
  let Email = document.getElementById("mail").value;

  if (!Username && !Email && !Password) {
    alert("Username, Email and Password is required");
    return;
  } else if (!Username) {
    alert("Username is required");
    return;
  } else if (!Email) {
    alert("Email is required");
    return;
  } else if (!Password) {
    alert("Password is required");
    return;
  } else {
    if (Username.length < 3 || Password.length < 6) {
      alert(
        "Username must be atlaest 3 characters and Password should be atlaest 6 characters"
      );
    } else {
      localStorage.setItem("registeredUsername", Username);
      localStorage.setItem("registeredEmail", Email);
      localStorage.setItem("registeredPassword", Password);

      alert("Registration Successful!!");
      document.getElementById("form1").reset();
    }
  }
}
function logout() {
  // Remove login state
  localStorage.removeItem("is_logged_in");
  alert("You have logged out successfully.");
  window.location.href = "Dashboard.html"; // Redirect to login page
}
