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

const isPrevBtnEnable = () => {
  return stepNumber === 1 ? false : true;
};

const isNextBtnEnable = () => {
  return stepNumber === response.stepCount ? false : true;
};

const setQuestionList = () => {
  if (!isPrevBtnEnable()) prevBtn.disabled = true;
  else if (!isNextBtnEnable()) nextBtn.disabled = true;

  response.stepInfo[stepNumber - 1].questions.forEach((question) => {
    const li = document.createElement("li");
    li.innerHTML = question;
    questionList.appendChild(li);
  });
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

setQuestionList();

prevBtn.addEventListener("click", () => buttonEventHandler("prev"));

nextBtn.addEventListener("click", () => buttonEventHandler("next"));
