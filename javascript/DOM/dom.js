// // 4 pillars of dom
// /* 1. selecting the element 
//     2. changing html
//     3. changing css
//     4. events listener
//  */

// // this part is for selecting the element
// var a = document.querySelector("h1")

// // this part is for selecting html
// a.innerHTML = "hey babe"

// console.log(a);


// // changing css 
// // .style likhna compulsory hai , chahe css ke file ka naam kuch bhi ho
// // a.style.background = "black"

// document.querySelector("body").style.backgroundColor = "pink" // changed the body in htm through js dom


// //event listener 
// a.addEventListener("click",function(){
//     alert("Hi babe")
//     a.innerHTML = "kaisi ho?"
// })
/*
document.getElementById
document.getElementsByClassName
*/

var bulb = document.querySelector("#bulb")
var bton = document.querySelector("#ON")
var btoff = document.querySelector("#off")

// this functions switches on and off the bulb using single button
var flag = 0;
bton.addEventListener("click",function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        bton.innerHTML = "OFF"
        flag = 1;
    }
    else{
        bulb.style.backgroundColor = "transparent"
        bton.innerHTML = "ON"
        flag = 0
    }
})

btoff.addEventListener("click",function(){
    bulb.style.backgroundColor = "white"
})

/*
difference between text content and innerhtml selector 
that text content mai jo bhi dalenge sab as a data jayega 

innerhtml is smart enough ki mai uske innerhtml ko chhedra hoo


for example : 
maanlete hai index.html mai ek div banaya with class box 
aur uske andar ek h1 tag store hai 

ab js file mai inn dono  mai difference dekhna 

var box = document.queryselector(".box")
box.innerhtml = "<h1>hello</h1>"   ---> toh isme jab main output dikhega woh sirf hello dikhega , h1 tags ko update kardega automatically

var box = document.queryselector(".box")
box.textcontent = "<h1>hello</h1>"  ---> isme pura <h1>hello</h1> yahi print hoga
*/