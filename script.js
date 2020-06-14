//grab my DOM objects
let qTitel = document.querySelector('#qNum');
let qText = document.querySelector('#qTxt');
let answrForm = document.querySelector('#answers');
let quiz = document.querySelector('#quiz');
let strtBtn = document.querySelector('#starter');
let intro = document.querySelector('#intro');
let clueBtn = document.querySelector('#clue');
let clueTxt = document.querySelector('#clueTxt');
let fiftyBtn = document.querySelector('#fifty');
let friendBtn = document.querySelector('#friend');
let rules = document.querySelector('#rules');
let timeTxt = document.querySelector('#time');
let timer = document.querySelector('#timer');
let btn0 = document.querySelector('#btn0');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let whatTxt = document.querySelector('#what');
let answerBtnDiv = document.querySelector('#answerBtnDiv');
// initialize global variables
let q;
let sec;
let clickedBtn;
let score;
let qNumAsked=0;
// includes all the questions, answers and other properties
let questions = {
    0: {
        q:`A collection of characters`,
        a:[`a password`,`a string`,`a function`,`a variable`],
        correct: 1,
        asked: false,
        clue:`Is denoted in single or double quotes or back-ticks`,
        friend: 0,
        fifty:[2,3]
        },
    1: {
        q:`Data type that can hold only one of two values.`,
        a:[`a boolean`,`an if statement`,`a while loop`,`a number`],
        correct: 0,
        asked: false,
        clue:`Denoted by true or false`,
        friend: 3,
        fifty:[1,2]
        },
    2: {
        q:`A fancy word for a list of values`,
        a:[`a variable`,`a string`,`a list`,`an array`],
        correct: 3,
        asked: false,
        clue:`A type of object, uses square brackets.`,
        friend: 0,
        fifty:[1,2]
        },
    3: {
        q:`It is like a two column list that holds key-value pairs`,
        a:[`a method`,`a function`,`an object`,`an array`],
        correct: 2,
        asked: false,
        clue:`One of 7 data types, uses curly braces`,
        friend: 3,
        fifty:[0,1]
        },
    4: {
        q:`some q4`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 0,
        fifty:[2,3]
        },
    5: {
        q:`some q5`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 0,
        fifty:[2,3]
        },
    6: {
        q:`some q6`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 0,
        fifty:[2,3]
        },
    7: {
        q:`some q7`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 0,
        fifty:[2,3]
        },
    8: {
        q:`some q8`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 0,
        fifty:[2,3]
        },
    9: {
        q:`some q9`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 0,
        fifty:[2,3]
        },
    10: {
        q:`some q10`,
        a:[`a1`,`a2`,`a3`,`a4`],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 0,
        fifty:[2,3]
        }
}

// timer function counting down from 120
function setTime() {
    var timerInterval = setInterval(function() {
      sec--;
      timer.textContent = sec;
  
      if(sec <= 0) {
        clearInterval(timerInterval);
        console.log('done')
      }
  
    }, 1000);
  }

  // random question generator, check that we don't ask same q twice
let pickQ = () => {
    let found = false;
    let x;
    while (!found) {
        x = Math.floor(Math.random()*11);
        if (!questions[x]['asked']) {
            questions[x]['asked']=true
            found=true
        }
    }
    return x
}

// checks answers, adjusts btn color and score, resets settings for new question, checks nr of questions asked
let checkAnswer = () => {
    let correctBtn = document.querySelector('.correct');
    if (clickedBtn.textContent !== questions[q]['a'][questions[q]['correct']]) {sec-=10} //must  add min of sec and 10 if less secs left
    correctBtn.style.border='10px solid forestgreen';
    setTimeout(function(){
        correctBtn.style.border='3px solid darkmagenta';
        correctBtn.classList.remove('correct');
        btn0.disabled = false;
        btn1.disabled = false;
        btn2.disabled = false;
        btn3.disabled = false;
        clueTxt.textContent = '';
        qNumAsked++;
        if (qNumAsked>=10) {
            score = sec;
            console.log(score);
        } else {
            quizMaster();
        }
    },1000)
}

// sets up html elements and starts the quiz
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
    whatTxt.classList.remove('d-none');
    //call timer and quizing functions
    sec=120;
    quizMaster();
    setTime();
    answerBtnDiv.addEventListener('click',function(event){
        if (event.target === btn0 || event.target === btn1 || event.target === btn2 || event.target === btn3) {
            clickedBtn = event.target
            console.log(clickedBtn)
            checkAnswer();
        }
    });
})

// presents questions and waits for reply
let quizMaster = () => {
        q=pickQ();
        console.log(q)
        let correct = questions[q]['correct'];
        qTitel.textContent = `Q ${qNumAsked+1} of 10`;
        qText.textContent = questions[q]['q'];
        btn0.textContent = questions[q]['a'][0];
        btn1.textContent = questions[q]['a'][1];
        btn2.textContent = questions[q]['a'][2];
        btn3.textContent = questions[q]['a'][3];
        document.querySelector(`#btn${correct}`).classList.add('correct');
}

// clue lifeline actions, prints an additional clue
clueBtn.addEventListener('click',function(){ 
    clueTxt.textContent = questions[q]['clue'];
    clueBtn.disabled = true;
});

//50/50 lifeline actions, disables two of the buttons
fiftyBtn.addEventListener('click',function(){
    let num1 = questions[q]['fifty'][0];
    let num2 = questions[q]['fifty'][1];
    document.querySelector(`#btn${num1}`).disabled=true;
    document.querySelector(`#btn${num2}`).disabled=true;
    fiftyBtn.disabled = true;
    sec-=5;
});

//friend lifeline actions: picks an answer to suggest and prints it
friendBtn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*5)+1;
    if (num<5) {
        clueTxt.textContent = `I think it is "${questions[q]['a'][questions[q]['correct']]}"`;
    } else {
        clueTxt.textContent = `I think it is "${questions[q]['a'][questions[q]['friend']]}"`;
    }
    friendBtn.disabled = true;
});


