display = document.querySelector(".display");
equals = document.querySelector(".equals");
innerDisplay = document.querySelector(".inner-display");

function displayAdd(value) {
  if (value === "." && display.value.includes(".")) {
    // Do nothing if there's already a dot in the display.
    return;
  }
  display.value += value;
}

function innerContent(op) {
  if (innerDisplay.innerText.endsWith(op) && display.value === "") {
    // Do nothing if the last character is already an operator.
    return;
  }

  // Concatenate the current content and the new value.
  const newContent = innerDisplay.innerText + display.value + op;

  // Set the content in the container.
  innerDisplay.innerText = newContent;

  // Check if the content width exceeds the container width.
  if (innerDisplay.scrollWidth > innerDisplay.clientWidth) {
    // If it does, scroll the content to the right.
    innerDisplay.scrollLeft =
      innerDisplay.scrollWidth - innerDisplay.clientWidth;
  }
}

function clearDisplay() {
  display.value = "";
  console.log("CLEAR");
  arr = [];
  acc = 0;
  innerDisplay.innerText = "0";
}

function del() {
  display.value = display.value.slice(0, -1);
}

let acc = 0;
let arr = [];

function add() {
  if (innerDisplay.textContent === "0") {
    innerDisplay.textContent = ""; // Remove the leading "0"
  }

  innerContent("+");
  if (display.value !== "") {
    acc += Number(display.value);
  }
  console.log(acc);
  arr[0] = acc;
  arr[1] = "+";
  console.log(arr);
  display.value = "";
  innerDisplay.style.color = "#fff";
}


function minus() {
  if (innerDisplay.textContent === "0") {
    innerDisplay.textContent = ""; // Remove the leading "0"
  }

  innerContent("-");
  if (display.value !== "") {
    acc -= Number(display.value) ;
  }
  console.log(acc);
  arr[0] = acc;
  arr[1] = "-";
  console.log(arr);
  display.value = "";
  innerDisplay.style.color = "#fff";
}


function divide() {
  if (innerDisplay.textContent === "0") {
    innerDisplay.textContent = ""; // Remove the leading "0"
  }
  innerContent("/");
  acc === 0 ? acc += display.value : acc /= display.value
  console.log(acc);
  arr[0] = acc;
  arr[1] = "/";
  console.log(arr);
  display.value = "";
  innerDisplay.style.color = "#fff";
}


function multiply() {
  if (innerDisplay.textContent === "0") {
    innerDisplay.textContent = ""; // Remove the leading "0"
  }
  innerContent("*");
  acc === 0 ? acc += display.value : acc *= display.value
  console.log(acc);
  arr[0] = acc;
  arr[1] = "*";
  console.log(arr);
  display.value = "";
  innerDisplay.style.color = "#fff";
}



function compute() {
  if (display.value === "") return;
  innerDisplay.innerText += display.value;
  let a = 0;
  if (arr[1] === "+") a = arr[0] + Number(display.value);
  if (arr[1] === "-") a = arr[0] - Number(display.value);
  if (arr[1] === "/") a = arr[0] / Number(display.value);
  if (arr[1] === "*") a = arr[0] * Number(display.value);
  console.log(a);
  display.value = a;
}
