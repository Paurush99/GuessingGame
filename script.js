let number = Math.floor(Math.random() * 21) + 1;
let highScore = 20;

function random() {
    number = Math.floor(Math.random() * 21) + 1;
    console.log(number);
    document.getElementById('in').value="";
    return number;
}

function guess() {
    let inputText = document.getElementById('in').value;
    console.log(inputText);
    console.log(number);



    let emoji;
    let answer;

    if (highScore === 0) {
        answer = "game over"
        emoji = 9940;

    } else if (inputText > number) {

        answer = "Too High"
        highScore -= 1;
        console.log(highScore);
        emoji = 128200;

    } else if (inputText < number) {

        answer = "Too Low";
        highScore -= 1;
        console.log(highScore);
        emoji = 128201;

    } else {

        answer = "Correct guess";
        console.log(highScore);
        emoji = 9989;

    }

    console.log(answer);

    document.getElementById('out').innerHTML = answer
    document.getElementById('score').innerHTML = "Score:" + highScore;
    document.getElementById('emoji').innerHTML = "&#" + emoji




}