const colors = ["green", "red", "rgba(133,122,200)", "f15025"]
const btn = document.getElementByID("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    //get random number betwenn 0-3
    const randomNumber = 2;
    document.body.stylr.backgroundColor = colors[randomNuber];
    color.textContent = colors[randomNumber];
});

