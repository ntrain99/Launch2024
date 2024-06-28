const guess = document.getElementById("guess");
const report = document.getElementById("report");

document.getElementById("reset").style.visibility = "hidden";
document.getElementById("yourGuess").style.visibility = "hidden";
document.getElementById("guess").style.visibility = "hidden";
document.getElementById("report").style.visibility = "hidden";
document.getElementById("makeGuess").style.visibility = "hidden";
document.getElementById("startGame").style.visibility = "hidden";

let MAXNUM;
let MINNUM;

let secret;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function  easy() {
    MINNUM = 1;
    MAXNUM = 5;
    document.getElementById("difficulty1").style.backgroundColor = "gray";
    document.getElementById("difficulty1").style.color = "white";
    document.getElementById("startGame").style.visibility = "visible";
    document.getElementById("difficulty2").style.backgroundColor = "white";
    document.getElementById("difficulty2").style.color = "black";
    document.getElementById("difficulty3").style.backgroundColor = "white";
    document.getElementById("difficulty3").style.color = "black";
    
}
function  medium() {
    MINNUM = 1;
    MAXNUM = 50;
    document.getElementById("difficulty2").style.backgroundColor = "gray";
    document.getElementById("difficulty2").style.color = "white";
    document.getElementById("startGame").style.visibility = "visible";
    document.getElementById("difficulty3").style.backgroundColor = "white";
    document.getElementById("difficulty3").style.color = "black";
    document.getElementById("difficulty1").style.backgroundColor = "white";
    document.getElementById("difficulty1").style.color = "black";
}
function  hard() {
    MINNUM = 1;
    MAXNUM = 100;
    document.getElementById("difficulty3").style.backgroundColor = "gray";
    document.getElementById("difficulty3").style.color = "white";
    document.getElementById("startGame").style.visibility = "visible";
    document.getElementById("difficulty2").style.backgroundColor = "white";
    document.getElementById("difficulty2").style.color = "black";
    document.getElementById("difficulty1").style.backgroundColor = "white";
    document.getElementById("difficulty1").style.color = "black";
}


function loadGame() {
    guess.max = MAXNUM;
    guess.min = MINNUM;

    document.getElementById("yourGuess").style.visibility = "visible";
    document.getElementById("guess").style.visibility = "visible";
    document.getElementById("report").style.visibility = "visible";
    document.getElementById("makeGuess").style.visibility = "visible";

    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "black";
    document.getElementById("reset").style.visibility = "hidden";
    secret = Math.random()
    let range = MAXNUM-MINNUM+1; //Calculate range of numbers
    secret=secret*range;
    secret=secret+MINNUM;
    secret=Math.floor(secret); //Convert Float to integer
    report.innerHTML = "Report";
}

function makeGuess() {
    let myGuess = parseInt(guess.value); // GET FROM DOCUMENT!
    if (myGuess == secret) {
        report.innerHTML += `<br>${myGuess} is correct`;
        let blue = 255;
        document.body.style.backgroundColor = "lightgreen";
        document.body.style.backgroundColor = `rgb(100,0, ${blue})`
        myConfetti({
            particleCount: 100,
            spread: 160
        })
        document.getElementById("reset").style.visibility = "visible";
        document.body.style.color = "aliceblue";
    }
    else if (myGuess < secret){
        report.innerHTML += `<br>${myGuess} is too small`;
        document.body.style.backgroundColor = "darkred";
        document.body.style.color = "aliceblue";
    }
    else if (myGuess > MAXNUM){
        report.innerHTML += `<br>${myGuess} is greater than the maximum`;
        document.body.style.backgroundColor = "darkred";
        document.body.style.color = "aliceblue";
    }
    else if (myGuess < MINNUM){
        report.innerHTML += `<br>${myGuess} is less than the minimum`;
        document.body.style.backgroundColor = "darkred";
        document.body.style.color = "aliceblue";
    }
    else {
        report.innerHTML += `<br>${myGuess} is too big`;
        document.body.style.backgroundColor = "darkred";
        document.body.style.color = "aliceblue";
    }
}

