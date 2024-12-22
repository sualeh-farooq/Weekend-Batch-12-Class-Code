
// var std = new StudentObj('Ali' , 'X' , false)
// var std2 = new StudentObj('Anas' , 'IX' , true)



// var arr = [] // database


// console.log(std2)
// console.log(stdd)


// var stdInfo = {
//     firstName : 'Ali',
//     getName: function() {
//         return this.firstName
//     }
// }




// var stdInfo2 = {
//     firstName : 'Ali',
//     getName: function() {
//         return this.firstName
//     }
// }

// console.log(stdInfo)
// console.log(stdInfo2)



// function StudentObj(name , grade , result) {
//     this.name = name
//     this.grade = grade
//     this.result = result
// }
// StudentObj.prototype.getName = function() {
//     return this.name
// }
// var std2 = new StudentObj('Anas' , 'IX' , true)
// console.log(std2)



// var std = {
//     name: 'First name' ,
//     grade: 'X'
// }

// var keysofObject = Object.keys(std)
// var refrence = keysofObject[0] // name
// console.log(std[refrence])  // std.name  = 'First Name


// try {
//     console.log(stdFirstName)
// } catch(error) {
//     console.log(error)
// } finally {
//         console.log('Finally Console')
// }

// console.log(std)


// var firstName = 'sualeh'


// firstName = 'Ai' // update 


// var firstName = 'John'



// let firstName = 'Doe'


// firstName = 'John'


// Let variables can be updated but cannot re-declare in the same scope
// console.log(countryName)
// const countryName = 'Pakistan'
// countryName = 'India'


// Arrow Function
// const displayName = () => {
//     return 'Hello'
// }


var studentObj = {
    firstName: 'Sualeh' ,
    secondName: 'Farooq' ,
    occupation :'Developer' ,
    age: 24
}

var {firstName , secondName  , ...sualeh} = studentObj // Object Destructring


console.log(sualeh)
// console.log(studentObj)