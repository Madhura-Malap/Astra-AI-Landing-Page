/* Scroll Reveal */

window.addEventListener("scroll", reveal);

function reveal(){

    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;

        let revealTop = reveals[i].getBoundingClientRect().top;

        let revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");

        }else{

            reveals[i].classList.remove("active");
        }
    }
}

reveal();

/* Dark Mode Toggle */

const darkToggle =
document.getElementById("dark-toggle");

if(darkToggle){

    darkToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            darkToggle.innerHTML = "☀️";

        }else{

            darkToggle.innerHTML = "🌙";
        }
    });
}

/* Floating Particles */

const particlesContainer =
document.getElementById("particles");

if(particlesContainer){

    for(let i = 0; i < 30; i++){

        let particle =
        document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
        Math.random() * 100 + "vw";

        particle.style.animationDuration =
        10 + Math.random() * 10 + "s";

        particle.style.width =
        particle.style.height =
        Math.random() * 6 + 4 + "px";

        particlesContainer.appendChild(particle);
    }
}

/* Loader */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 800);

        }, 1200);
    }
});

/* Custom Cursor */

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";
});

/* Mouse Parallax */

document.addEventListener("mousemove", (e) => {

    const blob1 =
    document.querySelector(".blob1");

    const blob2 =
    document.querySelector(".blob2");

    let x = e.clientX / 40;

    let y = e.clientY / 40;

    blob1.style.transform =
    `translate(${x}px, ${y}px)`;

    blob2.style.transform =
    `translate(${-x}px, ${-y}px)`;
});

/* FAQ Accordion */

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
        question.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

        }else{

            answer.style.display = "block";
        }
    });
});