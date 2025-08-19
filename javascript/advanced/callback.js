// callback functions
/* jab bhi hum kuch aisa code likhte hai jisme humein pata na ho ki kb tak complete hoga 
toh hum call back function ka use karte hai taaki uske completion ka idea de sake 

for ex : a button which fetches a photo from facebook , so nobody knows ki usse kitna time lagega fetch karne mai 
hence hum is case mai fallback function ka use karenge
 */
// ex
setTimeout(function(){
console.log("10 second baad chalao"); // part of async js

}, 10000) // time is in millisecond