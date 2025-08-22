var istatus = document.querySelector("h3")

var addfriend= document.querySelector("#ADD")
// from a single switch
// var flag = 0;
// addfriend.addEventListener("click",function(){
//     if(flag==0){
//         istatus.innerHTML = "Friend"
//         istatus.style.color="green"
//         addfriend.innerHTML = "Remove Friend ?"
//         flag =1;
//     }
//     else{
//         istatus.innerHTML = "Stranger"
//         istatus.style.color="goldenrod"
//         addfriend.innerHTML = "ADD FRIEND"
//         flag = 0;
//     }
// })

addfriend.addEventListener("click",function(){
    istatus.innerHTML = "Friend"
    istatus.style.color = "green"
})

var removefriend = document.querySelector("#remove")

removefriend.addEventListener("click",function(){
    istatus.innerHTML = "Strangers"
    istatus.style.color = "goldenrod"
})