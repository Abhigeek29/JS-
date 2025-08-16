/* first class functions
we can use functions as normal values 
*/
// example
function abcd(a){
 a();
}

abcd(function(){console.log("hello");})