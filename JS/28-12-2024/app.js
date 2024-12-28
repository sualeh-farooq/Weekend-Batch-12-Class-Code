
// // let userNumber = +prompt('Enter Any Number')

// let myPromise = new Promise(function(resolve , reject) {

//     let baseUrl = 'https://dummyjson.com/users/5'

//     let initializeRequest = new XMLHttpRequest

//     initializeRequest.open('GET' , baseUrl)

//     initializeRequest.onload = function() {
//         if(initializeRequest.status === 200) {
//             resolve(initializeRequest.response)
//         } else {
//             reject('Something went wrong')
//         }
//     }


//     initializeRequest.send()
//     // if(userNumber > 20) {
//     //     resolve(`Number is Greater`)
//     // } else {
//     //     reject(`Number is not Greater`)
//     // }
// })


// let customUserData ;

// myPromise.then((data)=>{
//     customUserData  = JSON.parse(data)
// }).then(()=>{
//     showUserData(customUserData)
// }).catch((error)=>{
//     console.log(error)
// })


// function showUserData(userData){
//     console.log(userData)

//     let userContainer = document.getElementById('userContainer')

//     userContainer.innerHTML = `
    
//     <h4>  ${userData.firstName}  ${userData.lastName} </h4>

//     <p> Gender:  ${userData.gender} </p>

//     <br />

//     <img src='${userData.image}'  width={200} height={200} alt="userImage" />

//     `

// }


// // let customData ;

// // function showData(data) {
// //     console.log(data)
// // }

// // myPromise.then(function(data){
// //     customData = data
// // }).then(()=>{
// //     showData(customData)
// // }).catch((error)=>{
// //     console.log(error)
// // })






// async function getData() {
//     console.log('Fetching Student List')
    
//     let batch15StdPromise = new Promise((resolve , reject)=>{
//             setTimeout(()=>{
//                 resolve(50)
//             } , 5000)
//     })


//     let batch16StdPromise = new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             resolve(100)
//         }, 10000);
//     })



//     console.log('Fetching Batch 15 List')
//     let batch15Data = await batch15StdPromise

//     console.log(`Fetched Result of Batch 15 =>> ${batch15Data}`)

//     console.log('Fetching Batch 16 List')

//     let batch16Data = await batch16StdPromise

//     console.log(`Fetched Result of Batch 16 =>> ${batch16Data}`)

// }

// getData()



// async function getData(data) {
//     try {
//         let userResponse = await fetch('https://dummyjson.com/users')
//         let responseJson = await  userResponse.json()
//         showData(responseJson)
//     } catch (error) {
//         console.log(error)
//     }
// }


// getData()

// function showData(data) {
// console.log(data)
// }




let cityInput = document.getElementById('cityInp')


let temperature = document.getElementById('temp')
let windSpeed = document.getElementById('windSpeed')
let feelsLike = document.getElementById('feelsLike')
let placeLocation = document.getElementById('loc')



async function checkWeather(){
   try {
    if(cityInput.value.trim() !== '') {
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=ae51a4bb2c418a197081a41663fa3103`
    let fetchResult = await fetch(baseUrl)
    if(!fetchResult.ok && fetchResult.statusText === 'Not Found') {
        alert('City Not Found')
    } else {

        let resultJson = await fetchResult.json()
        showWeather(resultJson)
    }
        alert('Please enter any city')
    }
   } catch (error) {
    
   }
}


function showWeather(weatherData) {
    console.log(weatherData)
    placeLocation.innerText = weatherData.name
    temperature.innerText = `${Math.floor(weatherData.main.temp - 273.15)}\u00B0C`
    windSpeed.innerText = `${weatherData.wind.speed} km/hr`
    feelsLike.innerText = `${Math.floor(weatherData.main.feels_like - 273.15)}\u00B0C`

}



window.onload = function() {
    if(navigator) {
        navigator.geolocation.getCurrentPosition(getUserPosition)
    }
}


async function checkLocationWeather(lat , lon){

    console.log('runing....')
    try {
     if(cityInput.value.trim() !== '') {
     const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ae51a4bb2c418a197081a41663fa3103`
     let fetchResult = await fetch(baseUrl)
     if(!fetchResult.ok && fetchResult.statusText === 'Not Found') {
         alert('City Not Found')
     } else {
 
         let resultJson = await fetchResult.json()
         showWeather(resultJson)
     }
         alert('Please enter any city')
     }
    } catch (error) {
     
    }
 }





function getUserPosition(data) {
    console.log(data)
    checkLocationWeather(data.coords.latitude , data.coords.longitude)
}

