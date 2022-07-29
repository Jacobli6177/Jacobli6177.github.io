function myFunction(item){
    if (item == "cp"){
        document.body.style.backgroundImage="url('cp.png')";
    }else if (item == "vp"){
        document.body.style.backgroundImage="url('vp.png')";
    }else if (item == "bp"){
        document.body.style.backgroundImage="url('bp.png')";
    }else if (item == "hp"){
        document.body.style.backgroundImage="url('hp.png')";
    }else if (item == "bbq"){
        document.body.style.backgroundImage="url('bbq.png')";
    }else if (item == "pepp"){
        document.body.style.backgroundImage="url('pepp.png')";
    }else if (item == "map"){
        document.body.style.backgroundImage="url('map.png')";
    }else if (item == "sp"){
        document.body.style.backgroundImage="url('sp.png')";
    }else if (item == "twp"){
        document.body.style.backgroundImage="url('twp.png')";
    }else if (item == "mp"){
        document.body.style.backgroundImage="url('mp.png')";
    }else{
        document.body.style.backgroundImage="#000000";
    }
    
}
var pizzaData = {
    cp{
        ingredients: 'mozzarella basil, tomatoes'
    },
    vp{
        ingredients: 'roasted red peppers, baby spinach, onions, mushroom, tomatoe black olives, broccoli.'
    },
    pepp{
        ingredients:'pepperoni mixed of beef and pork that has been cured with paprika and chili powder with tomatoes
    },
    mp{
        ingredients: 'home made thin crust pizza, meat : bacon, ham pepperoni and hot sausage'
    },
    map{
        ingredients: 'simple pizza hailing from naples, a bubbly crust, crushed San Marzanotomato sauce, fresh mozzarella, basil, a driizle of olive oil and sprinkle of salt'
    },
    hp{
        ingredients: 'pizza sauce, cheese, cooked ham, pinapple, homemade pizza crust'
    },
    bbq{
        ingredients: '12inch pre baked pizza crust, spicy bbq sauce, 2 skinless bonless chicken breast, red onion, cheese, fresh cilantro'
    },
    bp{
        ingredients: 'sauced chicken, torn mozzarella, blue cheese, red onion'

    },
    sp{
        ingredients: 'classic marinara sauce, pepperoni, seasoned pork,beef,fresh mushroom fresh green bell peppers and fresh red onions'
    },
    twp{
        ingredients: 'pepperoni, julienne- cut canadian bacon, spicy italian sausage, fresh-cut onions, crisp green peppers, mushroom, ripe black olives real cheese from mozzarella'
    },

}
document.getElementById('pizza-ingredient').onchange = function(){
    var selected = this.value;
    document.getElementById('info-ingredients').textContent=pizzaData[this.value].ingredients;
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

    function myNewFunction(sel){
        alert(sel.option[sel.selelctedIndex].text);
    }

    document.getElementById('pizza-type').onchange=function(){
        var selected = this.value;
        document.getElementById('info-pic').src = 'img1/'selected+'.png';
        document.getElementById('ingredients').textContent = pizzaData[this.value].name;
    }
    