export default class Paddle {
    constructor(paddleElem) {
        this.paddleElem = paddleElem;
        this.reset();
    }

    get position() {
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"));
    }

    
    set position(value) {
        this.paddleElem.style.setProperty("--position", value);
    }

    update(delta, ballHeight) {
        this.position += (ballHeight-this.position) * speed_cPaddle * delta;
    }

    reset() {
        this.position = 50;
    }

    reflect() {
        return this.paddleElem.getBoundingClientRect();
    }
}

let speed_cPaddle = 0.025;