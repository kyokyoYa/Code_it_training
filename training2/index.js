const toDoList = document.querySelector("#to-do-list");
const addition = document.getElementById(`list-addition`);
const del = document.getElementById(`list-del`);

const addNewTodo = (text) => {
  const create_li = document.createElement(`li`);
  create_li.textContent = text;
  toDoList.append(create_li);
};

let num = 0;

addition.onclick = () => {
  // if (toDoList.children.length <= 2) {
  //   const title = prompt("내용을 입력해주세요");
  //   addNewTodo(title);
  // }

  if (num === 0) {
    addNewTodo("자바스크립트 공부하기");
  } else if (num === 1) {
    addNewTodo("블로그 작성하기");
  } else if (num === 2) {
    addNewTodo("운동하기");
  }
  if (num <= 2) num += 1;
};

del.onclick = () => {
  if (num >= 1) {
    num--;
  }
  toDoList.lastElementChild.remove();
};
