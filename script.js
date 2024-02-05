const currentColor = document.querySelector(".currentColor");
const generateButton = document.querySelector(".btn");
const body = document.querySelector("body");

function generateHexColor(hexlength = 6) {
  const hexElements = "0123456789ABCDEF";
  let hex = "";
  for (let i = 0; i < hexlength; i++) {
    const randomIndex = Math.floor(Math.random() * hexElements.length);
    hex += hexElements.charAt(randomIndex);
  }
  return hex;
}

generateButton.addEventListener("click", () => {
  const generatedColor = `#${generateHexColor()}`;
  currentColor.textContent = generatedColor;
  body.style.backgroundColor = generatedColor;
});
