const navItem = document.querySelectorAll(".nav-item");


navItem.forEach(navLink => {
    navLink.addEventListener("click", (o) => {
        navLink.parentElement.querySelectorAll(".active").forEach(e => {
            e.classList.remove("active");
        });
        navLink.classList.add("active");
    })
});

// sticky navbar on large screens
const navBar = document.querySelector(".navbar");
if (window.innerWidth >= 992) {
    window.onscroll = function() {
        makeNavBarSticky();
    }
}

function makeNavBarSticky() {
    if (window.pageYOffset > document.querySelector(".upper-bar").scrollHeight) {
        navBar.classList.add("sticky");

    } else {
        navBar.classList.remove("sticky");

    }
}