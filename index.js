document.querySelector("button").addEventListener("click", function diceRoll(){

    let randomNumber1 = Math.floor(Math.random() * 6 + 1); //generate a random number for first dice
    let randomNumber2 = Math.floor(Math.random() * 6 + 1); //do same for second dice

    document.querySelector(".img1").setAttribute("src", "images/" + "dice" + randomNumber1 + ".png"); //this sets changes the src attribute on the img1 class to the concatenated strings plus the random number generated
    document.querySelector(".img2").setAttribute("src", "images/" +  "dice" + randomNumber2 + ".png"); //this does the above for the img2 class too

    //this block then checks for the winner between the randomized numbers above and dynamically changes the result on the H1 text on the page
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 wins! 🧓🏿";
    } else if (randomNumber1 === randomNumber2){
        document.querySelector("h1").textContent = "Draw!\n👵🏽🤝🏾🧓🏿";
    } else{
        document.querySelector("h1").textContent = "Player 2 wins! 👵🏽";
    }
})
