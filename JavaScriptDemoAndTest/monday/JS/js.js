function callDay(){
    document.getElementById("hello").innerHTML = getcallDay();
}

function getcallDay(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    console.info(hourNow);
    if(hourNow >18){
        greeting = 'Good Evening';
    }
    else if (hourNow >=12) {
        greeting = 'Good Afternoon';
    }
    else if (hourNow >0){
        greeting = 'Good Morning';
    }
    else{
        greeting = 'Welcome!';
    }
    console.info(greeting);
    return greeting;
}

callDay();