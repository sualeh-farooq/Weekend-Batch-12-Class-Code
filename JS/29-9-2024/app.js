// var arr = ["Ali", "Amir", "Anas", "Shahmeer" , "Saad" , "Sualeh" , "XYZ"];
// var returnVal = arr.splice(2 , 0)
// console.log(returnVal)
// console.log(arr)


// var cities = ['Karachi' , 'Lahore' , 'Islamabad' , 'Multan' , 'Peshawar' , "XYZ" , "aBC"]


// var copyArr = cities.slice(-1)
// var copyArr = cities.slice(2 , 4)


// console.log('Original Array ==>' , cities)
// console.log('Duplicated Array ==>' , copyArr)



// var sentence = 'An Apples a Day'
//             //  012345674


//             var appleVal = sentence.slice(3,11)

//             console.log(appleVal)



var arr = ['This' , 'Is' , 'My' , 'Cat']


// var wordConvert = arr.join('')

// console.log(wordConvert)


// var reversedArr = arr.reverse()

// console.log(reversedArr)


// var num = [6,4,0,8,2,1]
// var sortedArr = num.sort()
// console.log(sortedArr)



// var word = 'ali'
// console.log("Actual Word =>" ,  word)
// var palindrome = word.split('').reverse().join('')
// console.log("After Palindrome  =>" , palindrome)


// var userWord = prompt('Enter Any word to check Palindrome')
// var palindrome = userWord.split('').reverse().join('')

// if(userWord === palindrome) {
//     alert('It is Palindrome')
// } else {
//     alert('It is not Palindrome')
// }


// var students = ['Ali' , 'Anas' , 'Farman' , 'John']

// document.write(students + " <br />  <br />")
// var fifoVal = students.shift()
 
// document.write(`Out <br /> ${fifoVal}<br /><br />`)
// fifoVal = students.shift()
// document.write(`Out <br /> ${fifoVal}`)



// ********************************** For Loop ***************************



// 0 <= 5  ===> TRUE
// 1 <= 5 ===> TRUE
// 2 <= 5 ===> TRUE
// 3 <= 5 ===> TRUE
// 4 <= 5 ===> TRUE
// 5 <= 5 ===> TRUE
// 6 <= 5 ===> FALSE


// document.write('Saylani Welfare <br />')


// for(var i = 0; i < 5; i++) {

// document.write()

// }


// var tableNum = 5
// var tableLength  = 15
// for(var i = 1; i <= tableLength; i++) {
//     document.write(`${tableNum} x ${i}  = ${tableNum * i} <br /><br /> `)
// }




// var cities = ['Karachi' , 'Lahore' , 'Multan' , 'Islamabad','Karachi' , 'Lahore' , 'Multan' , 'Islamabad', 'Karachi' , 'Lahore' , 'Multan' , 'Islamabad']

// for(var i = 0; i < 3; i++) {
//    document.write(`${cities[i]} <br />`)
// }


// for(var i = 0; i < 20; i++) {
//     document.write(i)
//     if(i === 10) {
//         break;
//     }
// }


// document.write('<br /> Counting  <br />')
// for(var i = 1; i <= 20; i++) {
//     document.write(i)
// }

// document.write('<br />Reverse Counting  <br />')


// for(var i = 20; i >= 1; i--){
//     document.write(i)
// }
// document.write('<br /> Even Number  <br />')
// for(var i = 1; i <= 20; i++) {
//     if(i % 2 === 0) {
//         document.write(i)
//     } 
// }
// document.write('<br /> Odd Number  <br />')
// for(var i = 1; i <= 20; i++) {
//     if(i % 2 !== 0) {
//         document.write(i)
//     } 
// }


// var  cities = ['Karachi ' , 'Islamabad' , 'Lahore' , 'Multan' , 'Peshawar']


// for(var i = 0; i < cities.length; i++) {
//     if(cities[i] === 'Lahore') {
//         console.log('Mil Gaya');
//         break;
//     } else {
//         console.log('Nahi Mila')
//     }
// }


var  cities = ['Karachi ' , 'Islamabad' , 'Lahore' , 'Multan' , 'Peshawar']

var milGya = "no" 


for(var i = 0; i < cities.length; i++) {
    if(cities[i] === 'Sindh') {
        milGya = "yes"
    }
}

if(milGya === "yes") {
    console.log('Lahore Milgya')
} else {
    console.log('Nahi Mila')
}