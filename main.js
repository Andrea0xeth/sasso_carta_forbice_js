var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;
var cont = 0;
var match = [];

function score() {
    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;

}
setInterval(score, 50);
function convert(word) {
    if (word === "paper") return '<i class="far fa-hand-paper"></i>';
    if (word === "rock") return '<i class="far fa-hand-rock"></i>';
    return '<i class="far fa-hand-scissors"></i>'
}

function game(UserChoice) {
    while (UserPoints < 4 && ComPoints < 4) {
        var box = document.getElementById("challenge");
        box.style.display = "inline-flex";
        var userDiv = document.getElementById("YourObject");
        userDiv.innerHTML = convert(UserChoice);
        var comDiv = document.getElementById("ComObject");
        comDiv.innerHTML = convert(ComChoice);
        if (UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper") {
            win(UserChoice);
        } else if (UserChoice === ComChoice) {
            draw(UserChoice);
        } else {
            lose(UserChoice);
        }
        
        function continuGame(){
            i = Math.floor(Math.random() * 3);
            ComChoice = choices[i];
            box.style.display = "none";
        }
        setTimeout(continuGame, 1200);

        if (UserPoints >= 3) {
            match.push(" - Tu hai vinto");
            UserPoints = 0;
            ComPoints = 0;
            cont++;
        } else if (ComPoints >= 3) {
            match.push(" - SoftStrategy Vince");
            ComPoints = 0;
            UserPoints = 0;
            cont++;
        }
        /*var table = document.getElementById("myTable");
        var row = table.insertRow(match[cont++]);
        row.innerHTML = match[cont++];
        console.log(match);*/
        var mytable = "<table>";
        for (var CELL of match) {
            mytable += "<tr><td>" + CELL + "</td></tr>";
        }
        mytable += "</table>";
        document.getElementById("myTable").innerHTML = mytable;
        return;
    }

    let jsonObject = {};  
    empArray.forEach(item => obj[item.id] = item.name);  
    let json = JSON.stringify(mytable);  
    console.log(empArray);  
    console.log(json);  
    






    function continueGame() {
        var box = document.getElementById("challenge");
        i = Math.floor(Math.random() * 3);
        ComChoice = choices[i];
        box.style.display = "none";
    }





}

function control() {
    if (UserPoints === 3 || ComPoints === 3) {
        console.log("Finito");
    }
    setTimeout(continuGame, 1200);
}



function win(bn) {
    UserPoints++;
    document.getElementById("who").innerHTML = "Hai Vinto :D";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1200);
}

function draw(bn) {
    document.getElementById("who").innerHTML = "PAREGGIO :/";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("yellow");
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("yellow");
    }, 1200);
}

function lose(bn) {
    ComPoints++;
    document.getElementById("who").innerHTML = "Hai perso :(";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("red");
    }, 1200);
}