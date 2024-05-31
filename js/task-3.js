const inputField = document.getElementById("name-input");
const outputSpan = document.getElementById("name-output");

inputField.addEventListener("input", inputInfo);

function inputInfo(event) {
  const inputInfoValue = event.target.value.trim();
  outputSpan.textContent = inputInfoValue ? inputInfoValue : "Anonymous";
  console.log(inputInfoValue);
}
