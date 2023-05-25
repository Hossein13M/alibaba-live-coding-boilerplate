const response = {
    stepCount: 4,
    stepInfo: [
        {
            stepNumber: 1,
            questions: ['step 1 - question 1', 'step 1 - question 2']
        },
        {
            stepNumber: 2,
            questions: ['step 2 - question 1', 'step 2 - question 2']
        },
        {
            stepNumber: 3,
            questions: ['step 3 - question 1', 'step 3 - question 2']
        },
        {
            stepNumber: 4,
            questions: ['step 4 - question 1', 'step 4 - question 2']
        },
    ]
}



const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next')
const ul = document.querySelector('ul')
console.log(localStorage.getItem('step'));
if (!localStorage.getItem('step')){
    localStorage.setItem('step', 1)
}

function getCurrentStep(){
    return localStorage.getItem('step');
}

function setCurrentStep(stepNum){
    localStorage.setItem('step', stepNum);
}
function updateCurretnStep(amount){
    let currentStep = localStorage.getItem('step');
    localStorage.setItem('step', Number(currentStep) + amount)
}

function getQuestions(){
    return response.stepInfo[getCurrentStep() -1].questions;
}

function setQuestion(){
    let questions = getQuestions();
    for(let question of questions){
        const li = document.createElement('li');
        li.innerHTML = question;
        ul.appendChild(li);
    }
    
}

function initialQuestions(){
    setQuestion()
    updateBtnstatus()
}

function updateBtnstatus(){
    if (getCurrentStep() == 1){
        prevBtn.classList.add('disable')
        nextBtn.classList.remove('disable')
    }else if (getCurrentStep() == response.stepCount){
        prevBtn.classList.remove('disable')
        nextBtn.classList.add('disable')
    }else{
        prevBtn.classList.remove('disable')
        nextBtn.classList.remove('disable')
    }
}

function updateNextStep(){
    if (getCurrentStep() == response.stepCount){
        return;
    }
    updateCurretnStep(1)
    ul.innerText=""
    setQuestion()
    updateBtnstatus()
}
function updatePrevStep(){
    if (getCurrentStep() == 1){
        return;
    }
    updateCurretnStep(-1)
    ul.innerText=""
    setQuestion()
    updateBtnstatus()
}

window.addEventListener('load',initialQuestions ) 
nextBtn.addEventListener('click', updateNextStep)
prevBtn.addEventListener('click', updatePrevStep )
