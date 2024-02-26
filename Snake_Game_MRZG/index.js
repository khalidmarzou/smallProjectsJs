let container = document.getElementById("container");
let startBtn = document.getElementById("startBtn");
let title = document.getElementById("title");
let takeControl = document.getElementById("takeControl");
let icons = document.getElementById("icons");
let snake = document.createElement("div");
snake.style.height = "10px";
snake.style.width = "10px";
snake.classList.add("bg-warning");
snake.style.position = "absolute";
startBtn.addEventListener("click", () => {
  title.remove();
  takeControl.remove();
  icons.remove();
  startBtn.remove();
  container.append(snake);
});
// control the snake :
document.addEventListener("keydown", (event) => {
  let snakeRect = snake.getBoundingClientRect();
  let widthSnake = snakeRect.width;
  console.log(snakeRect);
  switch (event.key) {
    case "ArrowUp":
      snake.style.top = snakeRect.top - widthSnake + "px";
      break; // i work with width because in this case i have the same value
    case "ArrowRight":
      snake.style.left = snakeRect.left + widthSnake + "px";
      break;
    case "ArrowDown":
      snake.style.top = snakeRect.top + widthSnake + "px";
      break;
    case "ArrowLeft":
      snake.style.left = snakeRect.left - widthSnake + "px";
      break;
    default:
      break;
  }
});
