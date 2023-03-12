const buttons = document.querySelector(".buttons");
const result = document.querySelector(".result");

let evaluation = 0;

const calculateExpression = (expression) => {
  evaluation = eval(expression)
  return evaluation;
};

const showKeyPressed = (key) => {
  if (key !== "del" && key !== "reset" && key !== "=") {
    let lastCharacter = result.innerHTML.slice(-1);
    if (
      (key === "+" || key === "-" || key === "x" || key === "/") &&
      (lastCharacter === "+" ||
        lastCharacter === "-" ||
        lastCharacter === "x" ||
        lastCharacter === "/")
    ) {
      result.innerHTML = "SYNTAX ERROR!";
    } else {
      if (result.innerHTML === "0") {
        result.innerHTML = key;
      } else if(evaluation === 0){
        result.innerHTML += key;
      } else {
        evaluation = 0;
        result.innerHTML = key;
      }
    }
  } else {
    if (key === "del") {
      if (result.innerHTML.length > 1)
        result.innerHTML = result.innerHTML.substring(
          0,
          result.innerHTML.length - 1
        );
      else result.innerHTML = "0";
    } else if (key === "reset") {
      result.innerHTML = "0";
      evaluation = 0;
    } else if (key === "=") {
      result.innerHTML = calculateExpression(result.innerHTML);
    }
  }
};

buttons.addEventListener("mousedown", (e) => {
  if (e.target.type === "submit") {
    e.target.classList.add("button-clicked");
    showKeyPressed(e.target.innerHTML);
  }
});

buttons.addEventListener("mouseup", (e) => {
  if (e.target.type === "submit") e.target.classList.remove("button-clicked");
});
