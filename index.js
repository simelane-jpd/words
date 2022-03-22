const longestWord = document.querySelector(".longest")
const box = document.querySelector(".tick")
const button = document.querySelector(".btn");
const count = document.querySelector(".counter")
const character = document.querySelector(".text");
const show = document.querySelector(".sentence");


let wordWidget = '';




let myFunc = () => {
    let func = character.value;
    let arr = func.split(' ')
    let go = ''
   
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        const array = arr[i];
        if (array.length >4) {
            go += `<mark style="background-color: #f72585;" >${array}</mark> `
        }
        else {
            go += array + ' '
            counter++
        }
    }

 
    console.log(go);

    show.innerHTML = go;
    count.innerHTML = "Word count: " + arr.length;
}


button.addEventListener('click', myFunc)

//checkbox to hide shorter words//
let myFunc2 = () => {
    let func = character.value;
    let arr = func.split(' ');
    let go = ''
    if (box.checked == true) {
        for (let i = 0; i < arr.length; i++) {
            const array = arr[i]
            if (array.length <= 5) {
                go += `<span style="display: none">${array} </span>`
                
            } else {
                go += array + ' '
            }
        }
        console.log(go);
        show.innerHTML = `<mark style="background-color: #f72585;" >${go}</mark> `
    }
    else {
        myFunc()
    }
}
box.addEventListener('click', myFunc2)


let theLongestWord = ()=> {
    let func = character.value;
    let arr = func.split(/\s/);
    let go = arr.sort( (a, b) => {
        return b.length - a.length

    })
        console.log(go);
        show.innerHTML = `<mark style="background-color:yellow;">${go[0]}</mark> `;

}

longestWord.addEventListener('click', theLongestWord)

//let getTheLongestWord = () => {
   // let func = character.value;
    //let arr = func.split(' ');
    //let go = ''
    //const words = textInput.value;
    //const word = words.split(" ");
  
    //let longestWord = "";
  
    //for (let i = 0; i < arr.length; i++) {
        //if(arr[i].length >= go.length) {
          //  go = arr[i]
        //}
   // }
   // show.innerHTML = `<mark style="background-color: green;">${go}</mark>`;
   // }

   // longestWord.addEventListener('click', getTheLongestWord)

  