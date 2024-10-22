const dig_clock = document.querySelector("#clock")



setInterval(function(){
    let date = new Date();
    dig_clock.innerHTML=date.toLocaleTimeString()
}, 1000)