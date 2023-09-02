// 이벤트 객체
const hwInput = document.getElementById("myInput");
const hwBtn = document.getElementById("myBtn");

let order = 1;
let arr = [];
function printEvent(hyunwoo) {
  if (order === 1) {
    hyunwoo.target.style.color = "red";
    arr.push(hyunwoo.key);
    order = 2;
  } else if (order === 2) {
    hyunwoo.target.style.color = "orange";
    arr.push(hyunwoo.key);
    order = 3;
  } else if (order === 3) {
    hyunwoo.target.style.color = "yellow";
    arr.push(hyunwoo.key);
    order = 4;
  } else if (order === 4) {
    hyunwoo.target.style.color = "green";
    arr.push(hyunwoo.key);
    order = 5;
  } else {
    hyunwoo.target.style.color = "blue";
    arr.push(hyunwoo.key);
    order = 1;
  }
  console.log(arr);
}

let turn = true;
function printEvent2(hyunwoo) {
  console.log(hyunwoo);
  if (turn) {
    hyunwoo.target.textContent = "최현우 맞다.";
    hyunwoo.target.style.color = "green";
    turn = false;
  } else {
    hyunwoo.target.textContent = "최현우 아니다";
    hyunwoo.target.style.color = "orange";
    turn = true;
  }
}

hwInput.addEventListener("keydown", printEvent);
hwBtn.addEventListener("click", printEvent2);
