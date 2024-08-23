var lastScrollTop = 0;
var navbar = document.getElementById("navbar");
var rightNavLinks = document.querySelectorAll(".right-nav a");
var lefttNavLinks = document.querySelector(".left-nav a");

window.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset;
  var pathname = window.location.pathname;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";

    if (scrollTop === 0) {
      navbar.style.height = "100px";
      // navbar.style.backgroundColor = "transparent";
      navbar.style.background = "transparent";
      lefttNavLinks.style.color = "rgb(255, 255, 255)";
      rightNavLinks.forEach(function (link) {
        link.style.fontWeight = "400";
        link.style.color = "rgb(255, 255, 255)";
      });
      // if (pathname.includes("index.html")) {
      //   navbar.style.backgroundColor = "transparent";
      // } else if (pathname.includes("about.html")) {
      //   // navbar.style.backgroundColor = "rgb(255, 255, 255, 0.9)";
      // } else if (pathname.includes("safety.html")) {
      //   navbar.style.backgroundColor = "transparent";
      //   rightNavLinks.forEach(function (link) {
      //     link.style.color = "rgb(255, 255, 255)";
      //   });
      //   lefttNavLinks.style.color = "rgb(255, 255, 255)";
      // }
    } else {
      navbar.style.height = "60px";
      // navbar.style.backgroundColor = "rgb(153, 163, 255)";
      navbar.style.background = "linear-gradient(30deg, #fb4795, #ff984f)";
      lefttNavLinks.style.color = "white";
      rightNavLinks.forEach(function (link) {
        // link.style.textShadow = "0px 0px 5px rgba(0, 0, 0, 0.3)";
        link.style.fontWeight = "550";
        link.style.color = "white";
      });
    }
  }

  lastScrollTop = scrollTop;
});

function toggleMenu() {
  const nav = document.querySelector(".navbar-class");
  nav.classList.toggle("responsive");
}
