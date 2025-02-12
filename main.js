function validate(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm pass").value;
    var result = document.getElementById("result");
    

    if(user=="" && email=="" && pass=="" && confirm=="" ){
        result.innerHTML = "Enter your data ";
        return false;

    }else if (user.length<5 || user.length>16){
        result.innerHTML = "Enter 5-15 charcter in name ";
        return false;

    }else if (email.indexOf('@')==-1  || email.indexOf(".com ")==-1 ) {
        result.innerHTML =  "Enter vaild email ";
        return false; 

    }else if (pass.length<8){
        result.innerHTML = "Week password ";
        return false;
    }else if (pass != confirm ){
        result.innerHTML = "Matched password";
        return false ; 

    }




}