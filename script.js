const startButton = document.getElementById('start-btn')
const head = document.getElementById('heading')
const text = document.getElementById('text')
const text_right = document.getElementById('correctness')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')



startButton.addEventListener('click', startGame)


function startGame() {
    startButton.classList.add('hide')
    head.classList.add('hide')
    text.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    questionCounter = 0


    function countDown(i) {
        var int = setInterval(function () {
            document.getElementById("timer").innerHTML = "Time: " + i;
            i-- || clearInterval(int);
        }, 1000);
    }



    answerButtonsElement.addEventListener('click', (event) => {
        const button = event.target;
        const isCorrect = button.dataset.correct;

        if (questions.length > questionCounter) {
            setNextQuestion() //only call this if there's another question!
            questionCounter++
            if (isCorrect) {
                text_right.textContent = "Correct";
                countDown();

            } else {
                text_right.textContent = "Incorrect"
                countDown();
            }
        } else {
            endQuiz() //the last question has been answered. 
            //we just have to write this function to handle the end-of-quiz logic!
        }


    })
}





function setNextQuestion() {
    resetState()
    showQuestion(questions[questionCounter])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)


    });

}

function resetState() {
    startButton.classList.add('hide')
    // head.classList.add('hide')
    // text.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')

    } else {
        element.classList.add('wrong')

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

function endQuiz(){
    console.log('done')
}

const questions = [
    {
        question: "What is 2+2",
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '7', correct: false },
            { text: '16', correct: false }
        ]
    },

    {
        question: "What is 3+3",
        answers: [
            { text: '6', correct: true },
            { text: '22', correct: false },
            { text: '7', correct: false },
            { text: '16', correct: false }
        ]
    },

    {
        question: "What is 4+4",
        answers: [
            { text: '8', correct: true },
            { text: '22', correct: false },
            { text: '7', correct: false },
            { text: '16', correct: false }
        ]
    },

    {
        question: "What is 5+5",
        answers: [
            { text: '10', correct: true },
            { text: '22', correct: false },
            { text: '7', correct: false },
            { text: '16', correct: false }
        ]
    }
]






