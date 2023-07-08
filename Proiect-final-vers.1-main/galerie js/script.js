const data = [ 
    {
    taste: "Pepsi Cola",
    introduction: 
    "Pepsi este brandul îndrăzneț și optimist care îi reprezintă pe cei cu spirit liber.",
    photo: "./img/p1.jpg",
    },
    {
    taste: "Mirinda",
    introduction: 
    "Gustul specific de portocală al băuturii Mirinda oferă o aromă intensă de fructe, ce te îndeamnă să dai frâu liber imaginaţiei, creând o lume distractivă unde senzațiile tari sunt la putere.",
    photo: "./img/mirinda.jpg",
    },
    {
    taste: "Pepsi Max",
    introduction: 
    "Gustul Max zero zahar!",
    photo: "./img/max.jpg",
    },
    {   
    taste: "Seven Up",
    introduction: 
    "7Up este alegerea evidentă de răcoritoare pentru toți cei care își urmează pasiunea, sunt autentici și au o atitudine de viaţă relaxată şi cool.",
    photo: "./img/sup.jpg",
    },
    {   
    taste: "Pepsico",
    introduction: 
    "În prezent, PepsiCo România are un portofoliu variat de băuturi (precum Pepsi, Prigat, 7UP, Mirinda, Evervess, Gatorade, Lipton), dar și de snacksuri (Lay’s, Star, Doritos).",
    photo: "./img/all.jpg",
    },

];

const sliderWrapper = document.querySelector(".slider-wrapper ul");

sliderWrapper.innerHTML ="";
for(let i = 0; i < data.length; i++) {
    sliderWrapper.innerHTML += `
    <li class="slider-item zoom-out" style="--index: ${i}">
        <img src="${data[i].photo}" alt="" />
        <div class="content">
            <span class="taste">
                <h1>${data[i].taste}</h1>
            </span>
            <span class="line"></span>
            <span class="introduction">
                <p>${data[i].introduction}</p>
            </span>
        </div>    
    </li>
    `;
}

const maxIndex = data.length -1;
const sliderItems = document.querySelectorAll(".slider-item");
const contents = document.querySelectorAll(".content");
const currentOrdinal = document.querySelector(".current-ordinal");
const maxOrdinal = document.querySelector(".max-ordinal");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
var prevIndex = 0;
var currentIndex = 0;
var nextIndex = 0;

sliderItems[0].classList.remove("zoom-out");
sliderItems[1].classList.add("move-right");
contents[0].classList.add("show");

contents.forEach((e) => {
    const tasteWidth = e.querySelector(".taste").offsetWidth - 40;
    e.querySelector(".introduction").getElementsByClassName.width = `${tasteWidth}px`;
});

for (let i = 1; i <= maxIndex +1; i++) {
    currentOrdinal.innerHTML += `<p>${i}</p>`;
}
currentOrdinal.children[0].classList.add("show");
maxOrdinal.innerHTML = `<p>${maxIndex + 1}</p>`;

prevBtn.disabled = true;
nextBtn.disabled = false;

nextBtn.addEventListener("click", () => {
    prevIndex = currentIndex;
    sliderItems[prevIndex].classList.add("zoom-out");
    contents[prevIndex].classList.remove("show");
    nextBtn.disabled = true;

    if(currentIndex < maxIndex) {
        if(currentIndex > 0) {
            sliderItems[prevIndex-1].classList.remove("move-left");
        }
        currentIndex++;
        nextIndex = currentIndex +1;
        sliderItems[currentIndex].classList.remove("move-right");
    }

    setTimeout(() =>{
        sliderWrapper.style = `--index: ${currentIndex}`;
        sliderItems[prevIndex].children[0].style = "transform: translateX(40%)";
        sliderItems[currentIndex].children[0].style = "transform: translateX(0%)";
        currentOrdinal.children[prevIndex].classList.remove("show");
        currentOrdinal.children[currentIndex].classList.add("show");        
    }, 750);

    setTimeout(() => {
        sliderItems[prevIndex].classList.add("move-left");
        sliderItems[currentIndex].classList.remove("zoom-out");

        if(currentIndex < maxIndex) {
            sliderItems[nextIndex].classList.add("move-right");
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    }, 1500);

    setTimeout(() => {
        contents[currentIndex].classList.add("show");
    }, 2000);
});

prevBtn.addEventListener("click", () => {
    prevIndex = currentIndex;
    sliderItems[prevIndex].classList.add("zoom-out");
    contents[prevIndex].classList.remove("show");
    prevBtn.disabled = true;

    if(currentIndex > 0) {
        if(currentIndex < maxIndex) {
            sliderItems[currentIndex + 1].classList.remove("move-right");
        }
        currentIndex--;
        nextIndex = currentIndex - 1;
        sliderItems[currentIndex].classList.remove("move-left");
    }

    setTimeout(() =>{
        sliderWrapper.style = `--index: ${currentIndex}`;
        sliderItems[prevIndex].children[0].style = "transform: translateX(-40%)";
        sliderItems[currentIndex].children[0].style = "transform: translateX(0%)";
        currentOrdinal.children[prevIndex].classList.remove("show");
        currentOrdinal.children[currentIndex].classList.add("show");        
    }, 750);

    setTimeout(() => {
        sliderItems[prevIndex].classList.add("move-right");
        sliderItems[currentIndex].classList.remove("zoom-out");

        if(currentIndex > 0) {
            sliderItems[nextIndex].classList.add("move-left");
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    }, 1500);

    setTimeout(() => {
        contents[currentIndex].classList.add("show");
    }, 2000);
});
