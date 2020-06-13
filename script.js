let qTitel = document.querySelector('#qNum');
let qText = document.querySelector('#qTxt');
let answrForm = document.querySelector('#answers');
let quiz = document.querySelector('#quiz')
let strtBtn = document.querySelector('#starter');
let intro = document.querySelector('#intro');
let q;

strtBtn.addEventListener('click',function(){
    console.log("starting")
    strtBtn.style.display = 'none';
    intro.style.display = 'none';

    q=1;
    quizMaster();
})

let quizMaster = () => {
    qTitel.textContent = `Q${q}`;
    qText.textContent = `Here's a question for you with three answer options`;
    let btn1 = document.createElement('button');
    quiz.appendChild(btn1);
    btn1.classList.add('btn');
    btn1.id = '1';
    btn1.textContent = `Answer`
    console.log(btn1);
}