let container = document.getElementById("container");
let startBtn = document.getElementById("startBtn");
let title = document.getElementById("title");
let takeControl = document.getElementById("takeControl");
let icons = document.getElementById("icons");
startBtn.addEventListener("click", () => {
  title.remove();
  takeControl.remove();
  icons.remove();
  startBtn.remove();
  let snake = document.createElement("div");
  snake.style.height = "10px";
  snake.style.width = "10px";
  snake.classList.add("bg-warning");
  container.append(snake);
});