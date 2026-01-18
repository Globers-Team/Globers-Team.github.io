let val = true;

function themeButton() {
  val = !val
  setTheme();
}

function setTheme() {
  var element = document.body;
  var col = document.getElementById("games");
  element.classList.toggle("dark-mode");
  if (val) {

    col.style.backgroundColor = "#3b3b3bff";
    col.style.color = "#ffffffff"
  }
  else {

    col.style.backgroundColor = "#d8d8d8ff";
    col.style.color = "#000000ff"
  }
}