function happen(){
    var check = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,9})+$/;
    var caps = /^[A-Z]/;
    var phoneno = /^\d{10}$/;
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var date = document.getElementById("date");
    var list = name.value.split(" ");
    var flag = 1;
    for(var i=0;i<list.length;i++){
        if(caps.test(list[i])){
            document.getElementById("get-name").innerHTML = "";
        }else{
            document.getElementById("get-name").innerHTML = "First letler of name should be capital";
            flag = 0;
        }
    }{
        if(check.test(email.value)){
            document.getElementById("get-email").innerHTML = "";
        }else{
            document.getElementById("get-email").innerHTML = "Email is not in format";
            flag = 0;
        }
    }{
        if(phoneno.test(phone.value)){
            document.getElementById("get-phone").innerHTML = "";
        }else{
            document.getElementById("get-phone").innerHTML = "Invalid Phone Number";
            flag = 0;
        }
    }
    if(flag==1){
        alert("Submitted Succesfully");
    }
}