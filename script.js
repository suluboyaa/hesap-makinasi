let display = document.getElementById("display");
let justCalculated = false;


function append(value) {
  const operators = ["+", "-", "*", "/", "**", "×", "÷"];

  // = sonrası sayı gelirse → yeni işlem
  if (justCalculated && !operators.includes(value)) {
    display.innerText = value;
    justCalculated = false;
    return;
  }

  // ekranda SADECE 0 varsa → ez
  if (display.innerText === "0" && !operators.includes(value)) {
    display.innerText = value;
    return;
  }

  display.innerText += value;
}





function clearDisplay() {
  display.innerText = "0";
  history.innerText = "";
  justCalculated = false;
}



function del() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
  try {
    let expression = display.innerText
      .replace(/×/g, "*")
      .replace(/÷/g, "/");

    const result = Function("return " + expression)();

    history.innerText = expression + " =";
    display.innerText = result;

    justCalculated = true;
  } catch {
    display.innerText = "HATA";
  }
}



function sqrt() {
  let v = Number(display.innerText);
  display.innerText = Math.sqrt(v);
}

function square() {
  let v = Number(display.innerText);
  display.innerText = Math.pow(v, 2);
}
