function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControls = document.getElementById("controls");

const input = document.querySelector("input");
const create = document.querySelector("button[data-create");
const destroy = document.querySelector("button[data-destroy]");
const divBoxes = document.getElementById("boxes");
let size = 30;

create.addEventListener("click", (createSomeEl) => {
  if (input.value < 1 || input.value > 100) {
    alert("The number of elements should be between 1 and 100!");
    return;
  }

  createBoxes(input.value);
});

let boxArr = [];

function createBoxes(amount) {
  input.value = "";
  divBoxes.innerHTML = "";
  size = 30;
  boxArr = [];

  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxArr.push(boxEl);
  }
  divBoxes.append(...boxArr);
}

destroy.addEventListener("click", (destroyBoxes) => {
  divBoxes.innerHTML = "";
  size = 30;
  boxArr = [];
});
