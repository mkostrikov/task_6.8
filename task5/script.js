let input = document.querySelector("form input");
let duplicateField = document.querySelector("#duplicateField");
let button = document.querySelector("form button");

input.addEventListener("input", textDuplicate);
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);
  input.value = "";
  duplicateField.textContent = "";
});

function textDuplicate() {
  duplicateField.textContent = input.value;
}
