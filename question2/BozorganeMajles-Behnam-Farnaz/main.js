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

let pages = 0;

const app = document.querySelector("#app");
const question = document.createElement("ul");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous")

getQueryParams();

if (pages === 0) {
    previous.disabled = true;
    previous.classList.add("disabled");
}

if (pages === response.stepInfo.length - 1) {
    next.disabled = true;
    next.classList.add("disabled");
}

question.innerHTML = `<li class="questions">${response.stepInfo[pages].questions}</li>`;
app.prepend(question);


next.addEventListener("click", (e) => {
    previous.disabled = false;
    previous.classList.remove("disabled");
    if (pages + 1 === response.stepInfo.length - 1) {
        next.disabled = true;
        next.classList.add("disabled");
    }
    question.innerHTML = `<li class="questions">${response.stepInfo[pages + 1].questions}</li>`;
    if (pages < response.stepInfo.length - 1) pages++;
    updateQueryParams();
});

previous.addEventListener("click", (e) => {
    next.disabled = false;
    next.classList.remove("disabled");
    if (pages - 1 === 0) {
        previous.disabled = true;
        previous.classList.add("disabled");
    }
    question.innerHTML = `<li class="questions">${response.stepInfo[pages - 1].questions}</li>`;
    if (pages > 0) pages--;
    updateQueryParams();
});

function updateQueryParams() {
    const searchParams = new URLSearchParams();
    searchParams.set("step", pages + 1);
    const newPathQuery = window.location.pathname + "?" + searchParams.toString();
    history.pushState({}, "", newPathQuery);
}

function getQueryParams() {
    const queryParams = window.location.search;
    const numberSpliter = queryParams.split("=");
    const desiredStep = Number(numberSpliter[1]);
    if (desiredStep > 0) pages = desiredStep - 1;
}