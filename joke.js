function fetchJoke (catergary, title) {
    document.getElementById("joke-title").innerText = title;

fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
}
    .then(response => response.json())
    .then(data => {
        let jokeText =""; /* Variable to store the joke text*/
    /* Check if it is a single part or two part joke*/
        if (data.type === "single") {  
            jokeText = data.joke;
        } else {
        }
    })