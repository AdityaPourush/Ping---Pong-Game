export default class Ball {     // making a Ball class to be used in game
    constructor(ballElam) {
        this.ballElam = ballElam;
        this.reset();
    }

// Setting "X" - axis value
// Define a getter function for the 'x' property
    get x() {
        // Get the computed style for the 'ballElam' element
        let computedStyle = getComputedStyle(this.ballElam);
        
        // Get the value of the '--x' CSS variable from the computed style
        let xValue = computedStyle.getPropertyValue("--x");
        
        // Parse the 'xValue' as a float and return it
        return parseFloat(xValue);
    }

// This method is used to set the value of the 'x' property.
// It updates the '--x' CSS variable of the 'ballElam' element.
// The 'value' parameter is the new value to be set.
    set x(value) {
        // Set the '--x' CSS variable of 'ballElam' to the 'value'
        this.ballElam.style.setProperty("--x", value);
    }

// Setting "Y" - axis value:
    get y() {
        return parseFloat(getComputedStyle(this.ballElam).getPropertyValue("--y"));
    }

    set y(value) {
        this.ballElam.style.setProperty("--y", value);
    }
    
    reflect() {
        return this.ballElam.getBoundingClientRect();
    }
    
    reset() {
        this.x = 50;
        this.y = 50;
        this.direction = { x : 0}
        while(Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9) {
            let angle = getRandomNumberbw(0, 2 * Math.PI);
            this.direction = {x : Math.cos(angle), y : Math.sin(angle)}
        }
        // console.log(this.direction);
        this.velocity = initialVelocity
    }
    
    update(delta, paddleArea) {
        this.x += this.direction.x * initialVelocity * delta;
        this.y += this.direction.y * initialVelocity * delta;
        this.velocity += 0.00001 * delta
        let reflect = this.reflect()

        if (reflect.bottom >= window.innerHeight || reflect.top <= 0){
            this.direction.y *= -1
        }
        if(paddleArea.some(r => collide(r, reflect))){
            this.direction.x *= -1
        }
    }


}

function getRandomNumberbw(min, max) {
    let num = Math.random() * (max-min);
    let randomNum = num + min;
    return randomNum;
}

let initialVelocity = 0.03

function collide(area1, area2) {
    return (area1.left <= area2.right && 
    area1.right >= area2.left && 
    area1.top <= area2.bottom && 
    area1.bottom >= area2.top)
}