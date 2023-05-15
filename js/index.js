import { Games } from "./games.js";
import { Detalis } from "./details.js";
let links = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    links.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  });
});
new WOW().init();
var typed = new Typed(".Game", {
  /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */
  strings: ["GAME REVIEWS", "CHOOSE GAME"],
  stringsElement: null,
  typeSpeed: 30,
  startDelay: 0,
  backSpeed: 10,
});

$(window).on("load", () => {
  $(".loading").fadeOut(1000, () => {
    $("body").css("overflow", "auto");
  });
});

setTimeout(() => {
  let boxes = document.querySelectorAll("#content .col");
  let arr = Array.from(boxes);
  arr.forEach((box) => {
    box.onclick = function (e) {
      $(".loading")
        .fadeIn(400, () => {
          $("#item").css("display", "block");
        })
        .fadeOut(100);
    };
  });

  $("#btn").click(() => {
    $("#item").css("display", "none");
  });
}, 300);
