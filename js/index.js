"use strict";
import Joke from './Joke.js';

const app = {
    items: [],
    init() {
        this.getData();
    },
    getData() {
        fetch('https://v2.jokeapi.dev/joke/Any?amount=10')
            .then(Response => Response.json())
            .then(data => console.log(data));

        const htmlString = `<h2>${this.setup}</h2>
        <h3>${this.delivery} 3</h3>`;

        document.querySelector('#list').insertAdjacentHTML('beforeend', htmlString);
    },
    onSearch() {},
    render(message) {}

};
app.init();