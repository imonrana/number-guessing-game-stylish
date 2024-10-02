// number guessing game 

// variables declear

let boxOne = document.querySelector(".box_one");
let boxOneBtn = document.querySelector(".box_one button")

let boxTwo = document.querySelector(".box_two");
let boxTwoBtn = document.querySelector(".box_two button")
let boxTwoInput = document.querySelector(".box_two input")
let error = document.createElement("p");
let boxTitle = document.querySelectorAll(".box_title");
let boxTitleArr = Array.from(boxTitle);

let boxThree = document.querySelector(".box_three");
let boxThreeBtn = document.querySelector(".box_three button")
let boxThreeInput = document.querySelector(".box_three input");
let wellcomeMessage = document.createElement("h2");


let boxFour = document.querySelector(".box_four");
let boxFourBtn = document.querySelector(".box_four button")
let boxFourInput = document.querySelector(".box_four input");


let boxFive = document.querySelector(".box_five");
let boxFiveBtn = document.querySelector(".box_five button")
let boxFiveInput = document.querySelector(".box_five input");
let chanceLeft = document.querySelector(".box_five p")
let chance = 5;

let boxSix = document.querySelector(".box_six");
let congrast = document.querySelector(".box_six h2");
let winNumber = document.querySelector(".box_six p");

// box one js
boxOne.style.display = "flex";
boxOneBtn.addEventListener("click", function(){
    boxOne.style.display = "none";
    boxTwo.style.display = "flex"
})

// box two js

boxTwoBtn.addEventListener("click", function(){
    if( boxTwoInput.value.trim() === "" || !isNaN(boxTwoInput.value)){
        error.remove();
        boxTwo.appendChild(error);
        error.classList.add("error");
        error.innerText = "Enter your name"
    }
    else{
        error.remove();
        boxTwo.style.display = "none";
       boxThree.style.display = "flex"
       boxTitleArr[0].appendChild(wellcomeMessage);
       boxTitleArr[0].insertBefore(wellcomeMessage, boxTitleArr[0].children[0]);
       wellcomeMessage.innerText =`Hey ${boxTwoInput.value} !!`
    }
})

// box three js

boxThreeBtn.addEventListener("click", function(){
    if(boxThreeInput.value.trim() === "" || isNaN(boxThreeInput.value) || boxThreeInput.value >=10 || boxThreeInput.value < 0){
       error.remove();
       boxThree.appendChild(error);
       error.classList.add("error");
       error.innerText = "please input a number between 0 to 9"
    }

    else{
        error.remove();
        boxThree.style.display = "none";
        boxFour.style.display = "flex";
    }
})

// box four js

boxFourBtn.addEventListener("click", function(){
    if( boxFourInput.value.trim() === "" || !isNaN(boxFourInput.value)){
        error.remove();
        boxFour.appendChild(error);
        error.classList.add("error");
        error.innerText = "Enter your name"
    }
    else{
        error.remove();
        boxFour.style.display = "none";
       boxFive.style.display = "flex"
       boxTitleArr[1].appendChild(wellcomeMessage);
       boxTitleArr[1].insertBefore(wellcomeMessage, boxTitleArr[1].children[0]);
       wellcomeMessage.innerText =`Hey ${boxFourInput.value} !!`
       
    }
})

// box five 

boxFiveBtn.addEventListener("click", ()=>{
    if( boxFiveInput.value.trim == "" || isNaN(boxFiveInput.value) || boxFiveInput.value >=10 || boxFiveInput.value < 0){
        error.remove();
        boxFive.appendChild(error);
        error.classList.add("error");
        error.innerText = "Please enter a number between 0 to 9"
    }
    else if(boxFiveInput.value === boxThree.value){
        boxFive.style.display = "none";
        boxSix.style.display = "block";
        congrast.innerText = `Congratulations !! ${boxFourInput.value} is win`
        winNumber.innerHTML = `win number is ${boxThreeInput.value}`
    }

    else{
        chance--;
        chanceLeft.innerText = `Chance Left : ${chance}`;
        
        console.log(chance);
        if(chance == 0){
            boxFive.style.display = "none";
            boxSix.style.display = "block";
            congrast.innerText = `Congratulations !! ${boxTwoInput.value} is win`;
            winNumber.innerHTML = `win number is ${boxThreeInput.value}`;
        }
        
    }
})