

const quizData = [
  {
    question: "1.   Which of the following function of Array object returns a string representing the array and its elements?",
    a :"toSource()",
    b :"sort()",
    c :"splice()",
    d :"toString()",
    correct:"d"
  },
  {
    question : "2.   Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",    
    a :"indexOf",
    b :"join()",
    c :"lastIndexOf()",
    d :"map()",
    correct:"a"
  },
  {
    question: "3.   Can you access Cookie using javascript?",
    a :"true",
    b :"false",
    c:"none",
    d:"exception",
    correct:"a"
  },
  {
    question : "4.   Can you assign a anonymous function to a variable?",    
    a :"true",
    b :"false",
    c:"none",
    d:"exception",
   
    correct:"c"
  },
  {
    question: "5.   Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    a :"getIndex()",
    b :"location",
    c :"indexOf",
    d :"None of the above",
    correct:"c"
  },
  {
    question : "6.   Which built-in method sorts the elements of an array?",    
    a :"changeOrder(order)",
    b :"order()",
    c :"sort()",
    d :"None",
    correct:"c"
  },
  {
    question: "7.   Which of the following function of Number object defines how many total digits to display of a number?",
    a :"toExponential()",
    b :"toFixed()",
    c :"toLocaleString()",
    d :"toPrecision()",
    correct:"d"
  },
  {
    question : "8.   Which of the following function of String object returns the characters in a string between two indexes into the string?",    
    a :"slice()",
    b :"split()",
    c :"substr()",
    d :"substring()",
    correct:"d"
  },
  {
    question: "9.   Which of the following function of String object creates a string to blink as if it were in a <blink> tag?",
    a :"anchor()",
    b :"big()",
    c :"blink()",
    d :"italics()",
    correct:"c"
  },
  {
    question : "10.   Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",    
    a :"sup()",
    b :"small()",
    c :"strike()",
    d :"sub()",
    correct:"d"
  }



 


]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});