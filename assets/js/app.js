document
  .getElementById("shortcut")
  .addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "k") {
      document.getElementById("search").focus();
    }
  });
