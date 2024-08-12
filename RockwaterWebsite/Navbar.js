var lastScrollTop = 0;
var navbar = document.getElementById("navbar");
var rightNavLinks = document.querySelectorAll(".right-nav a");
var lefttNavLinks = document.querySelector(".left-nav a");

window.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";

    if (scrollTop === 0) {
      navbar.style.height = "100px";
      navbar.style.backgroundColor = "transparent";
      lefttNavLinks.style.color = "rgb(0, 0, 0)";
      rightNavLinks.forEach(function (link) {
        // link.style.textShadow = "0px 0px 5px rgba(0, 0, 0, 0.9)";
        link.style.fontWeight = "400";
        link.style.color = "rgb(0, 0, 0)";
      });
    } else {
      navbar.style.height = "60px";
      navbar.style.backgroundColor = "rgb(153, 163, 255)";
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

// -------------  RESPONSIVNESS PART ------------- //


function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar-class") {
    x.className += " responsive";
  } else {
    x.className = "navbar-class";
  }
}