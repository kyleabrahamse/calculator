display = document.querySelector(".display");

function displayAdd(value) {
  const currentValue = display.value;
  if (value === "." && currentValue.endsWith(".")) {
    // Prevent adding another decimal point if there's one at the end.
    return;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  console.log("CLEAR");
}

function del() {
  display.value = display.value.slice(0, -1);
}

let a = "";

function compute() {
  a = display.value;
  console.log(eval(a));
  display.value = eval(a)
}
