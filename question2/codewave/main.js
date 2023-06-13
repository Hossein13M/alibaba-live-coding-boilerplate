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

let baseUrl = "";

const getBaseUrl = () => {
  const currentURL = window.location.href;
  const pathArray = currentURL.split("/");
  baseUrl =
    pathArray[0] +
    "//" +
    pathArray.slice(2, 5).join("/") +
    "/" +
    pathArray[5].split("?")[0];
};

getBaseUrl();

const setUrl = () => {
  window.location.href = `${baseUrl}?step=${stepNumber}`;
};

const getFromUrl = () => {
  let currentURL = window.location.href;
  let params = new URLSearchParams(new URL(currentURL).search);
  let step = params.get("step");
  stepNumber = step ? Number(step) : Number(stepNumber);
};

//#endregion url

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

const isPrevBtnEnable = () => {
  return stepNumber !== 1;
};

const isNextBtnEnable = () => {
  return stepNumber !== response.stepCount;
};

isButtonsEnable = () => {
  prevBtn.disabled = !isPrevBtnEnable();
  nextBtn.disabled = !isNextBtnEnable();
};
const setQuestionList = () => {
  isButtonsEnable();
  response.stepInfo[stepNumber - 1].questions.forEach((question) => {
    const li = document.createElement("li");
    li.innerHTML = question;
    questionList.appendChild(li);
  });
};

const removeChildNodes = () => {
  questionList.replaceChildren();
};

const prevButtonHandler = () => {
  if (isPrevBtnEnable()) {
    stepNumber -= 1;
  }
};

const nextButtonHandler = () => {
  if (isNextBtnEnable()) {
    stepNumber += 1;
  }
};

const createDom = () => {
  getFromUrl();
  // getfromLocalStorage();
  setQuestionList();
};

const updateDom = () => {
  removeChildNodes();
  isButtonsEnable();
  setUrl();
  setQuestionList();
};

const buttonEventHandler = (type) => {
  type === "prev" ? prevButtonHandler() : nextButtonHandler();
  updateDom();
};

createDom();

prevBtn.addEventListener("click", () => buttonEventHandler("prev"));

nextBtn.addEventListener("click", () => buttonEventHandler("next"));
