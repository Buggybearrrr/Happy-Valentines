// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");  // ✅ FIXED: Changed from ".btn[alt='yes']"

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");  // ✅ FIXED: Changed "documents" to "document" and "fianlText" to "finalText"

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    } ,50);
});

// Logic for NO button

noBtn.addEventListener("mousemove", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.1s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "I LOVE YOU SO MUCHHHHHHHHH!";

    catImg.src = "cat_flyingkiss.gif";

    document.querySelector(".letter-window").classList.add("open");

    buttons.style.display = "none";

    finalText.style.display = "block";  // ✅ FIXED: Changed "fianlText" to "finalText"
});