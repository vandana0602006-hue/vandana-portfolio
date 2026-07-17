// Typing effect
const text = ["Aspiring Data Scientist", "Python Learner", "Future Analyst"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const element = document.querySelector(".typing");

    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        element.innerHTML = currentText;

        if (j === text[i].length) isDeleting = true;
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }

    setTimeout(type, 100);
}

type();