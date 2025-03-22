function fetchJoke (catergary, title) {
    document.getElementById("joke-title").innerText = title;

fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
}