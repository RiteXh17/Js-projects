//generate a random color

const Random_color = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
    
}   
var intervalID=''

const changing_start = function(){
  if(!intervalID){
    intervalID= setInterval(changeColor,1000)
  }
   
     function changeColor(){
        document.body.style.backgroundColor= Random_color();
     }
    document.querySelector('#stop').style.cursor = "pointer"
    document.querySelector('#stop').style.opacity = "1"
    document.querySelector('#start').style.cursor = "not-allowed"
    document.querySelector('#start').style.opacity = "0.5"


}

const changing_stop = function(){
    clearInterval(intervalID)
    intervalID=null;
    document.querySelector('#start').style.cursor = "pointer"
    document.querySelector('#start').style.opacity = "1"
      document.querySelector('#stop').style.cursor = "not-allowed"
    document.querySelector('#stop').style.opacity = "0.5"

     
}

document.querySelector('#start').addEventListener('click', changing_start)
document.querySelector('#stop').addEventListener('click',changing_stop)

