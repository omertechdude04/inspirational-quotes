function getRandomQuote() {
    const quotes = ["You can do it.", "Don’t give up.", "Fall down seven times, stand up eight.", "Progress, not perfection.", "Be stubborn about your goals, but flexible about your methods.", "Your future self is already proud of you.", "Storms make trees take deeper roots.", "Some days, showing up is the win.", "Courage doesn’t always roar—sometimes it whispers, ‘try again tomorrow.’", "What if it turns out better than you imagined?", "You’re allowed to be a work in progress and a masterpiece at the same time.", "Tiny steps still move you forward.", "You don’t have to feel ready to begin.", "There is no rewind button—so go forward boldly.", "Build the life you can’t wait to wake up to.", "Even a slow climb reaches the summit.", "Let your fear of regret be stronger than your fear of failure.", "One small crack doesn’t mean you’re broken—it means you were tested and didn’t fall apart.", "Turn the page, even if you don’t like the last chapter.", "If you’re tired, learn to rest, not to quit.", "Success grows in silence—keep going even when no one’s clapping.", "It’s okay if the path is messy—as long as it’s yours.", "Some detours end up being the most scenic parts of the journey.", "Make today so awesome that yesterday gets jealous.", "Be the kind of energy you want to attract.", "You're one decision away from a totally different life.", "Even the darkest night ends with a sunrise.", "You didn’t come this far just to come this far.", "Done is better than perfect.", "Be afraid and do it anyway.", "Everything you need is already inside you.", "Keep watering your soul—even when it feels dry.", "Your pace doesn’t matter. Forward is forward.", "Great things never come from comfort zones."];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    const resultsdiv = document.getElementById("results");
    resultsdiv.textContent = selectedQuote;
}

const button = document.getElementById("myButton");
button.addEventListener("click", function callFunction() {
    getRandomQuote()
});
