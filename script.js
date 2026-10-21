document.getElementById("exbtn").addEventListener("click", function () {
    document.getElementById("ex").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contbtn").addEventListener("click", function () {
    document.getElementById("conpage").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contbtn1").addEventListener("click", function () {
    document.getElementById("conpage").scrollIntoView({ behavior: "smooth" });
});



const burger = document.getElementById("burger");
const mainNav = document.getElementById("mainNav");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        burger.classList.remove("open");
        mainNav.classList.remove("open");
    });
});