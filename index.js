const box = document.querySelector(".tick")
const button = document.querySelector(".btn");
const count = document.querySelector(".counter")
const character = document.querySelector(".text");
const show = document.querySelector(".sentence");

let words = '';




let myFunc = () => {
    let func = character.value;
    let arr = func.split(' ')
    let sent = ''
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        const array = arr[i];
        if (array.length >= 5) {
            sent += `<mark style="background-color: #f72585;" >${array}</mark>`
        }
        else {
            sent += array + ' '
            counter++
        }
    }
    console.log(sent);
    show.innerHTML = sent;
    count.innerHTML = "Word count: " + arr.length;
}

button.addEventListener('click', myFunc)


let myFunc2 = () => {
    let func = character.value;
    let arr = func.split(' ');
    let sent = ''
    if (box.checked == true) {
        for (let i = 0; i < arr.length; i++) {
            const array = arr[i]
            if (array.length <= 5) {
                sent += `<span style="display: none">${array} </span>`
            } else {
                sent += array + ' '
            }
        }
        console.log(sent);
        show.innerHTML = sent;
    }
    else {
        myFunc()
    }
}
box.addEventListener('click', myFunc2)
