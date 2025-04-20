// KOPÍROVÁNÍ HESLA
let copyIcon = document.getElementById("copyIcon")
function copyPassword() {
    const text = document.getElementById("copy-text").innerText;
    navigator.clipboard.writeText(text)
      .then(() => {
        copyIcon.classList.remove("fa-regular")
        copyIcon.classList.add("fa-solid")
      })
      .catch(err => {
        console.error("Kopírování selhalo:", err);
      });
    }

// POSUVNÍK S VOLBOU DÉLKY HESLA
let range = document.querySelector("[type=range]")
let progressBefore = document.querySelector(".progress__before")
let progressAfter = document.querySelector(".progress__after")
let placeForNumbersFromLiner = document.querySelector(".pForLinerNumber")
function updateLiner(value){
    let percent = ((value - range.min) / (range.max - range.min)) * 100;

    progressBefore.style.width = `${percent}%`;
    progressAfter.style.width = `${100 - percent}%`;

    placeForNumbersFromLiner.textContent = value;
    saveLinerNumber(value);

    if (countOfChecked().length === 0 && value > 5) {
        clearAllClassesSquare();
    } else {
        checkingCheckedIncludes();
    }
}
range.addEventListener("input", function(event){
    updateLiner(event.target.value)
})

window.addEventListener("DOMContentLoaded", () => {
    updateLiner(range.value);
});

// ZJIŠTĚNÍ POČTU NA POSUVNÍKU
let linerNumber = 0
function saveLinerNumber(value) {
    linerNumber = value
}

// PODLE POČTU NA POSUVNÍKU A ZAŠKRTNUTÝCH PODMÍNEK VYPSÁNÍ BEZPEČNOSTI HESLA
function checkingCheckedIncludes() {
    if(countOfChecked().length === 0 && linerNumber > 5) {
        clearAllClassesSquare()
    }

    if(linerNumber <= 5 && countOfChecked().length <= 4){
        firstSquareColor()
    }

    if(linerNumber > 5 && linerNumber <= 8 && countOfChecked().length <= 2){
       firstSquareColor()
    } else if (linerNumber > 5 && linerNumber <= 8 && countOfChecked().length > 2){
        secondSquareColor()
    }

    if(linerNumber > 8 && linerNumber <= 12 && countOfChecked().length <= 1){
        firstSquareColor()
    } else if (linerNumber > 8 && linerNumber <= 12 && countOfChecked().length > 1 && countOfChecked().length <= 3){
        secondSquareColor()
    } else if (linerNumber > 8 && linerNumber <= 12 && countOfChecked().length > 3){
        thirdSquareColor()
    }

    if(linerNumber > 12 && countOfChecked().length === 1){
        firstSquareColor()
    } else if(linerNumber > 12 && countOfChecked().length === 2) {
        secondSquareColor()
    } else if(linerNumber > 12 && countOfChecked().length === 3) {
        thirdSquareColor()
    } else if(linerNumber > 12 && countOfChecked().length === 4) {
        fourthSquareColor()
    }
}

//ZHASNUTÍ VŠECH TROJÚHELNÍČKŮ
function clearAllClassesSquare(){
    [firstSquare, secondSquare, thirdSquare, fourthSquare].forEach(function(oneSquare){
        oneSquare.classList.remove("danger", "easy", "medium", "safe")
    })
    typeOfDanger.textContent = ""
}

//OBARVENÍ OBDÉLNÍČKŮ PODLE BEZPEČNOSTI
let firstSquare = document.querySelector(".span1")
let secondSquare = document.querySelector(".span2")
let thirdSquare = document.querySelector(".span3")
let fourthSquare = document.querySelector(".span4")
let typeOfDanger = document.querySelector("#typeOfDanger")
function firstSquareColor(){
    clearAllClassesSquare()
    firstSquare.classList.add("danger")
    typeOfDanger.textContent = "danger"
    return true
}

function secondSquareColor(){
    clearAllClassesSquare()
    firstSquare.classList.add("easy")
    secondSquare.classList.add("easy")
    typeOfDanger.textContent = "easy"
    return true
}

function thirdSquareColor(){
    clearAllClassesSquare()
    firstSquare.classList.add("medium")
    secondSquare.classList.add("medium")
    thirdSquare.classList.add("medium")
    typeOfDanger.textContent = "medium"
    return true
}

function fourthSquareColor(){
    clearAllClassesSquare()
    firstSquare.classList.add("safe")
    secondSquare.classList.add("safe")
    thirdSquare.classList.add("safe")
    fourthSquare.classList.add("safe")
    typeOfDanger.textContent = "safe"
    return true
}

// VOLBA 1
let includeFirst = document.querySelector(".include1")
let realButtonFirst = document.querySelector("#in-no1")
let fullButtonFirst = document.querySelector("#in-check1")
let emptyButtonFirst = document.querySelector("#in-span1")
includeFirst.addEventListener("change", function(event){
    emptyButtonFirst.classList.toggle("display__none")
    fullButtonFirst.classList.toggle("display__none")
    if(realButtonFirst.checked) {
        emptyButtonFirst.classList.add("display__none")
        fullButtonFirst.classList.remove("display__none")
    }
    //console.log(realButtonFirst.checked)
    checkingCheckedIncludes()
})

// VOLBA 2
let includeSecond = document.querySelector(".include2")
let realButtonSecond = document.querySelector("#in-no2")
let fullButtonSecond = document.querySelector("#in-check2")
let emptyButtonSecond = document.querySelector("#in-span2")
includeSecond.addEventListener("change", function(event){
    emptyButtonSecond.classList.toggle("display__none")
    fullButtonSecond.classList.toggle("display__none")
    if(realButtonSecond.checked) {
        emptyButtonSecond.classList.add("display__none")
        fullButtonSecond.classList.remove("display__none")
    }
    //console.log(realButtonSecond.checked)
    checkingCheckedIncludes()
})

// VOLBA 3
let includeThird = document.querySelector(".include3")
let realButtonThird = document.querySelector("#in-no3")
let fullButtonThird = document.querySelector("#in-check3")
let emptyButtonThird = document.querySelector("#in-span3")
includeThird.addEventListener("change", function(event){
    emptyButtonThird.classList.toggle("display__none")
    fullButtonThird.classList.toggle("display__none")
    if(realButtonThird.checked) {
        emptyButtonThird.classList.add("display__none")
        fullButtonThird.classList.remove("display__none")
    }
    //console.log(realButtonThird.checked)
    checkingCheckedIncludes()
})

// VOLBA 4
let includeFourth = document.querySelector(".include4")
let realButtonFourth = document.querySelector("#in-no4")
let fullButtonFourth = document.querySelector("#in-check4")
let emptyButtonFourth = document.querySelector("#in-span4")
includeFourth.addEventListener("change", function(event){
    emptyButtonFourth.classList.toggle("display__none")
    fullButtonFourth.classList.toggle("display__none")
    if(realButtonFourth.checked) {
        emptyButtonFourth.classList.add("display__none")
        fullButtonFourth.classList.remove("display__none")
    }
    //console.log(realButtonFourth.checked)
    checkingCheckedIncludes()
})

// POČET ZAŠKRTNUTÝCH PODMÍNEK
function countOfChecked() {
    return [realButtonFirst, realButtonSecond, realButtonThird, realButtonFourth]
    .filter(oneCheck => oneCheck.checked)
    .map(oneCheck => oneCheck.id)
}



let bigLetters = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
];


let smallLetters = [
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
];
let numbers = [0, 1, 2, 3, 4, 5 , 6, 7, 8, 9]
let specialSymbols = [
    "!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "-", "_", "=", "+", "[", "]",
    "{", "}", ";", ":", "'", "\"", ",", ".",
    "<", ">", "/", "?", "|", "`", "~"
];

let generateButton = document.querySelector(".button")

let allCharacters = []

let myBigLetters
let myUppercase = []

let mySmallLetters
let myLowercase = []

let myNumber
let myNumbers = []

let mySymbol
let mySymbols = []

let myNarrow = document.querySelector(".narrow")

generateButton.addEventListener("click", function(event){
    allCharacters.length = 0
    myUppercase.length = 0
    myLowercase.length = 0
    myNumbers.length = 0
    mySymbols.length = 0
    if(countOfChecked().length === 1){
        if(realButtonFirst.checked){
            for(let i = 1; i <= linerNumber; i++){
                let randomNumber = Math.floor(Math.random() * bigLetters.length)
                myBigLetters = bigLetters[randomNumber]
                myUppercase.push(myBigLetters)
            }
            //console.log(myUppercase)
        }
    
        if(realButtonSecond.checked){
            for(let i = 1; i <= linerNumber; i++){
                let randomNumber = Math.floor(Math.random() * smallLetters.length)
                mySmallLetters = smallLetters[randomNumber]
                myLowercase.push(mySmallLetters)
            }
            //console.log(myLowercase)
        }
    
        if(realButtonThird.checked){
            for(let i = 1; i <= linerNumber; i++){
                let randomNumber = Math.floor(Math.random() * numbers.length)
                myNumber = numbers[randomNumber]
                myNumbers.push(myNumber)
            }
            //console.log(myNumbers)
        }
    
        if(realButtonFourth.checked){
            for(let i = 1; i <= linerNumber; i++){
                let randomNumber = Math.floor(Math.random() * specialSymbols.length)
                mySymbol = specialSymbols[randomNumber]
                mySymbols.push(mySymbol)
            }
            //console.log(mySymbols)
        }

        allCharacters = [...myUppercase, ...myLowercase, ...myNumbers, ...mySymbols]
        //console.log(allCharacters)
    } else if (countOfChecked().length === 2) {
        if(realButtonFirst.checked){
            for(let i = 1; i <= (linerNumber / 2); i++){
                let randomNumber = Math.floor(Math.random() * bigLetters.length)
                myBigLetters = bigLetters[randomNumber]
                myUppercase.push(myBigLetters)
            }
            //console.log(myUppercase)
        }
    
        if(realButtonSecond.checked){
            for(let i = 1; i <= (linerNumber / 2); i++){
                let randomNumber = Math.floor(Math.random() * smallLetters.length)
                mySmallLetters = smallLetters[randomNumber]
                myLowercase.push(mySmallLetters)
            }
            //console.log(myLowercase)
        }
    
        if(realButtonThird.checked){
            for(let i = 1; i <= (linerNumber / 2); i++){
                let randomNumber = Math.floor(Math.random() * numbers.length)
                myNumber = numbers[randomNumber]
                myNumbers.push(myNumber)
            }
            //console.log(myNumbers)
        }
    
        if(realButtonFourth.checked){
            for(let i = 1; i <= (linerNumber / 2); i++){
                let randomNumber = Math.floor(Math.random() * specialSymbols.length)
                mySymbol = specialSymbols[randomNumber]
                mySymbols.push(mySymbol)
            }
            //console.log(mySymbols)
        }

        allCharacters = [...myUppercase, ...myLowercase, ...myNumbers, ...mySymbols]
        //console.log(allCharacters)
    } else if (countOfChecked().length === 3) {
        if(realButtonFirst.checked){
            for(let i = 1; i <= (linerNumber / 3); i++){
                let randomNumber = Math.floor(Math.random() * bigLetters.length)
                myBigLetters = bigLetters[randomNumber]
                myUppercase.push(myBigLetters)
            }
            //console.log(myUppercase)
        }
    
        if(realButtonSecond.checked){
            for(let i = 1; i <= (linerNumber / 3); i++){
                let randomNumber = Math.floor(Math.random() * smallLetters.length)
                mySmallLetters = smallLetters[randomNumber]
                myLowercase.push(mySmallLetters)
            }
            //console.log(myLowercase)
        }
    
        if(realButtonThird.checked){
            for(let i = 1; i <= (linerNumber / 3); i++){
                let randomNumber = Math.floor(Math.random() * numbers.length)
                myNumber = numbers[randomNumber]
                myNumbers.push(myNumber)
            }
            //console.log(myNumbers)
        }
    
        if(realButtonFourth.checked){
            for(let i = 1; i <= (linerNumber / 3); i++){
                let randomNumber = Math.floor(Math.random() * specialSymbols.length)
                mySymbol = specialSymbols[randomNumber]
                mySymbols.push(mySymbol)
            }
            //console.log(mySymbols)
        }

        allCharacters = [...myUppercase, ...myLowercase, ...myNumbers, ...mySymbols]
        //console.log(allCharacters)
    } else if (countOfChecked().length === 4) {
        if(realButtonFirst.checked){
            for(let i = 1; i <= (linerNumber / 4); i++){
                let randomNumber = Math.floor(Math.random() * bigLetters.length)
                myBigLetters = bigLetters[randomNumber]
                myUppercase.push(myBigLetters)
            }
            //console.log(myUppercase)
        }
    
        if(realButtonSecond.checked){
            for(let i = 1; i <= (linerNumber / 4); i++){
                let randomNumber = Math.floor(Math.random() * smallLetters.length)
                mySmallLetters = smallLetters[randomNumber]
                myLowercase.push(mySmallLetters)
            }
            //console.log(myLowercase)
        }
    
        if(realButtonThird.checked){
            for(let i = 1; i <= (linerNumber / 4); i++){
                let randomNumber = Math.floor(Math.random() * numbers.length)
                myNumber = numbers[randomNumber]
                myNumbers.push(myNumber)
            }
            //console.log(myNumbers)
        }
    
        if(realButtonFourth.checked){
            for(let i = 1; i <= (linerNumber / 4); i++){
                let randomNumber = Math.floor(Math.random() * specialSymbols.length)
                mySymbol = specialSymbols[randomNumber]
                mySymbols.push(mySymbol)
            }
            //console.log(mySymbols)
        }
        allCharacters = [...myUppercase, ...myLowercase, ...myNumbers, ...mySymbols]
        //console.log(allCharacters.length)
    }

    let missingCount = linerNumber - allCharacters.length

    let missingLetters = []

    let realMissingLetters = []

    if(missingCount >= 1){
        if(realButtonFirst.checked){
            missingLetters.push(bigLetters)
        }
        if(realButtonSecond.checked){
            missingLetters.push(smallLetters)
        }
        if(realButtonThird.checked){
            missingLetters.push(numbers)
        }
        if(realButtonFourth.checked){
            missingLetters.push(specialSymbols)
        }
        //console.log(missingLetters)

        for(let i = 0; i < missingCount; i++){
            let randomNumber = Math.floor(Math.random() * missingLetters.length)
            let oneSet = missingLetters[randomNumber]

            let randomNum = Math.floor(Math.random() * oneSet.length)
            let oneChar = oneSet[randomNum]
            
            realMissingLetters.push(oneChar)
        }

        //console.log(realMissingLetters)

        // allCharacters = [...myUppercase, ...myLowercase, ...myNumbers, ...mySymbols, ...realMissingLetters]
        // console.log(allCharacters)
    }

    allCharacters = [...myUppercase, ...myLowercase, ...myNumbers, ...mySymbols, ...realMissingLetters]
    //console.log(allCharacters)

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    shuffleArray(allCharacters)

    let finalPassword = allCharacters.join("")
    //console.log(finalPassword)

    let placeForPassword = document.getElementById("copy-text")
    placeForPassword.textContent = finalPassword

    myNarrow.classList.add("out")
})