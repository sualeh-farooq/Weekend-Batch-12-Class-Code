// Normal Function
// GreetUser();  // Hoisting 

// GetTheTime()


// function GreetUser() {
//   console.log("Hello John !");
// }



// var promptName = prompt('Enter your name')


// if(promptName === 'John') {
//     GreetUser()
// }

// Arrow Function

// var GetTheTime = () => {
//     console.log(new Date())
// };



// creation of function , parameters
function SumofTwo(a,b) {    
    var result = a + b
    return result
}


var resultFunc = SumofTwo(5,3)
console.log(resultFunc)
// console.log(SumofTwo(5,3)) // argument
// console.log(SumofTwo(15,30)) // argument