import Ball from './ball.js';
import Paddle from './paddle.js'

let ball = new Ball(document.querySelector('#ball'));

let leftPaddle = new Paddle(document.querySelector('#player-1-paddle'))
let rigthPaddle = new Paddle(document.querySelector('#player-2-paddle'))
let playerScore = document.querySelector(".player-score")
let computerScore = document.querySelector(".computer-score")
console.log(playerScore.textContent);
console.log(computerScore.textContent);

let lastTime;

function update(time) {
    if (lastTime != null){
        let delta = time-lastTime;

        ball.update(delta, [leftPaddle.reflect(), rigthPaddle.reflect()]);

        let hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))

        document.documentElement.style.setProperty("--hue", hue + delta * 0.005)

        if (lost()) {
            after_lost();
        }
    }
    if(parseInt(playerScore.innerHTML) >= 10 || parseInt(computerScore.innerHTML) >= 10) {
      window.location.href = "end-2.html"
  }

    lastTime = time;
    window.requestAnimationFrame(update);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    console.log("up pressed");
    rigthPaddle.position -= 10;
    rigthPaddle.position = Math.max(rigthPaddle.position, 0);
  } else if (e.key === "ArrowDown") {
    rigthPaddle.position += 10;
    rigthPaddle.position = Math.min(rigthPaddle.position, 100);
  }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "w") {
      console.log("w pressed");
      leftPaddle.position -= 10;
      leftPaddle.position = Math.max(leftPaddle.position, 0);
    } else if (e.key === "s") {
      leftPaddle.position += 10;
      leftPaddle.position = Math.min(leftPaddle.position, 100);
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
}

window.requestAnimationFrame(update);

let user1_Name = document.querySelector("#username-1");
let user2_Name = document.querySelector("#username-2");

user1_Name.textContent = localStorage.getItem("player-1_name");
user2_Name.textContent = localStorage.getItem("player-2_name");

let gameAudio = new Audio("./assets/password-infinity-123276.mp3")
window.onload = () => {
  gameAudio.play();
  gameAudio.volume = 0.2;
}