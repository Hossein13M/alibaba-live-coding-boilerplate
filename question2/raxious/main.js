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

var currentStep = 1;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next')
const ul = document.querySelector('ul')
console.log(ul)
function setQuestion(){
    questions = response.stepInfo[currentStep -1].questions;
    console.log(questions);
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
    if (currentStep == 1){
        prevBtn.classList.add('disable')
        nextBtn.classList.remove('disable')
    }else if (currentStep == response.stepCount){
        prevBtn.classList.remove('disable')
        nextBtn.classList.add('disable')
    }else{
        prevBtn.classList.remove('disable')
        nextBtn.classList.remove('disable')
    }
}

function updateNextStep(){
    currentStep++
    ul.innerText=""
    setQuestion()
    updateBtnstatus()
}
function updatePrevStep(){
    currentStep--
    ul.innerText=""
    setQuestion()
    updateBtnstatus()
}

window.addEventListener('load',initialQuestions ) 
nextBtn.addEventListener('click', updateNextStep)
prevBtn.addEventListener('click', updatePrevStep )
