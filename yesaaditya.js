document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("nav").style.top = "0px"; 
});

const sections = document.querySelectorAll(".hero2");

function checkSections() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            section.classList.add("show");
        } 
        else {
            section.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", checkSections);
checkSections();



window.addEventListener("scroll", checkSections);
window.addEventListener("load", checkSections);

document.querySelector(".experience-btn").addEventListener("click", function (event){
    event.preventDefault();
    document.querySelector("#experience").scrollIntoView({
        behavior: "smooth"
    });
})

document.querySelector(".myskill-btn").addEventListener("click", function (event){
    event.preventDefault();
    document.querySelector("#card-wrapper").scrollIntoView({
        behavior: "smooth"
    });
})

document.querySelector(".hero1-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const target = document.querySelector("#hero1");

    if (target) {
        target.scrollIntoView({
            behavior: "smooth"
        });
        window.scrollBy(0, -5000);
    }
});


document.querySelector(".contact-btn").addEventListener("click", function (event){
    event.preventDefault();
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
})

document.querySelector("#col2 img").addEventListener("mousemove", function (e) {
    let box = this.getBoundingClientRect();
    let x = (e.clientX - box.left) / box.width - 0.5;
    let y = (e.clientY - box.top) / box.height - 0.5;

    let rotateX = y * -20;
    let rotateY = x * 20;

    this.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.querySelector("#col2 img").addEventListener("mouseleave", function () {
    this.style.transform = "rotateX(0deg) rotateY(0deg)";
});

