// game is going to run in an update loop, everytime this loop runs its going to update the position and logic of our game...

// making ball.js and will import it here to make code simpler

import Ball from './ball.js';  // importing Ball class from ball.js
import Paddle from './paddle.js';  // importing Paddle class from paddle.js

let ball = new Ball(document.querySelector('#ball')); // creating new instance of Ball class and passing in the ball element

let pPaddle = new Paddle(document.querySelector('#player-paddle'))
let cPaddle = new Paddle(document.querySelector('#computer-paddle'))
let playerScore = document.querySelector(".player-score")
let computerScore = document.querySelector(".computer-score")
console.log(playerScore.textContent);
console.log(computerScore.textContent);

let lastTime 

function update(time) {  // creating update function that takes in time as a parameter 
    if(lastTime != null) {
        const delta = time - lastTime;
        // updating delta only when last time is present...
        // console.log(delta);
        ball.update(delta, [pPaddle.reflect(), cPaddle.reflect()]); // importing this from ball.js... responsible for updating the position of the ball...
        cPaddle.update(delta, ball.y); // importing this from paddle.js... responsible for updating the position of the computer paddle...

        let hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))

        document.documentElement.style.setProperty("--hue", hue + delta * 0.005)

        if (lost()) {
            after_lost();
        }
    }

    if(parseInt(playerScore.innerHTML) >= 10 || parseInt(computerScore.innerHTML) >= 10) {
        window.location.href = "end-1.html"
    }
    // console.log(time);
    lastTime = time; // setting the last time to the current time
    window.requestAnimationFrame(update);
}

document.addEventListener('mousemove', e => {
    pPaddle.position = (e.y / window.innerHeight)*100; // setting the position of the player paddle to the y value of the mouse event
})


document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    // console.log("up pressed");
    pPaddle.position -= 10;
    pPaddle.position = Math.max(pPaddle.position, 0);
  } else if (e.key === "ArrowDown") {
    pPaddle.position += 10;
    pPaddle.position = Math.min(pPaddle.position, 100);
  }
});


function lost() {
    let outBound = ball.reflect();
    return outBound.right >= window.innerWidth || outBound.left <= 0
    // console.log("lost");
}

function after_lost() {
    let ball_position = ball.reflect();
    if(ball_position.right >= window.innerWidth){
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1
        // console.log();
        localStorage.setItem("player-1-score", playerScore.innerHTML);
    } else if (ball_position.left <= 0){
    // } else {
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1   
        // console.log(computerScore.innerHTML);
        localStorage.setItem("player-2-score", computerScore.innerHTML);

        // could have done it in two steps, like making another variable and then putting it inside the textcontent but learned this, hence using it...
    }
    ball.reset()
    cPaddle.reset()
}

window.requestAnimationFrame(update); // calling the update function everytime the browser is ready to get the next frame

let user = document.querySelector("#username")
let username = localStorage.getItem("username")
user.textContent = username;

let gameAudio = new Audio("./assets/password-infinity-123276.mp3")
window.onload = () => {
  gameAudio.play();
  gameAudio.volume = 0.2;
}