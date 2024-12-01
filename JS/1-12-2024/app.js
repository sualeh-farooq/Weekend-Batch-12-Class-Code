var htmlQuiz = [
  {
    question: "HTML Stands for ?",
    option1: "Hypertext",
    option2: "Markup",
    option3: "HyperSuperText",
    option4: "HyperText Markup Language",
    answer: "HyperText Markup Language",
  },
  {
    question: "Which Element used to bold text in HTML?",
    option1: "img",
    option2: "h1",
    option3: "strong",
    option4: "p",
    answer: "strong",
  },
  {
    question: "Which Element used for Image in HTML?",
    option1: "span",
    option2: "div",
    option3: "image",
    option4: "img",
    answer: "img",
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    option1: "link",
    option2: "a",
    option3: "hyperlink",
    option4: "url",
    answer: "a",
  },
//   {
//     question:
//       "Which attribute is used to define the background color of a webpage in HTML?",
//     option1: "bgcolor",
//     option2: "color",
//     option3: "background",
//     option4: "style",
//     answer: "bgcolor",
//   },
//   {
//     question: "What is the correct HTML element for inserting a line break?",
//     option1: "break",
//     option2: "br",
//     option3: "hr",
//     option4: "line",
//     answer: "br",
//   },
//   {
//     question: "Which tag is used for creating an ordered list in HTML?",
//     option1: "ul",
//     option2: "li",
//     option3: "ol",
//     option4: "dl",
//     answer: "ol",
//   },
//   {
//     question: "Which tag is used to define a table in HTML?",
//     option1: "table",
//     option2: "tr",
//     option3: "td",
//     option4: "thead",
//     answer: "table",
//   },
//   {
//     question: "Which HTML tag is used to display a form in a webpage?",
//     option1: "input",
//     option2: "form",
//     option3: "button",
//     option4: "textarea",
//     answer: "form",
//   },
//   {
//     question:
//       "What is the default value of the type attribute for an <input> tag in HTML?",
//     option1: "text",
//     option2: "password",
//     option3: "checkbox",
//     option4: "radio",
//     answer: "text",
//   },
];

var question = document.getElementById("question");
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");
var label4 = document.getElementById("label4");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

var quizOptions = document.getElementsByName("quizOption");


var quizWindow = document.getElementById('quizWindow')
var resultWindow = document.getElementById('resultWindow')
var announcement = document.getElementById('announce')
var percentageSpace = document.getElementById('percentageShow')
var totalQuestions = document.getElementById('totalQue')
var correctQuestion = document.getElementById('correctQue')

var questionCount = 0;
var score = 0;

function renderQuestion() {
  // question
  question.innerHTML = htmlQuiz[questionCount].question;
  // labels , that shows in DOM
  label1.innerHTML = htmlQuiz[questionCount].option1;
  label2.innerHTML = htmlQuiz[questionCount].option2;
  label3.innerHTML = htmlQuiz[questionCount].option3;
  label4.innerHTML = htmlQuiz[questionCount].option4;
  // Radio Values
  option1.value = htmlQuiz[questionCount].option1;
  option2.value = htmlQuiz[questionCount].option2;
  option3.value = htmlQuiz[questionCount].option3;
  option4.value = htmlQuiz[questionCount].option4;
}

function deSelect() {
  for (var i = 0; i < quizOptions.length; i++) {
    quizOptions[i].checked = false;
  }
}

function next() {
  var radioChecked = false;
  for (var i = 0; i < quizOptions.length; i++) {
    // If value is checked
    if (quizOptions[i].checked) {
      radioChecked = true;

      // so check that selected option is equal to answer so increment the score
      if (quizOptions[i].value === htmlQuiz[questionCount].answer) {
        score++;
      }
    }
  }

  // if no option selected ( if block )
  if (!radioChecked) {
    Swal.fire({
      title: "No Option Selected",
      text: "Please Select Any Option",
      icon: "error",
    });
  } else {
    // radio checked = true

    if (questionCount < htmlQuiz.length - 1) {
      questionCount++;
      deSelect();
      renderQuestion();
    } else {
       showResult()
    }
  }
}

function showResult() {
    quizWindow.style.display = 'none'
    resultWindow.style.display = 'block'

    var percentage = Math.round(score / htmlQuiz.length * 100)
    var resultStatus = ''
    if(percentage < 70) {
        resultStatus = ' You are Failed ! Better Luck Next Time'
        announcement.className = 'redText'
    } else {
        resultStatus = 'Congratulations ! You are Passed'
        announcement.className = 'greenText'
    }

    announcement.innerHTML = resultStatus
    totalQuestions.innerHTML = htmlQuiz.length
    correctQuestion.innerHTML = score 
    percentageSpace.innerHTML = `Your Percentage is ${percentage} %`

}

window.onload = renderQuestion();
