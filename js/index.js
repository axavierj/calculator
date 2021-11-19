//import calculatorFunctions from './functions.js'
import calculatorFunctions from "./functions.js";

//create an async IIFE
(async () => {
  let theme = "normal";
  let numberDisplay = [];
  let factors = [];
  let operator = [];
  let mode = "normal";
  let forceNumber = 0;

  //destructure the calculator functions
  const {
    changeTheme,
    createCalcDisplay,
    deleteLastDisplay,
    calculateResults,
  } = calculatorFunctions;

  //query the DOM for the body tag
  const body = document.querySelector("body");
  //query the DOM for all the elements with the type of "radio"
  const radios = document.querySelectorAll('input[type="radio"]');
  //query the Dom for a button with the id of "delete"
  const deleteButton = document.querySelector("#delete");
  //query the DOM for all elements with the class of "valueBtn"
  const valueBtns = document.querySelectorAll(".valueBtn");
  //query the DOM for for element with the id of "calcDisplay"
  const calcDisplay = document.querySelector("#calcDisplay");
  //query the DOM for all elements with the class of "operationBtn"
  const operationBtns = document.querySelectorAll(".operationBtn");
  //query the DOM for an elements with the id of "resolve"
  const resolve = document.querySelector("#resolve");
  //query the Dom for an element with the class of "utility__button1"
  const utilityButton1 = document.querySelector(".utility__button1");
  //query the Dom for an element with the class of "secretBtn"
  const secretBtn = document.querySelector(".secretBtn");
  //query the Dom for an element with the class of "closeBtn"
  const closeBtn = document.querySelector(".closeBtn");
  //query the Dom for an element with the class of "dialog"
  const dialog = document.querySelector(".dialog");
  //query the Dom for an element with the id of "mode"
  const modeBtn = document.querySelector("#mode");
  //query the Dom for an element with the class of "switch"
  const switchBtn = document.querySelector(".switch");
  //query the Dom for an element with the id of "forceNumber"
  const forceNumberInput = document.querySelector("#forceNumber");
  //query the Dom for an element with the id of "saveForce"
  const saveForce = document.querySelector("#saveForce");

  //set calcDisplay to equal the value of the numberDisplay array
  calcDisplay.value = 0;

  //loop through the radios elements
  radios.forEach((radio) => {
    //add an event listener to each radio element
    radio.addEventListener("change", (event) => {
      //call the changeTheme function
      theme = changeTheme({ event, theme, body });
    });
  });

  //loop through the valueBtns elements
  valueBtns.forEach((valueBtn) => {
    //add an event listener to each valueBtn element
    valueBtn.addEventListener("click", () => {
      calcDisplay.value = createCalcDisplay({ numberDisplay, valueBtn }).join(
        ""
      );
      numberDisplay = createCalcDisplay({ numberDisplay, valueBtn });
    });
  });

  //add event listener to the deleteButton
  deleteButton.addEventListener("click", () => {
    calcDisplay.value = deleteLastDisplay({ numberDisplay }).join("");
    numberDisplay = deleteLastDisplay({ numberDisplay });
  });

  //loop through the operationBtns elements
  operationBtns.forEach((operationBtn) => {
    //add an event listener to each operationBtn element
    operationBtn.addEventListener("click", () => {
      factors = [...factors, parseFloat(numberDisplay.join(""))];
      operator = [...operator, operationBtn.dataset.operation];
      numberDisplay = [0];
      console.log(operator, factors);
    });
  });

  //add event listener to the resolve button
  resolve.addEventListener("click", () => {
    if (mode === "normal") {
      factors = [...factors, parseFloat(numberDisplay.join(""))];
      calcDisplay.value = calculateResults({ factors, operator });
    } else if (mode === "magic") {
      calcDisplay.value = forceNumber;
    }
    factors = [];
    operator = [];
    numberDisplay = [0];
  });

  /*add event listener to the utilityButton1 that clears 
  the calcDisplay and numberDisplay arrays and resets the calcDisplay to 0*/
  utilityButton1.addEventListener("click", () => {
    calcDisplay.value = 0;
    numberDisplay = [0];
    factors = [];
    operator = [];
  });

  //add event listener to the secretBtn that opens the dialog
  secretBtn.addEventListener("mousedown", () => {
    setTimeout(() => {
      dialog.showModal();
    }, 3000);
  });
  secretBtn.addEventListener("touchstart", () => {
    setTimeout(() => {
      dialog.showModal();
    }, 3000);
  });
  //add event listener to the secretBtn that clears the timeout on mouseup event
  secretBtn.addEventListener("mouseup", () => {
    clearTimeout();
  });
  secretBtn.addEventListener("touchend", () => {
    clearTimeout();
  });

  //add event listener to the closeBtn that closes the dialog
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

  //add event listener to the modeBtn
  modeBtn.addEventListener("change", (event) => {
    switchBtn.classList.toggle("move");
    if (event.target.checked) {
      mode = "magic";
    } else {
      mode = "normal";
    }
    console.log(mode);
  });

  //add event listener to the saveForce button that saves the value of the forceNumber input to the forceNumber variable
  saveForce.addEventListener("click", () => {
    if (forceNumberInput.value > 0) {
      forceNumber = parseInt(forceNumberInput.value);
    }
    dialog.close();
  });
})();
