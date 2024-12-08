// for(var i = 0; i <= 3; i++) {
//     console.log(i)
// }

// will not run , if condition not match in once 
// var i = 0;
// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// Run atleast once , even if the condition false at first time
// var i = 0
// do {
//     console.log('Hello World !')
//     i++
// } while(i <= 3)





// key value pair

var stdObj  = {name: 'Sualeh' ,  class: 'X'}

function saveName() {
    // localStorage.setItem('name' , 'SUALEH')
    // localStorage.setItem('name' , {name: 'Sualeh' ,  class: 'X'})  // [object object]
   
   var stdInfo = JSON.stringify(stdObj)
    localStorage.setItem('info' , stdInfo )
}

function displayName() {
    var stdInfo = localStorage.getItem('info')

    console.log(stdInfo)
    console.log(typeof(stdInfo))


    var stdInfoObject = JSON.parse(stdInfo)

    console.log(stdInfoObject)
    console.log(typeof(stdInfoObject))
}




// var objString = '{"name":"Sualeh","class":"X"}'


// console.log(objString)

// var strObject = JSON.parse(objString)

// console.log(strObject)