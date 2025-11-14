let val = true;
function toggleDarkMode() {
  var element = document.body;
  val = !val
  if (val) {
    element.classList.toggle("dark-mode");
  }
  else {
    element.classList.toggle("dark-mode");
  }
}