// ARRAYS

// var citiesArr = ['Karachi' , 'ISB' , 'LAHORE' , 'MULTAN']

// // console.log(citiesArr[0])
// // console.log(citiesArr[1])
// // console.log(citiesArr[2])
// citiesArr[10] = 'Peshawar'
// console.log(citiesArr)

// var returnVal = citiesArr.pop()
// console.log(citiesArr)
// console.log(returnVal)
// var returnPush = citiesArr.push('Peshawar')
// console.log(citiesArr)
// console.log(returnPush)

// console.log(citiesArr)
// citiesArr.shift()
// console.log(citiesArr)
// citiesArr.unshift('Peshawar')
// console.log(citiesArr)
// Delete any element from any index
// Add Element at Any Index
// Update Element at Any Index
// citiesArr.splice(1, 3 )
// citiesArr.splice(1, 3 , 'ABC' , 'XYZ' , 'POP')
// var returnSplice = citiesArr.splice(2,0,'ABC')
// // console.log(returnSplice)
// var citiesArr = ['Karachi' , 'ISB' , 'LAHORE' , 'MULTAN' ,'Peshawar' , 'Sawat']
// console.log(citiesArr)
// var copyArr = citiesArr.slice(-2)
// console.log(copyArr)

// 0 < 10  === TRUE
// 1 < 10 === TRUE

// var userNumber = +prompt('Enter Number for Multiplication')
// var userLength = +prompt('Length of that Table')

// for(var i = 1; i <= userLength; i++) {
//     document.write(`${userNumber} x ${i} = ${userNumber*i} <br />`)
// }

// // for(var i = 1; i <= 10; i++) {
// //     console.log(i)
// // }

// var items = ["cake", "apple", "cookie", "chips"];
// //1000 -> 68
// var userItem = prompt("Enter the product name you want ?");
// var available = 'nahi';

// for (var i = 0; i < items.length; i++) {
//   // if(items[i] === userItem) {
//   //     document.write(`${userItem} is Available <br />`)
//   // } else {
//   //     document.
//   //     (`Sorry ! ${userItem} is Not Available <br />`)
//   // }

//   if (items[i] === userItem) {
//     available = 'han';
//     break;
//   }
// }

// if (available === 'han') {
//   document.write(`${userItem} is Available <br />`);
// } else {
//   document.write(`Sorry ! ${userItem} is Not Available <br />`)
// }

// var items = ["cake", "apple", "cookie", "chips"];
// var userItem = prompt("Enter the product name you want ?");

// for(var i = 0; i < items.length; i++)
// let score = 85;
// if (score >= 90) {
//     console.log("Grade A");
// } else if (score >= 80) {
//     console.log("Grade B");
// } else {
//     console.log("Grade C");
// }

// var items = ["cake", "apple", "cookie", "chips"];
// var returnSplice = items.splice(2,1,'mango')
// console.log(returnSplice)

// var userEmail = prompt("Enter your email");
// if (userEmail === "admin@gmail.com") {
//   var password = prompt("Enter your Password");
//   if (password === '123') {
//     var verified = false;
//     if (verified) {
//       alert("Succesful Login");
//     } else {
//       alert("Account is Not Verified");
//     }
//   } else {
//     alert("Incorrect Password");
//   }
//   //
// } else {
//   alert("Email is not Valid / Unavailable");
// }


// var arr = ["cake" , "pineapple", "Donut"]
// for( var i =0 ; i < arr.length ; i++){
//     if(arr[i] === "Donut"){
//         console.log("The item is avaialable in the list")
//     break;
//     }
//     else{
//         console.log("The item is not avaialable in the list")
//     }
// }