let container = document.getElementById("container");
let startBtn = document.getElementById("startBtn");
let title = document.getElementById("title");
let takeControl = document.getElementById("takeControl");
let icons = document.getElementById("icons");
let snake = document.createElement("div");
snake.style.height = "10px";
snake.style.width = "10px";
snake.classList.add("bg-warning");
snake.style.position = "relative";
startBtn.addEventListener("click", () => {
  title.remove();
  takeControl.remove();
  icons.remove();
  startBtn.remove();
  container.append(snake);
});
// control the snake :
let styleBottomNumber;
let styleLeftNumber;
let styleTopNumber;
let styleRightNumber;
document.addEventListener("keydown", (event) => {
  let snakeRect = snake.getBoundingClientRect();
  let widthSnake = snakeRect.width;
  if (event.key === "ArrowUp") {
    if (snake.style.bottom === "") {
      styleBottomNumber = 0;
    } else if (snake.style.bottom.length === 4) {
      styleBottomNumber = snake.style.bottom[0] + snake.style.bottom[1];
      styleBottomNumber = Number(styleBottomNumber);
    } else {
      styleBottomNumber =
        snake.style.bottom[0] + snake.style.bottom[1] + snake.style.bottom[2];
      styleBottomNumber = Number(styleBottomNumber);
    }
    styleBottomNumber += widthSnake;
    styleBottomNumber += "px";
    snake.style.bottom = styleBottomNumber;
  }
  if (event.key === "ArrowRight") {
    if (snake.style.left === "") {
      styleLeftNumber = 0;
    } else if (snake.style.left.length === 4) {
      styleLeftNumber = snake.style.left[0] + snake.style.left[1];
      styleLeftNumber = Number(styleLeftNumber);
    } else {
      styleLeftNumber =
        snake.style.left[0] + snake.style.left[1] + snake.style.left[2];
      styleLeftNumber = Number(styleLeftNumber);
    }
    styleLeftNumber += widthSnake;
    styleLeftNumber += "px";
    snake.style.left = styleLeftNumber;
  }
  if (event.key === "ArrowDown") {
    if (snake.style.top === "") {
      styleTopNumber = 0;
    } else if (snake.style.top.length === 4) {
      styleTopNumber = snake.style.top[0] + snake.style.top[1];
      styleTopNumber = Number(styleTopNumber);
    } else {
      styleTopNumber =
        snake.style.top[0] + snake.style.top[1] + snake.style.top[2];
      styleTopNumber = Number(styleTopNumber);
    }
    styleTopNumber += widthSnake;
    styleTopNumber += "px";
    snake.style.top = styleTopNumber;
  }
  if (event.key === "ArrowLeft") {
    if (snake.style.right === "") {
      styleRightNumber = 0;
    } else if (snake.style.right.length === 4) {
      styleRightNumber = snake.style.right[0] + snake.style.right[1];
      styleRightNumber = Number(styleRightNumber);
    } else {
      styleRightNumber =
        snake.style.right[0] + snake.style.right[1] + snake.style.right[2];
      styleRightNumber = Number(styleRightNumber);
    }
    styleRightNumber += widthSnake;
    styleRightNumber += "px";
    snake.style.right = styleRightNumber;
  }
});
