// var userAsk = prompt('Please Enter your Name')

// AdMIn
// ADMIN
//aDMin

// if(userAsk.toLowerCase() === 'admin') {
//     alert('Hello Admin')
// }
//admin -> ADMIN
// if(userAsk.toUpperCase() === 'ADMIN') {
//     alert('Hello Admin')
// }



// var fruits = 'An Apple a Day'
// // var fruits = ['Apple' , 'Orange']

// var extractWord = fruits.slice(3,8)
// alert(extractWord)


// var sentence = 'A Boy Go to his School Everyday Because Going School is Compulsory'

// console.log(sentence.indexOf('School'))
// console.log(sentence.lastIndexOf('School'))


// var enterProductId  = +prompt('Enter product Id')
// var cartArr = [1 ,12 ]


// if(cartArr.indexOf(enterProductId) !== -1) {
//     alert('Product is Already in the Cart')
// } else {
//     alert('Product Added to the cart sucessfully')
// }

// admin , Admin , they both are not equal , Case Sensative



// var firstName = 'John Doe'
// console.log(firstName.charAt(5))
var text = 'There is a Book related to the World War II , World War II';
console.log(text)
var updatedText = text.replaceAll("World War II", "the Second World War");  // Replaces All the Words
var updatedText = text.replace("World War II", "the Second World War");  // Just Replace the First Word 

console.log(updatedText)


var percentage =  65.9
alert(Math.round(percentage)) // .1 - .4 , Revert back to original Number  -> 65.1  -> 65
alert(Math.floor(percentage)) // Always Revert back to  original Number  
alert(Math.ceil(percentage)) // Always Increment in the  original Number  