/* first class functions
we can use functions as normal values 
*/
// example 
// ek variable mai hum function bhi pass kar sakte hai
// var a = true
// var b = null;
// var c = undefined
//  var d = function(){} ;
// upar ke sare chalenge
function abcd(a){
 a();
}

abcd(function(){console.log("hello");})

// important
/* arrays are not stored as arrays in javascript rather they are stored as objects
*/
var arr = [1,2,3];

arr = {
    0:1,
    1:2,
    2:3,
}

// how to delete key permanently from the object

obj = {
    name: "Harry kane",
    height: 190,
    country : "England",
    trophies : 1
}

delete obj.trophies;