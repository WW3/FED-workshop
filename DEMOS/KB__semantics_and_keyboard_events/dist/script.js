const btn = document.querySelector("button");
const spn = document.querySelector("span");
function doSomething() {
  document.querySelector("body").classList.toggle("bgcolor");
}
btn.addEventListener("click", doSomething);
spn.addEventListener("click", doSomething);