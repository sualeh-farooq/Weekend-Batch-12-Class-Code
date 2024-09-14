// // // var a = 2
// // // var b = 4
// // // var result = --a + ++b - b-- + ++b + a++;
// // var num = 4
// // document.write("<h1> The Table of " + num + "tasas" + num + "sasa" + "</h1>" )

// var subjectOne = prompt("Enter Subject One");
// var subjectOneMarks = +prompt("Enter the Marks Obtained in " + subjectOne);

// var subjectTwo = prompt("Enter Subject Two");
// var subjectTwoMarks = +prompt("Enter the Marks Obtained in " + subjectTwo);

// var subjectThree = prompt("Enter Subject Three");
// var subjectThreeMarks = +prompt("Enter the Marks Obtained in " + subjectThree);

// var eachSubjectTotal = 100;

// var SubjectOnePer = (subjectOneMarks / eachSubjectTotal) * 100;
// var SubjectTwoPer = (subjectTwoMarks / eachSubjectTotal) * 100;
// var SubjectThreePer = (subjectThreeMarks / eachSubjectTotal) * 100;

// var totalMarks = 300;
// var totalObtainedMarks = subjectOneMarks + subjectTwoMarks + subjectThreeMarks;

// var finalPercentage = (totalObtainedMarks / totalMarks) * 100;

// document.write(`

//     <table>
//         <tr>
//             <th>Subject</th>
//              <th>Total</th>
//              <th>Obtained</th>
//              <th>Percentage</th>
//         </tr>
//         <tr>
//             <td> ${subjectOne} </td>
//             <td> ${eachSubjectTotal} </td>
//             <td> ${subjectOneMarks} </td>
//             <td> ${SubjectOnePer}% </td>
//          </tr>
//           <tr>
//             <td> ${subjectTwo} </td>
//             <td> ${eachSubjectTotal} </td>
//             <td> ${subjectTwoMarks} </td>
//             <td> ${SubjectTwoPer}% </td>
//          </tr>
//           <tr>
//             <td> ${subjectThree} </td>
//             <td> ${eachSubjectTotal} </td>
//             <td> ${subjectThreeMarks} </td>
//             <td> ${SubjectThreePer}% </td>
//          </tr>

//           <tr>
//             <th> Total </th>
//             <th> ${totalMarks} </th>
//             <th> ${totalObtainedMarks} </th>
//             <th> ${finalPercentage}% </th>
//          </tr>
//     </table>

//     `);

// var userAge = +prompt("Enter your Age");

// if (userAge === 20) {
//   alert("You are eligible");
// }

// var kuchLayAo = prompt("Kuch Lekr Ao");

// if (kuchLayAo === "dahi") {
//   alert("Lekar ajao");
// } else if (kuchLayAo === "doodh") {
//   alert("theek hai bhai lekr ajao 2 kg le ao");
// } else if (kuchLayAo === "chips") {
//   alert("to 2 packet le ao");
// } else {
//   alert("kuch bh le ao , khali hath mat aana");
// }

// var num1 = "20"
// var num2 = 20
// alert(num1 === num2)

// var userAge = +prompt('Enter your age')

// if(userAge <= 17) {

//     alert('You are not eligible')

// } else {

//     alert('you are eligible for CNIC')

// }

// var userCity = prompt('Enter your city')

// if(userCity === 'karachi') {
//     alert('Biryani')
// } else if (userCity === 'lahore') {
//     alert('Paye')
// } else if(userCity === 'peshawar') {
//     alert('Dambuk')
// } else if (userCity === 'islamabad') {
//     alert('Savour Pulao')
// } else {
//     alert('Samose')
// }

// var ticketNo = +prompt('Enter Ticket No')

// if (ticketNo < 1000) {
//   alert("Your show day is Monday");
// } else if (ticketNo <= 2000) {
//   alert("Your show day is tuesday");
// } else if (ticketNo <= 3000) {
//   alert("Your show day is wednesday");
// } else {
//   alert("Your show day is Thursday");
// }

// // Rose !== rose
// var rollNo = +prompt('Enter roll no')
// if( rollNo !==  3654 ) {
//     alert('You can take test')
// } else {
//     alert('You are eliminated')
// }

// var userInput = +prompt('Enter your Age')
// alert(typeof(userInput))