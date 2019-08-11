function logActiveElem() {
  console.log(document.activeElement);
}
document.addEventListener("focus", logActiveElem, true);