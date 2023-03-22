"use strict";

class Joke {
    constructor(setup, delivery) {
        this.setup = setup;
        this.delivery = delivery;
    }
    get htmlString() {
        return `
    <h2>${Joke.setup}</h2>
    <h3>${this.delivery} 3</h3>`;
    }
}

const arrJoke = new Joke("Why did the ghost go inside the bar?", "For the boos.");

console.log(arrJoke);

export default Joke;