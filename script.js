let qTitel = document.querySelector('#qNum');
let qText = document.querySelector('#qTxt');
let answrForm = document.querySelector('#answers');
let quiz = document.querySelector('#quiz')
let strtBtn = document.querySelector('#starter');
let intro = document.querySelector('#intro');
let clueBtn = document.querySelector('#clue');
let fiftyBtn = document.querySelector('#fifty');
let friendBtn = document.querySelector('#friend');
let rules = document.querySelector('#rules')
let q;

let questions = {
    1: {q:`some q`,
        a:[``,``,``,``],
        correct: 1,
        asked: false,
        clue:`some clue`,
        friend: 2,
        5050:[2,3]},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {}
}

strtBtn.addEventListener('click',function(){

    //hide intro text and button to reveal quiz text and answer buttons
    strtBtn.style.display = 'none';
    intro.style.display = 'none';
    rules.style.display = 'none';
    clueBtn.classList.remove('d-none');
    fiftyBtn.classList.remove('d-none');
    friendBtn.classList.remove('d-none');


    q=1;
    quizMaster();
})

let quizMaster = () => {
    qTitel.textContent = `Q${q}`;
    qText.textContent = `Here's a question for you with three answer options`;
    let btn0 = document.createElement('button');
    quiz.appendChild(btn0);
    btn0.classList.add('btn');
    btn0.classList.add('w-50');
    btn0.id = '1';
    btn0.textContent = `Answer`
    let btn1 = document.createElement('button');
    quiz.appendChild(btn1);
    btn1.classList.add('btn');
    btn1.classList.add('w-50');
    btn1.id = '1';
    btn1.textContent = `Answer`
    let btn2 = document.createElement('button');
    quiz.appendChild(btn2);
    btn2.classList.add('btn');
    btn2.classList.add('w-50');
    btn2.id = '2';
    btn2.textContent = `wrong answer`
    
}

