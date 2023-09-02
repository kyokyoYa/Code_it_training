const informations = document.querySelectorAll("[data-information]");
const list = {
  title: "자바스크립트 공부하기",
  manager: "최현우",
  status: "",
};

for (let el of informations) {
  const information = el.dataset.information;
  el.textContent = list[information];
}

const btns = document.querySelectorAll(".btn");
for (let btn of btns) {
  const status = btn.dataset.status;
  btn.onclick = function () {
    informations[2].textContent = status;
    informations[2].dataset.status = status;
  };
}
