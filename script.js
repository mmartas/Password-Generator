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

let range = document.querySelector("[type=range]")
let progressBefore = document.querySelector(".progress__before")
let progressAfter = document.querySelector(".progress__after")

let placeForNumbersFromLiner = document.querySelector(".pForLinerNumber")

range.addEventListener("input", function(event){
    let percent = ((event.target.value - event.target.min) / (event.target.max - event.target.min)) * 100;

    progressBefore.style = `width:${percent}%`;
    progressAfter.style = `width:${100-percent}%`
    console.log(event.target.max)

    placeForNumbersFromLiner.textContent = ""
    placeForNumbersFromLiner.textContent = event.target.value
})


let firstCheck = document.querySelector("#in-check1")
let firstSpan = document.querySelector("#in-span1")
let firstcheckButton = document.querySelector("#in-no1")

firstSpan.addEventListener("click", function(event){
    firstSpan.classList.toggle("display__none")
    firstCheck.classList.toggle("display__none")
    console.log(firstcheckButton.checked)
})
firstCheck.addEventListener("click", function(event){
    firstSpan.classList.toggle("display__none")
    firstCheck.classList.toggle("display__none")
})

let secondCheck = document.querySelector("#in-check2")
let secondSpan = document.querySelector("#in-span2")
let secondCheckButton = document.querySelector("#in-no2")
secondSpan.addEventListener("click", function(event){
    secondSpan.classList.toggle("display__none")
    secondCheck.classList.toggle("display__none")
})
secondCheck.addEventListener("click", function(event){
    secondSpan.classList.toggle("display__none")
    secondCheck.classList.toggle("display__none")
})

let thirdCheck = document.querySelector("#in-check3")
let thirdSpan = document.querySelector("#in-span3")
let thirdCheckButton = document.querySelector("#in-no3")
thirdSpan.addEventListener("click", function(event){
    thirdSpan.classList.toggle("display__none")
    thirdCheck.classList.toggle("display__none")
})
thirdCheck.addEventListener("click", function(event){
    thirdSpan.classList.toggle("display__none")
    thirdCheck.classList.toggle("display__none")
})

let fourthCheck = document.querySelector("#in-check4")
let fourthSpan = document.querySelector("#in-span4")
let fourthCheckButton = document.querySelector("#in-no4")
fourthSpan.addEventListener("click", function(event){
    fourthSpan.classList.toggle("display__none")
    fourthCheck.classList.toggle("display__none")
})
fourthCheck.addEventListener("click", function(event){
    fourthSpan.classList.toggle("display__none")
    fourthCheck.classList.toggle("display__none")
})


let firstSquare = document.querySelector(".span1")
let secondSquare = document.querySelector(".span2")
let thirdSquare = document.querySelector(".span3")
let fourthSquare = document.querySelector(".span4")

let typeOfDanger = document.querySelector("#typeOfDanger")

firstSquare.addEventListener("click", function(){
    firstSquare.classList.toggle("danger")
    if(firstSquare.classList.contains("danger")){
        typeOfDanger.textContent = "danger"
    } else {
        typeOfDanger.textContent = ""
    }
})

secondSquare.addEventListener("click", function(){
    firstSquare.classList.toggle("easy")
    secondSquare.classList.toggle("easy")
    if(firstSquare.classList.contains("easy") & secondSquare.classList.contains("easy")){
        typeOfDanger.textContent = "easy"
    } else {
        typeOfDanger.textContent = ""
    }
})

thirdSquare.addEventListener("click", function(){
    firstSquare.classList.toggle("medium")
    secondSquare.classList.toggle("medium")
    thirdSquare.classList.toggle("medium")
    if(firstSquare.classList.contains("medium") & secondSquare.classList.contains("medium") & thirdSquare.classList.contains("medium")){
        typeOfDanger.textContent = "medium"
    } else {
        typeOfDanger.textContent = ""
    }
})

fourthSquare.addEventListener("click", function(){
    firstSquare.classList.toggle("hard")
    secondSquare.classList.toggle("hard")
    thirdSquare.classList.toggle("hard")
    fourthSquare.classList.toggle("hard")
    if(firstSquare.classList.contains("hard") & secondSquare.classList.contains("hard") & thirdSquare.classList.contains("hard") & fourthSquare.classList.contains("hard")){
        typeOfDanger.textContent = "hard"
    } else {
        typeOfDanger.textContent = ""
    }
})

