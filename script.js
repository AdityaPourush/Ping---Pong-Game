// game is going to run in an update loop, everytime this loop runs its going to update the position and logic of our game...

// making ball.js and will import it here to make code simpler

import Ball from './ball.js';  // importing Ball class from ball.js

let ball = new Ball(document.querySelector('#ball')); // creating new instance of Ball class and passing in the ball element
let lastTime 

function update(time) {  // creating update function that takes in time as a parameter 
    if(lastTime != null) {
        const delta = time - lastTime;
        // updating delta only when last time is present...
        // console.log(delta);
        ball.update(delta); // importing this from ball.js...
    }
    // console.log(time);
    lastTime = time; // setting the last time to the current time
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update); // calling the update function everytime the browser is ready to get the next frame