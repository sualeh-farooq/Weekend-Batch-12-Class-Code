// var checkChildren = document.childNodes[1].childNodes

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

{
  /* <div class="card my-4">
<div class="card-header d-flex justify-content-between">
   <span>
    ~@Featured
   </span>
   <span>
    17-11-2024
   </span>
</div>
<div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
</div>
</div> */
}


var selectImgPath ;


function selectedImage(src) {
   var imagesBg = document.getElementsByClassName('bg-image')
    for(var i = 0; i < imagesBg.length; i++) {
        imagesBg[i].className = 'bg-image'
    }
    event.target.classList.add('selectedImage')
    selectImgPath = src
}


function submitPost() {
  var userName = document.getElementById("username");
  var title = document.getElementById("title");
  var description = document.getElementById("desc");
  var currentDateTime = new Date().toUTCString();

  var listingContainer = document.querySelector("#listingContainer");

  if (userName.value.trim() !== "") {
    if (title.value.trim() !== "") {
      if (description.value.trim() !== "") {
        listingContainer.innerHTML += `<div class="card my-4">
<div class="card-header d-flex justify-content-between">
   <span>
    ~@${userName.value}
   </span>
   <span>
    ${currentDateTime}
   </span>
</div>
<div  style="background-image: url('${selectImgPath}')" class="card-body postCardBody">
    <h5 class="card-title">${title.value}</h5>
    <p class="card-text">${description.value}</p>
</div>
</div>`;


userName.value = ''
title.value = ''
description.value = ''
      } else {
        alert("description is required");
      }
    } else {
      alert("Title is Required");
    }
  } else {
    alert("Username is required");
  }
}
