document.querySelector("#consoleLog").addEventListener("click", () => {
  alert(
    "Метод консоли, используется для вывода сообщений в браузерную консоль."
  );
});

document.querySelector("#alert").addEventListener("click", () => {
  alert("Показывает диалоговое окно с сообщением и кнопкой OK.");
});

document.querySelector("#prompt").addEventListener("click", () => {
  alert("Отображает диалоговое окно с запросом на ввод текста.");
});
