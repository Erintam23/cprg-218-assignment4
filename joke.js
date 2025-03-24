function fetchJoke (cate, title) {
    document.getElementById("joke-title").innerText = title;

fetch(`https://v2.jokeapi.dev/joke/${cate}?safe-mode`)

    .then(response => response.json())
    .then(data => {
        let jokeText ="";
 /* Variable to store the joke text*/
    /* Check if it is a single part or two part joke*/
        if (data.type === "single") {  
            jokeText = data.joke;
            console.log (jokeText);
        } else {
            jokeText = `${data.setup} ... ${data.delivery}`;
            console.log (jokeText);
        }
        document.getElementById("joke-text").innerText = jokeText;
    })
    document.getElementById("joke-text").innerText = "Failed to load joke. Try again!";
    console.error("Error fetching joke:", error);

/* load a random joke when the page open */
window.onload = function () {
    fetchJoke ("Any, Joke Of The Day");

}}