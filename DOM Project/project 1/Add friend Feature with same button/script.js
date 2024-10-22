var strange = document.querySelector("h5");
var page = document.querySelector("#page")
var about  =  document.getElementById("about")
var add_friend = document.querySelector("#add");
 
var flag = 0;
add_friend.addEventListener("click", function () {
    if (flag == 0) {


        add_friend.innerHTML = "Friends"
        strange.innerHTML = "Friends"
        strange.style.color = "green"
          
         about.style.position="absolute";
         about.style.left= "10px";
         about.style.display = "block"
         

         add_friend.style.right = "10px"
 
        flag = 1
    } else {
        strange.innerHTML = "Stranger"
        add_friend.innerHTML = "Add Friend"
        document.getElementById("about").style.display="none"
        strange.style.color = "red"
        add_friend.style.right = "100px"
  
        flag = 0
    }
})

 
     