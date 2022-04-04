//const repeat = document.querySelector(".repeat")
const showWords = document.querySelector(".showWords")
const button = document.querySelector(".btn");
//const box = document.querySelector(".tick");
const buttonMessage = document.querySelector(".message");
const boxMessage = document.querySelector(".messages");
const checkbox = document.querySelector(".checkbox")
button.addEventListener("click", () => { highlight(); wordcount(); showtheWordsonscreen() });

function characters() {
    let func = document.getElementById('analyzebtn').value.replaceAll('.', '');
    const character = func.split(" ");
    return character
}

//word count//
let count = []
function wordcount() {

    let character = characters()
    count.push(character.length)
    checkCount()
    var sum = count.reduce(function (x, y) {
        return x + y;
    }, 0);
    let average = (sum / (count.length))

    if (character.length >= average) {
        document.getElementById('color').style.background = "green";
        
    } else {
        document.getElementById('color').style.background = "orange";
       
    }
    return buttonMessage.innerHTML = ` Word count: ${character.length}`
}

//hide shorter words//
function hide() {
    let character = characters()
    let arr = ''
    longestWord = findLongestWord()
    for (let i = 0; i < character.length; i++) {
        character1 = character[i];
        if (character1.length <= 4) {
            arr += ` <mark class="hidden"> ${character1}</mark>`
        } else if (character1.length > 4) {
            if (character1.length == longestWord) {
                arr += ` <mark style="background-color: #f72585"> ${character1}</mark>`
            } else { arr += ` <mark style="background-color:yellow"> ${character1}</mark>` }
        }
    }
    return boxMessage.innerHTML = arr
}
//find longest word//
function findLongestWord() {
    let character = characters()
    let longestWord = character.reduce(function (longestWord, currentWord) {
        if (currentWord.length >= longestWord.length)
            return currentWord;
        else
            return longestWord;
    });
    return longestWord.length;

}

//highlight long and longer words//
function highlight() {
    let arr = ''
    let character = characters()
    longestWord = findLongestWord()

    for (let i = 0; i < character.length; i++) {
        character1 = character[i];
        if (character1.length > 4) {
            if (character1.length == longestWord) {
                arr += ` <mark style="background-color: #f72585" > ${character1}</mark>`
            } else { arr += ` <mark style="background-color:yellow" > ${character1}</mark>` }
        } else {
            arr += ` ${character1}`
        }
    }
    return boxMessage.innerHTML = arr
}

checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
        hide();
    } else {
        highlight();
    }
});

function checkCount() {
    if (count.length == 5) {
        return count.shift()
    } else {
        return count = count;
    }
}

//keep track of last 5 sentences//


function showtheWordsonscreen() {
    let func = document.getElementById("analyzebtn").value
    getwords()
    saveword.push(func);
    let text = "";
    for (let i = 0; i < saveword.length; i++) {
        text += "<li>" + saveword[i] + "</li>";
    }
    text += "";

    return showWords.innerHTML = text
}
const ul = document.querySelector(".words");
showWords.addEventListener('click', getWords)

function getWords(word) {
    console.log(word.target.innerHTML)
    let func = word.target.innerHTML.text;
    console.log(func)
    const character = func.split(" ");

}



function getwords() {
    if (saveword.length == 5) {
        return saveword.shift()
    } else {
        return saveword = saveword;
    }
}

//function checkCount(){
//  if(count.length==5){
//  return count.shift()
// }else{
// return count=count;
// }
//}
let saveword = [];
if (localStorage['saveWords']) {
    saveword = JSON.parse(localStorage.getItem('saveWords'))
}





