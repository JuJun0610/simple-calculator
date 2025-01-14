const displayBar = document.querySelector(".display");//顯示結果的元素

const calculator = document.querySelector(".calculator");//計算機body

const operatorMapping = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    "/": (a, b) => a / b
};

let operatorClicked = false;
let previousResult = "";
let operator;

function handleBtnClick (e) {
    //處理所有數字
    if (e.target.classList.contains("number")) {
        //加入點擊運算符後的處理
        if (operatorClicked) {
            displayBar.value ="";
            operatorClicked = false;
        }
        if (displayBar.value === "0") {
            displayBar.value = e.target.textContent;
        return;
        }
        displayBar.value += e.target.textContent;
    }

    //處理運算符
    if (e.target.classList.contains("operator")) {
    operator = operatorMapping[e.target.textContent];
    previousResult = displayBar.value;
    operatorClicked = true;
    }

    //處理等號
    if (e.target.classList.contains("equal")) {
        displayBar.value = operator(
            Number(previousResult),
            Number(displayBar.value)
        );
        previousResult = "";
        operatorClicked = false;
        operator = null;
    }

    //清除
    if (e.target.classList.contain("clear")) {
        displayBar.value = "0",
        previousResult = "",
        operatorClicked = false,
        operator = null;
    }
}

//建立監聽器
calculator.addEventListener("click", handleBtnClick);