function aRequest() {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function() {
      document.getElementById("demo5").innerHTML = this.responseText
    }
    xhttp.open("Get", "sampleText.txt")
    xhttp.send()
  
  }
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
let image =document.getElementById('image');
let images = ['img.jpeg','img2.jpeg','img3.jpeg','img4.jpeg','img5.jpeg']
setInterval(function(){
    let random = Math.floor(Math.random() * 5);
    image.src = images[random];
}, 1500);
$(document).ready(function(){
  $("button").click(function(){
    $("body").css({"background-color": "lightpink", "font-size": "100%"});
    $("h1").css({"color": "blue"})
  });
});

const bar = '["Description", "Jacob Li","Contact"]'
const myList = JSON.parse(bar)
document.getElementById("desc").innerHTML = myList[0];
document.getElementById("rod").innerHTML = myList[1];
document.getElementById("ree").innerHTML = myList[2]

