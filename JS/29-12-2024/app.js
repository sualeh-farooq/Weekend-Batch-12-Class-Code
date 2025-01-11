// var obj = {
//     name: 'Sualeh',
//     age: 24
// }

// const {myName} = obj

// console.log(myName)

// const fruits = ['Apple' , 'Banana' , 'Mango']
// const [Apple , ...remainingFruits] = fruits
// console.log(Apple)
// console.log(remainingFruits)

// Ternary Operator

// let userInp = document.getElementById('userNum')

//     let result = ''

// if( number > 20) {
//     result = 'Greater than 20'
//  } else {
//     result = 'Less Than 20'
//  }

//  console.log(result)

// let number = +prompt('Enter number')
// let result = number > 20 && number < 50 ?  'Greater'  :  number < 10 ? 'Less than' : 'Less'

// async function fetchTodos() {
//     try {
//         const todosResponse = await fetch('https://dummyjson.com/todos')
//         const responseJson = await todosResponse.json()
//         filterCompletedTodos(responseJson.todos)

//         showAllTodos(responseJson.todos)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchTodos()

// function filterCompletedTodos(todosData) {

//     const completedTodos = todosData.filter((data) => data.userId === 13)  // Filter all the elements from an array according to the condition
//     const firstCompletedTodo = todosData.find((data) => data.completed)  // will find only the first element that matches the condition
//     // console.log(completedTodos)
// }

// function showAllTodos(todosData) {
//     let todosList = document.getElementById('todos')

//    todosData.map((inp) => {
//     if(inp.completed) {
//         return todosList.innerHTML += `<li> ${inp.todo}  </li>`
//     }
//    })
// todosData.filter((data)=>data.completed).map((val)=>{
//     return todosList.innerHTML += `<li> ${val.todo}  </li>`
// })
// todosData.map((val , index )=>{
//     if(!val.completed) {
//         return todosList.innerHTML += `<li>  ${val.todo} and the <b> Index number is ${index} </b> </li>`
//     }
// })
// }

// function showAllData(...params) {
//     console.log(params)
//     const [age ,  todo  , ...rest ] = params
//     const {completed} = todo
//     console.log(completed)
// }

// showAllData(20 ,  {name: 'John' , completed: true}  , 'Ali'  , true)

// const arr =  [{name: "Aatir", email: "aatir@gmail.com"},{name: "Ali", email: "ali@gmail.com"}]

// "2" == 2 //true
// arr.map((item)=> {
// console.log(item.name)
// })

// const arr = [1, 2, 3, 4, 5]
// const valueToCompare = 2;

// const result = arr.filter(num => num % valueToCompare)

// const arr = [1, 2, 3, 4, 5]
// const valueToCompare = 2;

// const result = arr.find(num => num == valueToCompare)

// console.log(result)

// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("resolve"),5000)
//     // reject(("rejected"))
// })

// fetchData.then((data) => {
//     console.log("Data fetched")
// })
// .catch((error) => {
//     console.error(error)
// })

// try {
//   const result = 10 / 0;
//   console.log(result)
// } catch(error) {
//     console.error(error)
//     // console.log("An error occured")
// } finally {
//     alert("Operation was run successfully.")
// }

// const a = 10;
// console.log(a)
const arr = [[{names: [1,2,3,]}]]
function abc(a) {
    return function (number) {
        
        return number * a
    }

}

const test = abc(10);

console.log(test(2))