const buttons =  document.querySelectorAll(".button");
const body = document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener('click',function(color){
        if(color.target.id==="grey"){
            body.style.backgroundColor = color.target.id
        }  
        if(color.target.id==="white"){
            body.style.backgroundColor = color.target.id
        }  
        if(color.target.id==="blue"){
            body.style.backgroundColor = color.target.id
        }  
        if(color.target.id==="yellow"){
            body.style.backgroundColor = color.target.id
        }  
        if(color.target.id==="purple"){
            body.style.backgroundColor = color.target.id
        }  
    })
})