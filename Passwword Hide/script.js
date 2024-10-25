let eyeClose = document.getElementById("eyeClose")
let password = document.getElementById("password")

eyeClose.onclick = function (){
    if(password.type=="password"){
        
        password.type= "text"
        eyeClose.src = "eye-open.png"
    } else{
        password.type="password"
        eyeClose.src = "eye-close.png"


    }
}