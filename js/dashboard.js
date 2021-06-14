var el = document.getElementById("wrapper")
var toggleButton = document.getElementById("menu-toggle")

toggleButton.onclick = function(){
    el.classList.toggle("toggled")
}


var header = document.getElementById("nav");
var btns = header.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}