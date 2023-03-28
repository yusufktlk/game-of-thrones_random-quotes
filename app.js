const button = document.querySelector(".button")
const quote = document.querySelector(".quote")
const author = document.querySelector(".character")
const twitter = document.getElementById("twitter")

function randomQuote(){
    fetch("https://api.gameofthronesquotes.xyz/v1/random").then(res => res.json()).then(result => {
        console.log(result)
    quote.innerHTML = result.sentence;
    author.innerHTML = result.character.name
    })
}

button.addEventListener("click", randomQuote)

twitter.addEventListener("click", () => {
    const tweet = `https://twitter.com/intent/tweet?url=${quote.innerHTML}`
    window.open(tweet, "_blank")
})