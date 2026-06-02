document.addEventListener("DOMContentLoaded", function () {
    const typingTitle = document.querySelector(".js-typing");
    const fadeText = document.querySelector(".anim-fade-up");
    const cards = document.querySelectorAll(".how-card");

    const typingSpeed = 60;

    if (typingTitle) {
        const text = typingTitle.textContent;
        const highlightText = typingTitle.dataset.highlight;
        const highlightStart = text.indexOf(highlightText);
        const highlightEnd = highlightStart + highlightText.length;

        typingTitle.textContent = "";

        text.split("").forEach(function (letter, index) {
            const span = document.createElement("span");

            if (letter === " ") {
                span.innerHTML = "&nbsp;";
            } else {
                span.textContent = letter;
            }

            span.classList.add("typing-letter");

            if (
                highlightStart !== -1 &&
                index >= highlightStart &&
                index < highlightEnd
            ) {
                span.classList.add("highlight-word");
            }

            typingTitle.appendChild(span);

            setTimeout(function () {
                span.classList.add("show");
            }, index * typingSpeed);
        });

        const totalTypingTime = text.length * typingSpeed + 200;

        setTimeout(function () {
            const highlightLetters = typingTitle.querySelectorAll(".highlight-word");

            highlightLetters.forEach(function (letter) {
                letter.classList.add("blink-once");
            });
        }, totalTypingTime);

        if (fadeText) {
            setTimeout(function () {
                fadeText.classList.add("show");
            }, totalTypingTime + 300);
        }

        cards.forEach(function (card, index) {
            setTimeout(function () {
                card.classList.add("show");
            }, totalTypingTime + 700 + index * 200);
        });
    }
});