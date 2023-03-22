"use strict";

class Joke {
    constructor(setup, delivery) {
        this.setup = setup;
        this.delivery = delivery;
    }
    get htmlString() {
        return `
        <h2>${this.setup}</h2>
        <h3>${this.delivery}</h3>`;
    }
}
export default Joke;