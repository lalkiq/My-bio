
const element = document.getElementById('text');
let textArray = [
    "Hello! I am 14 years old boy from Ukraine, styding in online school Hillel. Now i am learning html, css and js.",
    "My social networks:"
];
let index = 0;
let currentTextIndex = 0;
let animating = false;

function type() {
    if (index < textArray[currentTextIndex].length) {
        element.innerHTML += textArray[currentTextIndex][index];
        index++;
        setTimeout(type, 50);
    } else {
        animating = false;
        currentTextIndex++;
        if (currentTextIndex < textArray.length) {
            index = 0;
            element.innerHTML += "<br><br>";
            setTimeout(type, 1000);
        }
    }
}

type();

