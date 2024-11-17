function onClickFunc() {
  alert("Hello World ~");
}

var name = "jOHN";

name = "Ali"; // update

function changeImage() {
  console.log(event.target.src);
  event.target.src = "./car-run.gif";
}

function submitUser() {
  var firstName = document.getElementById("firstName");
  var secondName = document.getElementById("secondName");

  var gender = document.getElementsByName("gender");

  var hobbiesList = document.getElementsByName("hobbies");

  var genderSelection;
  var hobbiesArr = [];

  for(var i = 0; i < hobbiesList.length; i++) {
    if(hobbiesList[i].checked) {
        hobbiesArr.push(hobbiesList[i].value)
    }
  }

  console.log(`The Selected Hobbies Are `)
  console.log(hobbiesArr)

  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderSelection = gender[i].value;
    }
  }

  // for (var i = 0; i < hobbiesList.length; i++) {
  //   if (hobbiesList[i].checked) {
  //     hobbiesArr.push(hobbiesList[i].value);
  //   }
  // }

  // console.log(hobbiesArr);
}

function checkInput() {
  //   console.log(event.target.value);
  // if(!event.target.value) {
  //     event.target.style.border = '2px solid red'
  // }

  if (event.target.value.trim() === "") {
    event.target.style.border = "2px solid red";
  }
}

function expandText() {
  var fullPara =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequuntur, expedita aliquam animi nisi voluptas beatae similique, quia ipsam quas autem? Quo, minima porro quibusdam dolore vitae at odit id?";
  var shortPara = "Lorem ipsum, dolor sit amet consectetur";
  var seeLink = document.getElementById("seeLink");
  var paragraph = document.getElementById("para");

  if (seeLink.innerText === "See More") {
    paragraph.innerText = fullPara;
    seeLink.innerText = "See Less";
  } else {
    paragraph.innerText = shortPara;
    seeLink.innerText = "See More";
  }
}


document.getElementsByName