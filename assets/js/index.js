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
