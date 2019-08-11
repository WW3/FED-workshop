const a = document.getElementById("a");
const b = document.getElementById("b");
const msg_a = "First visible nitification";
const msg_b = "Second visible notification";
const msg_aa = "The first dedicated nitification available to assistive technologies users only";
const msg_bb = "The second dedicated notification available to assistive technologies users only";
const v_notif = document.querySelector("#visual-notifs > div");
const l_notif = document.getElementById("live-notifs");
function setNotif(whichCase) {
  l_notif.textContent = "";
  if (whichCase === "a") {
    v_notif.textContent = msg_a;
    l_notif.textContent = msg_aa;
  } else {
    v_notif.textContent = msg_b;
    l_notif.textContent = msg_bb;
  }
  v_notif.classList.add("on");
  setTimeout( () => {
    v_notif.classList.remove("on");
    v_notif.textContent = "";
  }, 2000);
}
a.addEventListener("click", () => {
  setNotif(a.id);
});
b.addEventListener("click", () => {
  setNotif(b.id);
});
