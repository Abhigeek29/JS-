//  var let const 

//  var is function scoped --> var pure func mai kahi bhi use hosakta hai 
function abcd(){
    for(var i = 0 ; i<12;i++){
        console.log(i);
    }
    console.log(i)  // baaki programming languages mai yeh error dega but yaha par yeh output dega
    // because var function scoped hota hai 

}
// use var carefully 
// abcd();

// let is blocked scope 
// jis block mai hai wahi tak simit hai 
function abc(){
    for(let i = 0 ; i<12;i++){
        console.log(i);
    }
    console.log(i)  // let se declare kia hai toh yaha bhi error hi dega
    // because let function scoped hota hai 

}
abc();

// main differences in var and {let,const}
// Var is old es5 and other es6 so new
// 2nd var is function scoped and other two blocked scope 
// 3rd var attaches itself to window object while let and const dont 
// ->> what is window object ( to see type window on browser console ( ctrl+shift+j))
// Javascript mai kuch cheeze nhi hoti jo hum use karte hai , woh cheezo window object ke propertues hoti hai 

