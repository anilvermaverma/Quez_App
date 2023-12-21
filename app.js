  const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index = 0;
let correct = 0,
incorrect = 0,

total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
      if(total == index){
        return quizEnd()
      }
      reset()

 const data = quizData[index]
 questionBox.innerHTML = data.question
 allInputs[0].nextElementSibling.innerHTML = data.a
 allInputs[1].nextElementSibling.innerHTML = data.b
 allInputs[2].nextElementSibling.innerHTML = data.c
 allInputs[3].nextElementSibling.innerHTML = data.d
    }
 document.getElementById("submit").addEventListener("click" ,  ()=>{
     let data = quizData[index]
     let ans = getAnswer()
     if(ans === data.correct){
        correct++
     }
     else{
        incorrect++
     }
     index++
     loadQuestion()
 })
 const getAnswer = ()=>{
    let ans
    allInputs.forEach((element)=>{
       if(element.checked){
         ans = element.value
       }
    })
    return ans
 }


 const reset = () => {
    allInputs.forEach((element) =>{
     element.checked = false
    })
 }

 const quizEnd = () => {
    document.getElementsByClassName("container")[0].innerHTML = `${correct} / ${total}`
 }
 loadQuestion(index)