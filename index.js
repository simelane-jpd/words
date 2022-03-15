const countword = () => {
    let characters = document.getElementById('character').value.length;

    let word = document.getElementById('character').value;
    document.getElementById('allcharacter').innerHTML = characters;

    word = word.match(/\w+/g);
    word = word.length;
    document.getElementById('allcharacter').innerHTML = word;
}
