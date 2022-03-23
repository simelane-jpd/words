button.addEventListener("click", () => {highlight(); wordcount()});

function characters() {
    let func = document.getElementById('analyzebtn').value.replaceAll('.', '');
    const character = func.split(" ");
    return character
}

//word count//
let count=[]
function wordcount() {
   
    let character = characters()
    count.push(character.length)
    checkCount()
    var sum = count.reduce(function (x, y) {
        return x + y;
    }, 0);
    let average =(sum/(count.length))
    
    if(character.length>=average){
        document.getElementById('desk').style.background = "#f72585";
    }else{
        document.getElementById('desk').style.background = "#ffba08";
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
            } else {arr += ` <mark style="background-color:#ffba08"> ${character1}</mark>` }
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
            } else { arr += ` <mark style="background-color:#ffba08" > ${character1}</mark>` }
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

function checkCount(){
    if(count.length==5){
        return count.shift()
    }else{
        return count=count;
    }
}














