let newScore = localStorage.getItem('newScore');
const aliasInput = document.querySelector('#alias');
const aliasBtn = document.querySelector('#aliasBtn');
const aliasList = document.querySelector('#aliasList');
const scoreList = document.querySelector('#scoreList');
const againBtn = document.querySelector('#againBtn')
let pastScores = localStorage.getItem('scoreTable');
let storedScores;

//read past scores and write them to the page
if (!pastScores) {
    storedScores = [['Comp',35]];
    console.log(storedScores.length)
} else {
    storedScores = JSON.parse(pastScores);
}

//write all scores array to page.
let displayScores = (scoreArr) => {
    // sorts the array in descending order (so you see rank)
    scoreArr.sort(compareFn =(a, b)=>{
        console.log(a);
        console.log(b);
        if (parseInt(a[1]) < parseInt(b[1])) {
            return 1
        } else if (parseInt(a[1]) > parseInt(b[1])) {
            return -1
        }
        return 0
    })

    aliasList.textContent='';
    scoreList.textContent='';

    for (i=0; i<scoreArr.length; i++) {
        //create two list items, add classes from bootstrap as well as 'evenRow' for odd rows
        let aliasItem = document.createElement('li');
        let scoreItem = document.createElement('li');
        aliasItem.classList.add('list-group-item')
        scoreItem.classList.add('list-group-item')
        
        // style every other line
        if ( i%2 === 0 ) {
            aliasItem.classList.add('evenRow')
            scoreItem.classList.add('evenRow')
        }
        // highlight the one just added
        if (scoreArr[i][0]===aliasInput.value) {
            aliasItem.style.fontWeight = 'bold'
            scoreItem.style.fontWeight = 'bold'
        }

        aliasItem.textContent = scoreArr[i][0]
        scoreItem.textContent = scoreArr[i][1]

        //append li's to respective ul
        aliasList.appendChild(aliasItem);
        scoreList.appendChild(scoreItem);
    }
}

//add alias + neew score to all scores array
let addNewScores = (newAlias) => {
    let newArr = [newAlias.trim(), newScore]
    storedScores.push(newArr);
}

// store all known scores to local storage
let storeNewScores = () => {
    storedScores = JSON.stringify(storedScores);
    localStorage.setItem('scoreTable',storedScores);
}
//display old high scores before user has done input
displayScores(storedScores);

// wait for user input
aliasBtn.addEventListener('click',function(event){
    event.preventDefault();
    aliasBtn.classList.add('d-none');
    aliasInput.classList.add('d-none');
    againBtn.classList.remove('d-none');
    addNewScores(aliasInput.value);
    displayScores(storedScores);
    storeNewScores();
})

// redirect to retake the quiz
againBtn.addEventListener('click',function(){
    window.location.href = 'index.html';
})

   