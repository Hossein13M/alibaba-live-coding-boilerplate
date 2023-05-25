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

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
let showStep = document.getElementById("showStep")
let currentQuestion = document.getElementById("currentQuestion")
let nextQuestion = document.getElementById("nextQuestion")
let currentStep = 0;

function enableButton(){
    if(currentStep === 0){
        console.log('1');
        previousBtn.disabled = true ;
    }
    else{
        previousBtn.disabled = false;
    }
    if (currentStep >= response.stepInfo.length -1) {
        console.log('0');

        nextBtn.disabled =true;
    }
    else{
        nextBtn.disabled = false ;
    }
}

function goNext() {
    currentStep +=1;
    enableButton()
    updateDOM();
        
    
}

function goBack() {
    currentStep-=1;
    enableButton()
    
        console.log(currentStep);
        updateDOM();
        
    
}


// give a step and and question number, return the question of that step



function updateDOM() {
    showStep.textContent = "Step " + Number(currentStep);

    currentQuestion.textContent = response.stepInfo[currentStep  ].questions[0];
    nextQuestion.textContent = response.stepInfo[currentStep  ].questions[1];
    // console.log(currentStep);

}
updateDOM();
enableButton();