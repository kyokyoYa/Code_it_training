const myNumberTag = document.getElementById("myNumber");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const colors = document.querySelectorAll(".color-btn");

let myNumber = myNumberTag.textContent;

decreaseBtn.onclick = () => {
  if (myNumber > 0) {
    myNumber--;
    myNumberTag.textContent = myNumber;
  }
};

increaseBtn.onclick = () => {
  if (myNumber < 10) {
    myNumber++;
    myNumberTag.textContent = myNumber;
  }
};

const colorBtns = document.getElementsByClassName("color-btn");

for (let index = 0; index < colorBtns.length; index++) {
  colorBtns[index].onclick = function () {
    myNumberTag.style.color = getComputedStyle(colors[index]).backgroundColor;
  };
}
