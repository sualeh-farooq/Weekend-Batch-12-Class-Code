// function playingWithDOM(){
//     console.log(event.target.parentNode.parentNode.children.length)
// }

// var listingContainer = document.getElementById('listingContainer')
// console.log(listingContainer.hasAttribute('class')) // return true if attr is available
// console.log(listingContainer.getAttribute('class')) // return the value of attr if available , otherwise null
// listingContainer.setAttribute('class' , 'listing-container-js')  // set attribute

// var div = document.createElement('div')
// var heading = document.createElement('h1')
// var paragraph = document.createElement('p')

// var headingText = document.createTextNode('Saylani MASS IT Training')
// var paraText = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reiciendis necessitatibus libero voluptates voluptate ratione fuga iure cum, molestiae odio iusto a officia eveniet error adipisci? Ad cum ut illum!')

// heading.appendChild(headingText)
// paragraph.appendChild(paraText)

// div.appendChild(heading)
// div.appendChild(paragraph)

// document.body.appendChild(div)

// var cars =  {
//     honda
// }

// var student = {
//     name: 'Ali' , // key , value   ---> properties , valuess
//     qualification: 'Bachelors' ,
//     age : 24
// }

// student.name = 'Anas'
// delete student.qualification  // to delete the key / property of object

// student.grade = 'A'

// console.log(student)

var mobilePhones = {
  samsung: {
    galaxy: {
      S24: {
        name: "Galaxy S24 Ultra",
        make: 2024,
        price: 50000,
        colors: ["Black", "Blue", "Silver"],
        PTA: true,
      },
      ZFold: {
        name: "Galaxy ZFold ",
        make: 2022,
        price: 250000,
        colors: ["Purple", "Black", "Red"],
        PTA: true,
      },
    },
    ASeries: {
        A12: {
          name: "Samsung A12",
          make: 2024,
          price: 50000,
          colors: ["Black", "Blue", "Silver"],
          PTA: true,
        },
        A20: {
          name: "Samsung A20 ",
          make: 2022,
          price: 250000,
          colors: ["Purple", "Black", "Red"],
          PTA: true,
        },
      },
  },
  apple: {
    iphone: {
      iphone14: {
        name: "Apple Iphone 14",
        make: 2024,
        price: 20000,
        PTA: false,
      },
      iphone15: {
        name: "Apple Iphone 15",
        make: 2023,
        price: 50000,
        PTA: true,
      },
    },
  },
};

var selectedCompany = 'samsung'



// for(var companies in mobilePhones) {
//     for(var variants in mobilePhones[companies]) {
//         for(models in mobilePhones[companies][variants]) {
//             console.log(mobilePhones[companies][variants][models])
//         }
//     }
// }

// console.log(mobilePhones[selectedCompany])



for(var keys in mobilePhones) {  /// mobilePhones keys . 

    for(var variants in mobilePhones[keys]) { // mobilePhones.samsung keys , mobilePhones.apple keys
        

        for(var model in mobilePhones[keys][variants]) {
            console.log(mobilePhones[keys][variants][model])
        }

    } 

}


