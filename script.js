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
range.addEventListener("input", function(event){
    let percent = ((event.target.value - event.target.min) / (event.target.max - event.target.min)) * 100;

    progressBefore.style = `width:${percent}%`;
    progressAfter.style = `width:${100-percent}%`;
    //console.log(event.target.value)

    placeForNumbersFromLiner.textContent = ""
    placeForNumbersFromLiner.textContent = event.target.value
    saveLinerNumber(event.target.value)
})



function saveLinerNumber(value) {
    let linerNumber = value

    if(linerNumber >= 1 && linerNumber <= 5){
        firstSquareColor()
    } else if(linerNumber > 5 && linerNumber <= 8) {
        secondSquareColor()
    } else if(linerNumber > 8 && linerNumber <= 12) {
        thirdSquareColor()
    } else {
        fourthSquareColor()
    }
}

function clearAllClassesSquare(){
    [firstSquare, secondSquare, thirdSquare, fourthSquare].forEach(function(oneSquare){
        oneSquare.classList.remove("danger", "easy", "medium", "safe")
    })
    typeOfDanger.textContent = ""
}

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
})