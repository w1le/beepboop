var number, currentNumber, score = 0;
var min = 1;
var max = 10;
var seconds = 60;



function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


number = getRandomInRange(min, max);
console.log(number);

(function() {
    document.querySelector('input').addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            currentNumber = document.getElementById("numbers").value;
            document.getElementById("numbers").value = "";
            console.log(currentNumber);
            if (currentNumber > number) {
                document.getElementById("label").innerHTML = "less";
                beep.play();
            }
            if (currentNumber < number) {
                document.getElementById("label").innerHTML = "more";
                boop.play();
            }
            if (currentNumber == number) {
                document.getElementById("label").innerHTML = "successful: " + currentNumber;
                setTimeout(newGame, 1000);
                seconds += 10;
                beepboop.play();
            }
        }
    });


})();

function newGame() {
    document.getElementById("label").innerHTML = "New Game";
    max += number;
    number = getRandomInRange(1, max);
    document.getElementById("about").innerHTML = "1..." + max;
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
    setTimeout(document.getElementById("label").innerHTML = "", 1000);
}

setInterval(function() { getCountdown(); }, 1000);

function getCountdown() {
    document.getElementById("timer").innerHTML = seconds + " sec";
    seconds -= 1;
    if (seconds == 0) {
        if (alert('GameOver! Your score: ' + score)) {} else window.location.reload();
    }
}

var beepboop = new Audio(); // Создаём новый элемент Audio
beepboop.src = 'beepboop.mp3'; // Указываем путь к звуку "клика"

var beep = new Audio(); // Создаём новый элемент Audio
beep.src = 'beep.mp3'; // Указываем путь к звуку "клика"

var boop = new Audio(); // Создаём новый элемент Audio
boop.src = 'boop.mp3'; // Указываем путь к звуку "клика"