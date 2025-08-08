// primitive datatypes
// are always call by value 
//  string , number , boolean , null , undefined , symbol ,BigINt
// these are stored in stack memory

// Non primitive or reference type 
// memory mai inka reference direct allocate 
// these are stored in heap  - reference pass karte hai

// Arrays , objects, functions

// javascripts is a dynamically typed language 
//  types are defined at runtime

// Symbol is used to make elements unique 
const id = Symbol('123')
let anotherid = Symbol('123')
 
console.log(id===anotherid); // will give false output


// arrays 
const heroes = ["Shaktiman","Superman","Batman"]
// obj 
let myobj = {
    name : "Abhigyan",
    id : "091"
}

const myfunction = function(){
    console.log("hello world");
    
}
myfunction()
