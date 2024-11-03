// var mainDiv = document.getElementById('main')

// var secondDivClass = document.getElementsByClassName('second')

// var secondDiv = document.querySelector('.second')


// var heading = document.getElementsByTagName('h1')

// console.log(secondDivClass)


// console.log(mainDiv)



var mainDiv = document.querySelector('#main')
console.log(mainDiv)


function AddParagraph() {
    var mainDiv = document.querySelector('#main')
    mainDiv.innerHTML = `
    
    <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repudiandae maxime facilis aliquid doloribus, culpa ducimus voluptas voluptatibus laboriosam, rem sunt consectetur harum eaque quisquam repellat sapiente vero reprehenderit architecto. </p>
    
        <ul>
                <li>  HTML </li>
                 <li>  CSS </li>
                 <li>  JAVASCRIPT </li>
        </ul>

    `
}


function submitForm() {
    var firstName = document.getElementById('firstName')
    var secondName = document.getElementById('secondName')


    console.log(`First Name  ${firstName.value}`)
    console.log(`Second Name  ${secondName.value}`)
}


// used to redirect the html page from the  javascript
// window.location.href = "dashboard.html"