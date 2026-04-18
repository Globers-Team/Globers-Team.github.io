let val = true;

function themeButton() {
  val = !val
  setTheme();
}

function setTheme() {
  var element = document.body;
  var col = document.getElementById("games");
  var col2 = document.getElementById("servers");
  element.classList.toggle("dark-mode");
  if (val) {
    col.style.backgroundColor = "#3b3b3bff";
    col.style.color = "#ffffffff"
    col2.style.backgroundColor = "#3b3b3bff";
    col2.style.color = "#ffffffff"
  }
  else {
    col.style.backgroundColor = "#3b3b3bff";
    col.style.color = "#ffffffff"
    col2.style.backgroundColor = "#d8d8d8ff";
    col2.style.color = "#000000ff"
  }
}