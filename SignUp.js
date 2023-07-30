// signup.js

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signUpForm");
    const signupButton = document.getElementById("submitBtn");
  
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Perform form submission logic here...
      // For simplicity, we'll just redirect to the sign-in page
      window.location.href = "SignInForm.html";
    });
  
    signupButton.addEventListener("click", function () {
      // Redirect to the sign-in page
      window.location.href = "SignInForm.html";
    }); 
  });
  