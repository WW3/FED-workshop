const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("keyup", (e) => {
    
    console.log(e);
    if (e.keyCode === 40) { //arrow down
      e.target.classList.toggle("on");
    }
  });
});