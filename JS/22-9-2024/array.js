// ************************************ARRAYS************************


// var city  = 'karachi'

// city = 20 

// city = true

// console.log(city)



// var cities =  ['karachi' , 'lahore' , 'islamabad' , 'multan' , 2 , 150 , true , false  , [1, 3,4]]


// alert(cities.length)
// alert(cities[6])

// var pets = []  // length is 0

// pets[20] = 'puppy'

// pets[3] = 'cat'

// pets[20] = 'dog'

// console.log(pets.length - 1)

// console.log(pets[20])



// var students = ['ali' , 'anas' , 'rehan' , 'usman' , 'amir']

// console.log(students)


// students.pop()  // it will remove the last element of an array , e.g in above example it will remove 'amir'

// console.log(students)  // array without value amir

// students.push('shahmeer')

// console.log(students)



var pets = ['dog' , 'cat' , 'puppy' , 'fish']

console.log(pets)


pets.shift()   // it will remove the first element of an array

console.log(pets) // array will print without the value of dog


pets.unshift('cow')

console.log(pets)



var userInput = prompt('Enter Character')

if(userInput.charCodeAt() >= 65 && userInput.charCodeAt() <= 90) {
    alert('Character UPPERCASE')
}


var students = ['mark' , 'john' , 'ali']

var score1 = prompt('Marks of '  + students[0])
var score2 = prompt('Marks of '  + students[2])
var score3 = prompt('Marks of '  + students[2])


var percentage = [((score1 / 500) * 100) , ((score2 / 500) * 100)  , ((score3 / 500) * 100)]

document.write(`
    Score of ${students[0]} is ${score1} and Percentage is ${percentage[0]}
    `)