



const texts = [
    "Hello, world!",
    "Welcome to my site!",
    "Have a great day!",
    "JavaScript is fun!",
    "Enjoy your visit!"
];

function changeText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    document.getElementById("text").innerText = texts[randomIndex];
}