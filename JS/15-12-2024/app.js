// https://github.com/fWd82/Pakistan-Mobile-Number-Validator

var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPhone = document.getElementById("signupPhone");
var signupPass = document.getElementById("signupPass");

var emailRegex = /^\S+@\S+\.\S+$/;

var nameRegex = /^[a-zA-Z]+$/;

var numberRegex = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;  

function userSignup() {
  if (nameRegex.test(signupName.value)) {
    if (emailRegex.test(signupEmail.value)) {
      if (numberRegex.test(signupPhone.value)) {
        if (signupPass.value.trim() !== "") {
          0;

          var userInfo = {
            name: signupName.value,
            email: signupEmail.value,
            phone: signupPhone.value,
            password: signupPass.value,
          };

          Swal.fire({
            title: "Registered",
            text: "Account Registered Succesfully",
            icon: "success",
          });

          localStorage.setItem("userInfo", JSON.stringify(userInfo));

          setTimeout(function () {
            window.location.href = "login.html";
          }, 2000);
        } else {
          Swal.fire({
            title: "Invalid Password",
            text: "Password can't be empty",
            icon: "error",
          });
        }
      } else {
        Swal.fire({
          title: "Invalid Phone Number",
          text: "Please enter valid Phone Number",
          icon: "error",
        });
      }
    } else {
      Swal.fire({
        title: "Invalid Email",
        text: "Please enter valid email address",
        icon: "error",
      });
    }
  } else {
    Swal.fire({
      title: "Invalid Name",
      text: "Please enter name",
      icon: "error",
    });
  }
}
window.onload = function () {
  var userLoginCheck = localStorage.getItem("loginUser");
  if (userLoginCheck == "true") {
    window.location.href = "dashboard.html";
  }
};

setTimeout(function () {
  console.log("Raza");
}, 1000);   /// Run only once after 1 Second and finished

var addTime = setInterval(function () {
  console.log("Hello World");
  console.log("...");
}, 1000); // continue running after every one second ,

setTimeout(() => {
  clearInterval(addTime); // clear the setinterval function after desired time with wrapping in setttimeout
}, 5000);  

var name = "Ali";



// window.history.back(-1) , go back to one level previous route saved in history 
// window.history.forward(1) , go forward to one level next route saved in history 


// PS: You can change the number ( -1 , 1 ) to your desired level of history saved