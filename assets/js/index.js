var button = document.getElementById("menu");
var div = document.getElementById("myModal");
var span = document.getElementById("close");

button.onclick = function () {
  if (div.classList.contains("show") !== true) {
    div.classList.add("show");
  } else {
    div.classList.remove("show");
  }
};

span.onclick = function () {
  div.classList.remove("show");
};

window.onclick = function (event) {
  if (event.target == div) {
    div.classList.remove("show");
  }
};
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    div.classList.remove("show");
  }
}

var x = window.matchMedia("(min-width: 991px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
