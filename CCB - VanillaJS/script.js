document.addEventListener('DOMContentLoaded', () => {
    const jokeBtn = document.getElementById('jokeBtn');
    jokeBtn.addEventListener('click', displayJoke);
    document.querySelector('#factBtn').addEventListener('click', displayFact);
});


async function displayFact(){
    const API = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";

    const response = await fetch(API, { 
        headers : {
            'accept' : 'application/json'
        }
    })

    const data = await response.json(); //must be await because it's asyncronous communication
    //console.log(data);

    const para = document.createElement('p'); //creates a new html p tag but doesn't add it
    para.innerText = data.text; // set the fact to the text

    const jokeDiv = document.getElementById("joke"); //create a connection to the joke div in html
    jokeDiv.appendChild(para); // append as a child to the joke div
}


function displayJoke(){
    //fetch then promise
    fetch("https://icanhazdadjoke.com/", {
        //we need to add a header
        //all api's are different

        headers : {
            //k/v pairs
            'accept' : 'application/json'
        }
    })

    //when you fetch an api, you get back a response
    // get it back by using a .then

    .then((response) =>{
        //response variable is actually the promise
        //console.log('response');

        const data = response.json();  //allows you to hold the response in json format
        //console.log(data);
        return data;
    })

    .then((data) =>{
        //console.log(data.joke);
        const jokeDiv = document.getElementById('joke');
        jokeDiv.innerText = data.joke;
    })
}