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
};

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
let showStep = document.getElementById("showStep");
let currentQuestion = document.getElementById("currentQuestion");
let nextQuestion = document.getElementById("nextQuestion");
let currentStep = 0;

function enableButton() {
  if (currentStep === 0) {
    previousBtn.disabled = true;
  } else {
    previousBtn.disabled = false;
  }
  if (currentStep >= response.stepInfo.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
  updateURL();
}

function goNext() {
  currentStep += 1;
  enableButton();
  updateDOM();
}

function goBack() {
  currentStep -= 1;
  enableButton();
  updateDOM();
}

function updateDOM() {
  showStep.textContent = "Step " + Number(currentStep + 1);
  currentQuestion.textContent = response.stepInfo[currentStep].questions[0];
  nextQuestion.textContent = response.stepInfo[currentStep].questions[1];
}

function getStepFromQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const step = parseInt(urlParams.get('step'));
  return isNaN(step) ? null : step; 
}


function updateURL(){
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('step', currentStep + 1);
  // const title = 'currentStep' ;
  window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
}

currentStep = getStepFromQueryParams() -1;
updateDOM();
enableButton();
