// =======================
// Typing Animation
// =======================
const shopName = "Sharma Electronics — Sales & Service ⚡";
const typingElement = document.getElementById("shopName");
let index = 0;

function typeEffect() {
  if (index < shopName.length) {
    typingElement.textContent += shopName.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // typing speed (ms)
  } else {
    // Add blinking cursor effect
    typingElement.style.borderRight = "2px solid gold";
    setInterval(() => {
      typingElement.style.borderRight =
        typingElement.style.borderRight === "2px solid gold"
          ? "2px solid transparent"
          : "2px solid gold";
    }, 500);
  }
}

// Start typing when page loads
window.onload = typeEffect;

// =======================
// Smooth Scroll Effect
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// =======================
// Scroll Reveal Effect
// =======================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < revealElements.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = revealElements[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      revealElements[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
