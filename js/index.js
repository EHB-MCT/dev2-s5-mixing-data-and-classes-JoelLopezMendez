"use strict";
import Joke from './Joke.js';

const app = {
    items: [],
    init() {
        this.getData();
    },
    getData() {
        //Data aanpassen naar JSON 
        fetch('https://v2.jokeapi.dev/joke/Any?amount=10')
            .then(function (response) {
                return response.json();
            })
            // JSON op de console laten verschijnen
            .then(function (json1) {
                console.log(json1.jokes);

                // const joke = new Joke(json1.jokes.setup, json1.jokes.delivery);
                // console.log(joke);

                // [De data ider appart laten verschijnen op de console]
                json1.jokes.forEach(function (haha) {
                    const jokeHa = new Joke(haha.setup, haha.delivery);
                    console.log(jokeHa);
                });
            });
    },

    onSearch() {},
    render(message) {}
};

app.init();