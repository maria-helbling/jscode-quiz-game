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
        q:`A way to store values`,
        a:[`a variable`,`a string`,`a function`,`a method`],
        correct: 0,
        asked: false,
        clue:`In maths often denoted with x or y`,
        friend: 1,
        fifty:[2,3]
        },
    5: {
        q:`A way to choose, which block of code runs.`,
        a:[`a conditional statement`,`a loop`,`a logical operator`,`a function`],
        correct: 0,
        asked: false,
        clue:`Written with an if-else or switch statement`,
        friend: 2,
        fifty:[1,3]
        },
    6: {
        q:`A way to do something repeatedly a set number of times`,
        a:[`a variable`,`a function`,`a conditional statement`,`a loop`],
        correct: 3,
        asked: false,
        clue:`There are many versions of this: for, while, case etc`,
        friend: 2,
        fifty:[0,1]
        },
    7: {
        q:`A named piece of code that performs a specific task`,
        a:[`a loop`,`a function`,`an array`,`a boolean`],
        correct: 1,
        asked: false,
        clue:`It optionally takes parameters and may return a value`,
        friend: 0,
        fifty:[2,3]
        },
    8: {
        q:`This is an increment operator`,
        a:[`++`,`&&`,`||`,`""`],
        correct: 0,
        asked: false,
        clue:`increases a numerical value by 1`,
        friend: 2,
        fifty:[1,3]
        },
    9: {
        q:`Logical operator where both sides must be true to evaluate to true`,
        a:[`if-else`,`||`,`&&`,`do-While`],
        correct: 2,
        asked: false,
        clue:`Known as logical and`,
        friend: 0,
        fifty:[1,3]
        },
    10: {
        q:`JS refers to each tab of the browser as this.`,
        a:[`a document`,`a tab`,`a window`,`a DOM`],
        correct: 2,
        asked: false,
        clue:`it is the parent element of document`,
        friend: 3,
        fifty:[0,1]
        },
    11: {
        q:`Every item in the DOM tree is called this.`,
        a:[`an element`,`a node`,`a variable`,`a DOM`],
        correct: 1,
        asked: false,
        clue:`there are two types: element and text`,
        friend: 2,
        fifty:[0,3]
        },
    12: {
        q:`Prints numbers 1 through 3 to console.`,
        a:[`if (number<4) {console.log(number)}`,`for (i=0; i<3; i++){console.log(i+1)}`,`console.log(1,2,3)`,`1+2+3`],
        correct: 1,
        asked: false,
        clue:`It is a loop.`,
        friend: 2,
        fifty:[0,3]
        },
    13: {
        q:`Makes an HTML item text color red`,
        a:[`node.style.color = 'red'`,`node.style.textColor = 'red'`,`node.value = 'red'`,`node.makeText(red)`],
        correct: 0,
        asked: false,
        clue:`text color is under the style attribute of a node`,
        friend: 3,
        fifty:[1,2]
        },
    14: {
        q:`Adds 'nuts' to the end of favFoods array.`,
        a:[`favFoods.pop('nuts')`,`favFoods.end('nuts')`,`favFoods += 'nuts'`, `favFoods.push('nuts')`],
        correct: 3,
        asked: false,
        clue:`Sounds like you are squeezing something in there.`,
        friend: 1,
        fifty:[0,2]
        },
    15: {
        q:`Evaluates to 10`,
        a:[`Math.random()*10`,`Math.round(10.8)`,`Math.ceil(10.8)`,`Math.floor(10.8)`],
        correct: 3,
        asked: false,
        clue:`Always rounds down to the nearest integer`,
        friend: 2,
        fifty:[0,1]
        },
    16: {
        q:`This is a falsy value.`,
        a:[`0`,`'text'`,`-10`,`true`],
        correct: 0,
        asked: false,
        clue:`1 would be truthy.`,
        friend: 2,
        fifty:[1,3]
        },
    17: {
        q:`This expression stops a function's code from running`,
        a:[`break`,`stop`,`return`,`exit`],
        correct: 2,
        asked: false,
        clue:`It can be omitted in arrow functions`,
        friend: 0,
        fifty:[1,2]
        },
    18: {
        q:`This expression evaluates to true.`,
        a:[`5 === '5'`,`5 == '5'`,`5 !== '5'`,`5 >= '5'`],
        correct: 1,
        asked: false,
        clue:`This expression doesn't consider data type when comparing`,
        friend: 2,
        fifty:[0,3]
        },
    19: {
        q:`The scope of variables that can be accessed in all parts of the script.`,
        a:[`functional`,`absolute`,`global`,`local`],
        correct: 2,
        asked: false,
        clue:`These are declared outside any functions`,
        friend: 3,
        fifty:[0,1]
        },
    20: {
        q:`These are optionally added as inputs when declaring functions`,
        a:[`ideas`,`numbers`,`variables`,`parameters`],
        correct: 3,
        asked: false,
        clue:`Also known as arguments`,
        friend: 2,
        fifty:[0,1]
        }
}

// timer function counting down from 120
function setTime() {
    var timerInterval = setInterval(function() {
      sec--;
      timer.textContent = sec;
  
      if(sec <= 0 || qNumAsked>=10) {
        clearInterval(timerInterval);
        localStorage.setItem('newScore', 0);
        window.location.href = 'highscore.html';
      }
  
    }, 1000);
  }

  // random question generator, check that we don't ask same q twice
let pickQ = () => {
    let found = false;
    let x;
    while (!found) {
        x = Math.floor(Math.random()*21);
        if (!questions[x]['asked']) {
            questions[x]['asked']=true
            found=true
        }
    }
    return x
}

// checks answers, adjusts btn color and score, resets settings for new question, checks nr of questions asked
let checkAnswer = () => {
    // let correctBtn = document.querySelector('.correct');
    let correctBtn = document.querySelector(`[data-index="${questions[q]['correct']}"]`);
    // check if answer is incorrect to deduct from time
    if (clickedBtn.getAttribute('data-index') != questions[q]['correct']) {sec-=10} //must  add min of sec and 10 if less secs left
    correctBtn.style.boxShadow='0 0 30px forestgreen';
    // wait to display correct answer
    setTimeout(function(){
        // reset all styles
        correctBtn.style.boxShadow='none';
        correctBtn.classList.remove('correct');
        btn0.disabled = false;
        btn1.disabled = false;
        btn2.disabled = false;
        btn3.disabled = false;
        clueTxt.textContent = '';
        clickedBtn.active = false;
        // check if quiz is over
        qNumAsked++;
        if (qNumAsked>=10) {
            score = sec;
            console.log(score);
            localStorage.setItem('newScore', score);
            window.location.href = 'highscore.html';
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
        if (event.target.matches('button')) {
            clickedBtn = event.target
            checkAnswer();
        }
    });
})

// presents questions
let quizMaster = () => {
        q=pickQ();
        let correct = questions[q]['correct'];
        qTitel.textContent = `Q ${qNumAsked+1} of 10`;
        qText.textContent = questions[q]['q'];
        btn0.textContent = questions[q]['a'][0];
        btn1.textContent = questions[q]['a'][1];
        btn2.textContent = questions[q]['a'][2];
        btn3.textContent = questions[q]['a'][3];
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
    document.querySelector(`[data-index="${num1}"]`).disabled=true;
    document.querySelector(`[data-index="${num2}"]`).disabled=true;
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


