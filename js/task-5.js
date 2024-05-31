function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const currentColorName = document.querySelector(".color");

btn.addEventListener("click", changeColor);

function changeColor() {
  bodyColor.style.background = `${getRandomHexColor()}`;
  const rgbColor = document.querySelector("body").style.background;
  function rgbToHex(rgb) {
    var rgb = rgb.match(
      /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    );

    return rgb && rgb.length === 4
      ? "#" +
          ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
          ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
          ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
      : "";
  }

  const hexColor = rgbToHex(rgbColor);
  currentColorName.innerHTML = `<p class="js-text-color">HEX: ${hexColor}<br> RGB: ${rgbColor} </p>`;
}

// ** GPT variation **
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, "0")}`;
// }

// const btn = document.querySelector(".change-color");
// const bodyColor = document.querySelector("body");
// const currentColorName = document.querySelector(".color");

// btn.addEventListener("click", () => {
//   const newColor = getRandomHexColor();
//   bodyColor.style.background = newColor;
//   currentColorName.innerHTML = `<p class="js-text-color">HEX: ${newColor}<br> RGB: ${bodyColor.style.background} </p>`;
// });
