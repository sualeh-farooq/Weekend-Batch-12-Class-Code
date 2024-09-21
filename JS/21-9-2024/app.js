// // var a = 2
// // var b  = 1

// // var result  =  --a;
// // document.write(`The value of --a is ${result} <br /> <br />`)

// // a = 2
// // b  = 1
// // result = --a - --b;

// // document.write(`The value of --a - --b is ${result} <br /> <br />`)

// // a = 2
// // b  = 1
// // result = --a - --b + ++b;
// // document.write(`The value of --a - --b + ++b is ${result} <br /> <br />`)

// // a = 2
// // b  = 1
// // result = --a - --b + ++b + b--;

// // document.write(`The value of --a - --b + ++b + b-- is ${result} <br /> <br />`)

// //         alert(result)

// // var userName = prompt('Please Enter Your Name')
// // alert('Hello ' +  userName)

// // var userNumber = +prompt('Please Enter Any Number' , 5)

// // document.write(
// //     `
// //     <h1> Table of ${userNumber} </h1> <br /> <br />
// //     <p> ${userNumber} x 1  = ${userNumber * 1}  </p>
// //     <p> ${userNumber} x 2  = ${userNumber * 2}  </p>
// //     <p> ${userNumber} x 3  = ${userNumber * 3}  </p>
// //     <p> ${userNumber} x 4  = ${userNumber * 4}  </p>
// //     <p> ${userNumber} x 5  = ${userNumber * 5}  </p>
// //     <p> ${userNumber} x 6  = ${userNumber * 6}  </p>
// //     <p> ${userNumber} x 7  = ${userNumber * 7}  </p>
// //     <p> ${userNumber} x 8  = ${userNumber * 8}  </p>
// //     <p> ${userNumber} x 9  = ${userNumber * 9}  </p>
// //     <p> ${userNumber} x 10  = ${userNumber * 10}  </p>

// //     `
// // )

// // var takeNumber = +prompt('Please Enter number to check')

// // if(takeNumber % 3 === 0) {
// //     alert('The number is divisible by 3')
// // } else {
// //     alert('The number is not divisible by 3')

// // }

// var num1=+prompt("Enter Number 1");
// var num2=+prompt("Enter Number 2");
// var operator=prompt("Enter operator");

// if(operator==="+"){
//     alert(num1+num2)
// }
// else if(operator==="-"){
//     alert(num1-num2)
// }

// var name = ""

// console.log(Boolean(name))
//  0 , "" , null , undefined , NaN

// var city = prompt('User City')
// var education = prompt('Education Level')

// if(city === 'karachi' || education === 'bachelors'  ) {
//     alert('You can get admission')
// } else {
//     alert('You cannot get admission')

// }

// var time = +prompt('Enter time')
// var weight  = +prompt('Enter Weight')
// var userCity = prompt('User City')

// if(time < 5 || weight > 10 || userCity === 'karachi') {
//     alert('Execution of If Block')
// } else {
//     alert('Execution of Else Block')
// }

// var userCity = prompt('Please enter your city')
// var age = +prompt('Please Enter Your Age')
// var educationLevel = prompt('Please enter your education level')

// if(userCity === 'karachi' || age > 18 && educationLevel === 'bachelors' ) {
//      alert('You are eligible for the admission in University')
// } else {
//     alert('You are Not eligible for the admission in University')
// }

// var email = prompt('Please enter your email address')
// var password = prompt('Please enter your password')

// Sign up

// var registerEmail = prompt('Please Register with Email')
// var registerPassword = prompt('Create Passsword for your account')

// alert('Registered Successful')

// var loginEmail = prompt('Please enter your email to login')
// var loginPassword = prompt('Please enter your password of account')

// if(loginEmail === registerEmail && loginPassword === registerPassword) {
//     alert('Succesfully Login')
// } else {
//     alert('Invalid Account Details')
// }

// **************************** Nested If Else ***********************

// var userCity = prompt("Please enter your city");

// if (userCity === "karachi") {
//   var age = +prompt("Please Enter Your Age");
//   if (age > 18) {
//     var education = prompt("Please enter your education level");
//     if (education === "bachelors") {
//       alert("You are eligible");
//     } else {
//       alert("Not Eligible -  Education Criteria not matched");
//     }
//   } else {
//     alert("Not Eligible - You are under age");
//   }
// } else {
//   alert("Not Eligible - You are not from karachi");
// }

// var loginEmail = prompt("Please enter your email to login");
// if (loginEmail === "user@mail.com") {
//   var loginPassword = prompt("Please enter your password of account");
//   if (loginPassword === "admin123") {
//     alert("Login Succesful");
//   } else {
//     alert("Incorrect Password");
//   }
// } else {
//   alert("Invalid Email Address");
// }

// var a = 'c'

// alert(a.charCodeAt())


// var userInput = prompt('')

// if(userInput.charCodeAt() >= 48 && userInput.charCodeAt() <= 57) {

// }