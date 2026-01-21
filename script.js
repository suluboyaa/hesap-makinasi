let display = document.getElementById("display");
let justCalculated = false;


function append(value) {
  const isOperator = ["+", "-", "*", "/","**"].includes(value);

  if (justCalculated && !isOperator) {
    // sayı geldiyse yeni işlem
    display.innerText = value;
  } else {
    // işlem geldiyse sonuçtan devam
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
