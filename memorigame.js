const cardsArray = [
    {
        name: "fire",
        img: "image/cat.jpg"
    },
    {
        name: "dog",
        img: "image/dog.jpg"
    },
    {
        name: "dragon",
        img: "image/dragon.jpg"
    },
    {
        name: "lion",
        img: "image/lion.jpg"
    },
    {
        name: "moon",
        img: "image/moon.jpg"
    },
    {
        name: "mouse",
        img: "image/mouse.jpg"
    },
    {
        name: "moutain",
        img: "image/moutain.jpg"
    },
    {
        name: "snake",
        img: "image/snake.jpg"
    },
];

let previousCard;
let count = 0;
let firstGuess = "";
let secondGuess = "";
const delay = 1000;
const grid = document.querySelector(".grid");
// x2 va cong thuc random/ sort(()=> 0.5 - Math.random())
const cardsArrayMerge = cardsArray.concat(cardsArray).sort(()=> 0.5 - Math.random());
cardsArrayMerge.forEach((item) => {
    const card = document.createElement("div");
    // font
    const front = document.createElement("div");
    front.classList.add("front");
    // back
    const back = document.createElement("div");
    back.classList.add("back");

    card.classList.add("card");
    card.setAttribute("data-name", item.name);
    back.style.backgroundImage = `url(${item.img})`;

    card.appendChild(front);
    card.appendChild(back);

    grid.appendChild(card);
});

function matchingCard() {
    const slectecs = document.querySelectorAll(".selected");
    [...slectecs].forEach(item => item.classList.add("matched"));
}

function resetGuess() {
    count = 0;
    firstGuess = "";
    secondGuess = "";
    previousCard = null;
    const slectecs = document.querySelectorAll(".selected");
    [...slectecs].forEach(item => item.classList.remove("selected"));
}

grid.addEventListener("click", function(e) {
    const clicked = e.target;
    
    if (clicked.nodeName === "SECTON" || previousCard === clicked) {
        return;
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add("selected");
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add("selected");
        }
            
            if( firstGuess !== "" && secondGuess !== "") {
                if ( firstGuess === secondGuess) {
                    console.log("matched");
                    setTimeout(matchingCard, delay);
                    setTimeout(resetGuess, delay);
                }
                else {
                    setTimeout(resetGuess, delay);
                }
            }

    }
    previousCard = clicked;
    // gan item vua click = previous
});