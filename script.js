//grab my DOM objects
let qTitel = document.querySelector('#qNum');
let qText = document.querySelector('#qTxt');
let answrForm = document.querySelector('#answers');
let quiz = document.querySelector('#quiz');
let strtBtn = document.querySelector('#starter');
let intro = document.querySelector('#intro');
let clueBtn = document.querySelector('#clue');
let fiftyBtn = document.querySelector('#fifty');
let friendBtn = document.querySelector('#friend');
let rules = document.querySelector('#rules');
let timeTxt = document.querySelector('#time');
let timer = document.querySelector('#timer');
let btn0 = document.querySelector('#btn0');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let what = document.querySelector('#what');
// initialize global variables
let q;
let sec;
// includes all the questions
let questions = {
    0: {
        q:`some q0`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 4,
        fifty:[2,3]
        },
    1: {
        q:`some q1`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 4,
        fifty:[2,3]
        },
    2: {
        q:`some q2`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 4,
        fifty:[2,3]
        },
    3: {
        q:`some q3`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 4,
        fifty:[2,3]
        },
    4: {
        q:`some q4`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 4,
        fifty:[2,3]
        },
    5: {
        q:`some q5`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 4,
        fifty:[2,3]
    },
    6: {
        q:`some q6`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 4,
        fifty:[2,3]
    },
    7: {
        q:`some q7`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 4,
        fifty:[2,3]
    },
    8: {
        q:`some q8`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 4,
        fifty:[2,3]
    },
    9: {
        q:`some q9`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 4,
        fifty:[2,3]
    },
    10: {
        q:`some q10`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 4,
        fifty:[2,3]
    }
}

function setTime() {
    var timerInterval = setInterval(function() {
      sec--;
      timer.textContent = sec;
  
      if(sec <= 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

strtBtn.addEventListener('click',function(){

    //hide intro text and button to reveal quiz text and answer buttons
    strtBtn.classList.add('d-none');
    intro.style.display = 'none';
    rules.style.display = 'none';
    clueBtn.classList.remove('d-none');
    fiftyBtn.classList.remove('d-none');
    friendBtn.classList.remove('d-none');
    timeTxt.classList.remove('d-none');
    btn0.classList.remove('d-none');
    btn1.classList.remove('d-none');
    btn2.classList.remove('d-none');
    btn3.classList.remove('d-none');
    what.classList.remove('d-none');

    sec=120;
    quizMaster();
    setTime();
})

let quizMaster = () => {
    
    qTitel.textContent = `Q${q}`;
    qText.textContent = `Here's a question for you with four answer options`;
    btn0.textContent = questions[0]['a'][0]

     
}

