var lastScrollTop = 0;
var navbar = document.getElementById("navbar");
var rightNavLinks = document.querySelectorAll(".right-nav a");
var leftNavLinks = document.querySelectorAll(".left-nav a");
var dropdownLinks = document.querySelectorAll(".dropdown-menu a");

window.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset;
  var pathname = window.location.pathname;

  if (window.innerWidth > 800) {
    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-80px";
    } else {
      navbar.style.top = "0";

      if (scrollTop === 0) {
        navbar.style.height = "100px";
        navbar.style.background = "transparent";
        leftNavLinks.forEach(function (link) {
          link.style.color = "rgb(255, 255, 255)";
        });
        rightNavLinks.forEach(function (link) {
          link.style.fontWeight = "400";
          link.style.color = "rgb(255, 255, 255)";
        });
        dropdownLinks.forEach(function (link) {
          link.style.fontWeight = "400";
          link.style.color = "black"; // Maintain red color
        });
        if (
          pathname.includes("product_pages") ||
          pathname.includes("products.html")
        ) {
          navbar.style.background = "white";
          leftNavLinks.forEach(function (link) {
            link.style.color = "black";
          });
          rightNavLinks.forEach(function (link) {
            link.style.fontWeight = "400";
            link.style.color = "black";
          });
          dropdownLinks.forEach(function (link) {
            link.style.fontWeight = "400";
            link.style.color = "black"; // Maintain red color
          });
        }
      } else {
        navbar.style.height = "60px";
        navbar.style.background = "rgb(153, 163, 255)";

        leftNavLinks.forEach(function (link) {
          link.style.color = "white";
        });
        rightNavLinks.forEach(function (link) {
          link.style.fontWeight = "550";
          link.style.color = "white";
        });
        dropdownLinks.forEach(function (link) {
          link.style.fontWeight = "400";
          link.style.color = "black"; // Maintain red color
        });
        if (
          pathname.includes("product_pages") ||
          pathname.includes("products.html")
        ) {
          navbar.style.background = "white";
          leftNavLinks.forEach(function (link) {
            link.style.color = "black";
          });
          rightNavLinks.forEach(function (link) {
            link.style.fontWeight = "400";
            link.style.color = "black";
          });
          dropdownLinks.forEach(function (link) {
            link.style.fontWeight = "400";
            link.style.color = "black"; // Maintain red color
          });
        }
      }
    }

    lastScrollTop = scrollTop;
  } else {
    navbar.style.background = "rgb(153, 163, 255)";
    if (
      pathname.includes("product_pages") ||
      pathname.includes("products.html")
    ) {
      navbar.style.background = "white";
      leftNavLinks.forEach(function (link) {
        link.style.color = "black";
      });
      rightNavLinks.forEach(function (link) {
        link.style.fontWeight = "400";
        link.style.color = "black";
      });
      dropdownLinks.forEach(function (link) {
        link.style.fontWeight = "400";
        link.style.color = "black"; // Maintain red color
      });
    }
  }
});

function toggleMenu() {
  const nav = document.querySelector(".navbar-class");
  nav.classList.toggle("responsive");
}
