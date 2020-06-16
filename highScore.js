let newScore = localStorage.getItem('newScore');
const aliasInput = document.querySelector('#alias');
const aliasBtn = document.querySelector('#aliasBtn');
const aliasList = document.querySelector('#aliasList');
const scoreList = document.querySelector('#scoreList');
let pastScores = localStorage.getItem('scoreTable');
let storedScores;
//read past scores and write them to the page
if (!pastScores) {
    storedScores = [['Comp',35]];
    console.log(storedScores.length)
} else {
    storedScores = JSON.parse(pastScores);
}


let displayScores = (scoreArr) => {
    aliasList.textContent='';
    scoreList.textContent='';

    for (i=0; i<scoreArr.length; i++) {
        
        //create two list items, add classes from bootstrap as well as 'oddRow' for odd rows
        //append li's to respective uls
    }
}

//wait for user input of alias

//add alias + neew score to all scores array

//write all scores array to page.

//BONUS sort array to show ranking