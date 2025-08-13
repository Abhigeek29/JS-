var a = [12,29]
// push pop shift and unshift
a.push(90);
console.log(a);
a.pop()
console.log(a);
a.unshift(10) // used for adding elements to the start of the array
console.log(a);
a.shift(10); // used for deleting elements from the start of the array
console.log(a);
// Splice - value konse index se hatani hai aur kitni 

a.splice(0,2); //Oth postion se hatani hai aur 2 ---> in this case khali kardi hai
console.log(a);


// /// object hai ek individual ki details ko hold karna

var a = {
    Name:"Tom cruise",
    age : 67,
    height : 172,
    jump : function(){}
}
