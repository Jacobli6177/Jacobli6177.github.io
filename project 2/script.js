function myFunction(item){
    if (item == "cp"){
        document.body.style.backgroundImage="url('cheesepizza.png')";
    }else if (item == "vp"){
        document.body.style.backgroundImage="url('veggiepizza.png')";
    }else if (item == "bp"){
        document.body.style.backgroundImage="url('buffalopizza.png')";
    }else if (item == "hp"){
        document.body.style.backgroundImage="url('hawaiianpizza.png')";
    }else if (item == "bbq"){
        document.body.style.backgroundImage="url('BBQchickenpizza.png')";
    }else if (item == "pepp"){
        document.body.style.backgroundImage="url('pepperonipizza.png')";
    }else if (item == "map"){
        document.body.style.backgroundImage="url('margheritapizza.png')";
    }else if (item == "sp"){
        document.body.style.backgroundImage="url('supremepizza.png')";
    }else if (item == "twp"){
        document.body.style.backgroundImage="url('theworkspizza.png')";
    }else if (item == "mp"){
        document.body.style.backgroundImage="url('meatpizza.png')";
    }else{
        document.body.style.backgroundImage="#000000";
    }
    
}

quote = [ 
    'The average slice of pizza contains 12 grams of protein.',
    'Pizza can help you absorb the antioxidant Lycopene.',
    'Fresh veggies are one of the healthiest toppings!',
    'Thin-crust pizza offers a better-balanced meal.',
    'Pizza is a better breakfast option than some cereals' ,
    'Pizza crust made from whole wheat adds fiber to your meal.', 
    'Keep your diet on track with an occasional pizza.']
    var randomNumber = Math.floor(Math.random()*quote.length);
    document.getElementById('press-quote').textContent = '"' + quote[randomNumber].split( ' - ')[0]+ '” — ' + quote[randomNumber].split(' — ')[1];

    function validateForm(){
        var userName=document.userform.input_username.value;
        var userEmail=document.userform.input_useremail.value;
        var outName=document.getElementById('user_name');
        var outEmail= document.getElementById('user_email');
        var emailregex =/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
        var nameregex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
        outName.innerHTML = userName;
        outEmail.innerHTML = userEmail
        if ((userName == "" )|| (userEmail == "")){
            alert("All boxes must be filled out");
        }
        else if(userEmail.match(emailregex)){
            alert("Email is valid");
            return false;
        }
        else if(!userEmail.match(emailregex)){
            alert("Email is not valid")
            return false;
        }
        else if(!userName.match(phoneregex)){
            alert("Name is not valid");
        }
    }




    function submitForum(){
        var UserName=document.vol-form.fullname.value;
        var UserEmail=document.vol-form.email.value;
        var UserPhone=document.vol-form.phone.value
        var OutName=document.getElementById('full-name');
        var OutEmail= document.getElementById('email');
        var OutPhone= document.getElementById('phone');
        var emailRegex =/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
        var phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
        OutName.innerHTML = UserName;
        OutEmail.innerHTML = UserEmail;
        OutPhone.innerHTML = UserPhone;
        if ((UserName == "" )|| (UserEmail == "")|| (UserPhone =="") ){
            alert("All boxes must be filled out");
        }
        else if(UserEmail.match(emailRegex)){
            alert("Email is valid");
            return false;
        }
        else if(!UserEmail.match(emailRegex)){
            alert("Email is not valid")
            return false;
        }
        else if(UserPhone.match(phoneRegex)){
            alert("Phone number is not valid");
            return true;
        }else if (!UserPhone.match(phoneRegex)){
            alert("Phone number is not valid")
            return true
        }
    }

    