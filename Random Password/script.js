const passwordBox = document.getElementById("password")
const length = 6
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbol = "@#$%^&*()_"
const mixchars = uppercase + lowercase + numbers + symbol
 

function generatePassword (){
    let password = ""
    password += uppercase[Math.floor(Math.random()* uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]


    while(length > password.length){
    password += mixchars[Math.floor(Math.random() * mixchars.length)]
        
    }
    
    passwordBox.value = password;

}


button.addEventListener("click",()=>{
     generatePassword()
})

function copyPassword(){
    passwordBox.select();
    document.execCommand("Copy")
}