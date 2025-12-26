
console.log("Hello, this is my website!");

const button = document.getElementById("ToggleBox");
const box = document.querySelector(".box");

button.addEventListener("click", () => {
  box.classList.toggle("active");
});
