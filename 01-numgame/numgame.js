const guess = document.getElementById("guess");
const report = document.getElementById("report");

document.getElementById("reset").style.visibility = "hidden";
document.getElementById("guess").style.visibility = "hidden";
document.getElementById("report").style.visibility = "hidden";
document.getElementById("yourGuess").style.visibility = "hidden";
document.getElementById("makeGuess").style.visibility = "hidden";

let MAXNUM = document.getElementById("maximum");
let MINNUM = document.getElementById("minimum");

let secret;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame() {
    guess.max = MAXNUM;
    guess.min = MINNUM;

    document.body.style.backgroundColor = `rgb(99, 46, 10)`
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
    }
    else if (myGuess < secret){
        report.innerHTML += `<br>${myGuess} is too small`;
        document.body.style.backgroundColor = "red";
    }
    else if (myGuess > MAXNUM){
        report.innerHTML += `<br>${myGuess} is greater than the maximum`;
        document.body.style.backgroundColor = "red";
    }
    else if (myGuess < MINNUM){
        report.innerHTML += `<br>${myGuess} is less than the minimum`;
        document.body.style.backgroundColor = "red";
    }
    else {
        report.innerHTML += `<br>${myGuess} is too big`;
        document.body.style.backgroundColor = "red";
    }
}

