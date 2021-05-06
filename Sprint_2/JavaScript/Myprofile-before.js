/* validate form information */

var uname1 = document.forms["log-in-form"]["uname"].value;
var pwrd1 = document.forms["log-in-form"]["password"].value;
var email = document.forms["sign-up-form"]["email"].value;
var uname2 = document.forms["sign-up-form"]["uname"].value;
var pwrd2 = document.forms["sign-up-form"]["password"].value;

function validateLogin() {
  if (uname1 == "" || pwrd1 == "") {
    alert("Please fill in all the required fields");
    return false;
  }
}

function validateSignup() {
  if (email == "" || uname2 == "" || pwrd2 == "") {
    alert("Please fill in all the required fields");
    return false;
  }
}
