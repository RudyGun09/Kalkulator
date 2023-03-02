//menghapus
function clearScreen() {
  document.getElementById("result").value = "";
}

//memunculkan display
function display(value) {
  document.getElementById("result").value += value;
}

//menghitung
function calculate() {
  var a = document.getElementById("result").value;
  var b = eval(a);
  document.getElementById("result").value = b;
}
