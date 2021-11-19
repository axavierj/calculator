const changeTheme = ({ event, theme, body }) => {
  if (event.target.id !== theme) {
    body.classList.remove(theme);
    body.classList.add(event.target.id);
    return event.target.id;
  }
};
const createCalcDisplay = ({ numberDisplay, valueBtn }) => {
  const tempDisplay = [...numberDisplay];
  const inputValue = valueBtn.dataset.value;
  if (tempDisplay.length === 1 && tempDisplay[0] === 0) {
    tempDisplay.pop();
    tempDisplay.push(inputValue);
  } else {
    tempDisplay.push(inputValue);
  }
  return tempDisplay;
};
const deleteLastDisplay = ({ numberDisplay }) => {
  const tempDisplay = [...numberDisplay];
  if (numberDisplay.length > 1) {
    tempDisplay.pop();
  }
  if (numberDisplay.length === 1) {
    tempDisplay.pop();
    tempDisplay.push(0);
  }
  return tempDisplay;
};

const calculateResults = ({ factors, operator }) => {
  let result = 0;
  let tempFactors = [...factors];
  //loop through the factors array
  for (let i = 0; i < factors.length; i++) {
    //if the operator is "add" add and result equals 0 then add the first two factors
    if (operator[i] === "add") {
      if (result === 0) {
        result = tempFactors[i] + tempFactors[i + 1];
      } else {
        result += tempFactors[i + 1];
      }
    }
    //if the operator is "subtract" subtract and result equals 0 then subtract the first two factors
    if (operator[i] === "subtract") {
      if (result === 0) {
        result = tempFactors[i] - tempFactors[i + 1];
      } else {
        result -= tempFactors[i + 1];
      }
    }
    //if the operator is "multiply" multiply and result equals 0 then multiply the first two factors
    if (operator[i] === "multiply") {
      if (result === 0) {
        result = tempFactors[i] * tempFactors[i + 1];
      } else {
        result *= tempFactors[i + 1];
      }
    }
    //if the operator is "divide" divide and result equals 0 then divide the first two factors
    if (operator[i] === "divide") {
      if (result === 0) {
        result = tempFactors[i] / tempFactors[i + 1];
      } else {
        result /= tempFactors[i + 1];
      }
    }
  }
  return result;
};

const calculatorFunctions = {
  changeTheme,
  createCalcDisplay,
  deleteLastDisplay,
  calculateResults,
};

export default calculatorFunctions;
