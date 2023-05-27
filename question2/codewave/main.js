const response = {
  stepCount: 4,
  stepInfo: [
    {
      stepNumber: 1,
      questions: ["step 1 - question 1", "step 1 - question 2"],
    },
    {
      stepNumber: 2,
      questions: ["step 2 - question 1", "step 2 - question 2"],
    },
    {
      stepNumber: 3,
      questions: ["step 3 - question 1", "step 3 - question 2"],
    },
    {
      stepNumber: 4,
      questions: ["step 4 - question 1", "step 4 - question 2"],
    },
  ],
};

let questionList = document.querySelector(".question-list");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let stepNumber = 1;

//#region url

let baseUrl = "http://localhost:5500/question2/codewave/index.html";

const setUrl = () => {
  window.location.href = `${baseUrl}?step=${stepNumber}`;
}

const getFromUrl = () => {
  let currentURL = window.location.href;
  let params = new URLSearchParams(new URL(currentURL).search);
  let step = params.get("step");
  stepNumber = step ? Number(step) : Number(stepNumber);
}

//#endregion url

const isPrevBtnEnable = () => {
  return stepNumber === 1 ? false : true;
};

const isNextBtnEnable = () => {
  return stepNumber === response.stepCount ? false : true;
};

// #region local storage 
// TODO: if you want use local storage option should to comment url setter codes and comment out these functions

// const getfromLocalStorage = () => {
//   const localstorageData = localStorage.getItem("stepInfo");
//   if (localstorageData) {
//     parsedDate = JSON.parse(localstorageData);
//     stepNumber = parsedDate.stepNumber;
//   }
// };

// const setStepToLocalStorage = () => {
//   localStorage.setItem(
//     "stepInfo",
//     JSON.stringify(response.stepInfo[stepNumber - 1])
//   );
// };

// #endrgion local storage 

const setQuestionList = () => {
  if (!isPrevBtnEnable()) prevBtn.disabled = true;
  else if (!isNextBtnEnable()) nextBtn.disabled = true;

  response.stepInfo[stepNumber - 1].questions.forEach((question) => {
    const li = document.createElement("li");
    li.innerHTML = question;
    questionList.appendChild(li);
  });
  // setStepToLocalStorage();
};

const removeChildNodes = () => {
  questionList.replaceChildren();
};

const buttonEventHandler = (type) => {
  if (type === "prev") {
    if (!isPrevBtnEnable()) return;
    stepNumber -= 1;
    // if (isNextBtnEnable()) nextBtn.disabled = false;
  } else {
    if (!isNextBtnEnable()) return;
    stepNumber += 1;
    // if (isPrevBtnEnable()) prevBtn.disabled = false;
  }
  setUrl()
  removeChildNodes();
  setQuestionList();
  if (type === "prev") {
    // stepNumber -= 1;
    if (isNextBtnEnable()) nextBtn.disabled = false;
  } else {
    // stepNumber += 1;
    if (isPrevBtnEnable()) prevBtn.disabled = false;
  }
};

// getfromLocalStorage();
getFromUrl();
setQuestionList();

prevBtn.addEventListener("click", () => buttonEventHandler("prev"));

nextBtn.addEventListener("click", () => buttonEventHandler("next"));
