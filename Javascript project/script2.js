function validateForm() {
    var userName = document.userform.input_username.value;
    var userEmail = document.userform.input_useremail.value;
    var outName = document.getElementById('user_name');
    var outEmail = document.getElementById('user_email');
    var emailregex = /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    var nameregex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    outName.innerHTML = userName;
    outEmail.innerHTML = userEmail
    if ((userName == "") || (userEmail == "")) {
      alert("All boxes must be filled out");
    }
    else if (userEmail.match(emailregex)) {
      alert("Email is valid");
      return false;
    }
    else if (!userEmail.match(emailregex)) {
      alert("Email is not valid")
      return false;
    }
    else if (!userName.match(phoneregex)) {
      alert("Name is not valid");
    }
  }