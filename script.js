let display = document.getElementById("display");
let justCalculated = false;


function append(value) {
  const isOperator = ["+", "-", "*", "/", "**"].includes(value);

  // ekran sadece 0 ise ve sayı geliyorsa → 0'ı sil
  if (display.innerText === "0" && !isOperator) {
    display.innerText = value;
    return;
  }

  // = sonrası davranış
  if (justCalculated && !isOperator) {
    display.innerText = value;
  } else {
    display.innerText += value;
  }

  justCalculated = false;
}




function clearDisplay() {
  display.innerText = "0";
  justCalculated = false;
}


function del() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
  try {
    let expression = display.innerText;

    // güvenli temizlik
    expression = expression.replace(/×/g, "*").replace(/÷/g, "/");

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
