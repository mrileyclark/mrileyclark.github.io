// sets quiz data array objects
// add to array to add more questions
const quizData = [
    {
        question: "When is Harry Potter's birthday?",
        a: "April 15",
        b: "September 1",
        c: "November 17",
        d: "July 31",
        correct: "d",
    },
    {
        question: "Which platform in the King's Cross Station was Harry supposed to ride the train to Hogwarts?",
        a: "Platform 10 1/2",
        b: "Platform 9 3/4",
        c: "Platform 8 1/4",
        d: "Platform 10 3/4",
        correct: "b",
    },
    {
        question: "What animal can Remus Lupin turn into?",
        a: "Werewolf",
        b: "Dog",
        c: "Rat",
        d: "Stag",
        correct: "a",
    },
    {
        question: "Which ice cream flavor did Harry eat at the zoo when he went out with the Dursleys?",
        a: "Grape",
        b: "Lemon Ice Pop",
        c: "Fruit Punch",
        d: "Cherry",
        correct: "b",
    },
];

// pulls all elements makeup the quiz
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// starts at 0 index pulls quiz questions by index
let currentQuiz = 0;
// sets score at 0
let score = 0;


//loads quiz info from array
loadQuiz()

// creat function for quiz
function loadQuiz() {
    deselectAnswers()
    
      

    // pulls quiz questions based on array and index set above
    const currentQuizData = quizData[currentQuiz]

    // pulls questions and answers based on array
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


// loads quiz and all answers start empty you can make a selection
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}


//  checks which answer is checked and returns answer
function getSelected() {
    let answer 

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}




// when button is clicked submits answer selected
submitBtn.addEventListener('click', () => {
    const answer = getSelected()

   
    // if answer is correct increments the score
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        // moves to next quiz question
        currentQuiz++

        // check if more questions to continue if not displays score/message
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()
            ">Reload</button>
            `
            // above displays reload button and reloads page and stars over
        }
    } 
})