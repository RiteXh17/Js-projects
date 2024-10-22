 var start = ""

 const interval_start = document.querySelector("#start").addEventListener('click',function (){
    start = setInterval(() => {
        console.log("ritesh")
    }, 1000);
    
 } )

 const stop = document.querySelector("#stop").addEventListener('click', function(){
    var stop = clearInterval(start)
 })