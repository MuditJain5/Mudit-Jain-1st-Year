var button1 = document.querySelector(".button1");
var color = document.querySelector(".color")

button1.addEventListener("click", function() {
    color.classList.remove("blue");
    color.classList.toggle("purple");
});

var button2 = document.querySelector(".button2");

button2.addEventListener("click", function() {
    color.classList.remove("purple");
    color.classList.toggle("blue");
});

var colorButton = document.querySelector(".color-btn")
var colorButtonCollapse = document.querySelector(".color-button-collapse")


colorButton.addEventListener("click", function(){
    colorButtonCollapse.classList.toggle("color-button-collapse")
    if(colorButton.innerHTML === "Show"){
        colorButton.innerHTML = "Hide";
    } else {
        colorButton.innerHTML = "Show"
    }
})

var videoButton = document.querySelector(".video-btn")
var videoButtonCollapse = document.querySelector(".video-button-collapse")


videoButton.addEventListener("click", function(){
    videoButtonCollapse.classList.toggle("video-button-collapse")
    if(videoButton.innerHTML === "Show"){
        videoButton.innerHTML = "Hide";
    } else {

        videoButton.innerHTML = "Show"
    }
})


const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

let currentInput = '0'
let prevInput = '0'
let calculationOperator = ''

const inputNumber = (number) => {
    if(currentInput === '0'){
        currentInput = number    
    } else{
        currentInput += number
    }
    
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})

const inputOperator = (operator) => {
    prevInput = currentInput
    calculationOperator = operator
    currentInput = '0'
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const calculate = () => {
    let result = 0
    switch(calculationOperator){
        case '+':
            result = parseInt(prevInput) + parseInt(currentInput)
            break
        case '-':
            result = parseInt(prevInput) - parseInt(currentInput)
            break
        case '*':
            result = parseInt(prevInput) * parseInt(currentInput)
            break
        case '/':
            result = parseInt(prevInput) / parseInt(currentInput)
            break
        default:
            return
    }
    currentInput = result.toString()
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentInput)
})

const allClear = document.querySelector('.all-clear')

const clearAll = () => {
    prevInput = '0'
    currentInput = '0'
    calculationOperator = ''
}

allClear.addEventListener("click", () => {
    clearAll()
    updateScreen(currentInput)
})