let link = document.querySelector(".changing-link");
link.addEventListener("click", textInput);

function textInput(e) {
  e.preventDefault();
  let text = prompt("Введите текст");
  link.textContent = text;
}
