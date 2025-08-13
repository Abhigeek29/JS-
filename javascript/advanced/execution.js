// execution context -- > 
/**
 * whenever we declare a function an imaginary container is made we stores the following 3 things in it 
 * 1. Variables
 * 2. any other functions inside that parent function
 * lexical environment -- function mai kya kya usable hai ya nhi woh batane ke liye 
 */
// Example
function abcd(){
    var a = 12;
    function def(){
        var b = 21;
    }
}

// function abcd ke call hote hi ek execution context bann gaya hoga 
// usme var a aur def function store hogaya hai but lexical environment var b jo function def ke andar hai usse store karne 
// nhi degi
