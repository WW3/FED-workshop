const btn = document.getElementById("load_more");

function loadMore() {
  const live_region = document.getElementById("live_region");
  const more_data = [
  {title: "BB 1", target: "/bb1", desc: "Contact is a very shay person who loves giving credit to his fellow friends achieve their goals.", src: "https://static.wixstatic.com/media/08403b_902d3927e43b4bc08ee69f2ef75d73b4~mv2.jpg/v1/fill/w_600,h_337,al_c,q_80,usm_0.66_1.00_0.01/08403b_902d3927e43b4bc08ee69f2ef75d73b4~mv2.webp"}, 
  {title: "BB 2", target: "/BB2", desc: "Contact is a very shay person who loves giving credit to his fellow friends achieve their goals.", src: "https://static.wixstatic.com/media/08403b_902d3927e43b4bc08ee69f2ef75d73b4~mv2.jpg/v1/fill/w_600,h_337,al_c,q_80,usm_0.66_1.00_0.01/08403b_902d3927e43b4bc08ee69f2ef75d73b4~mv2.webp"}, 
  {title: "BB 3", target: "/BB", desc: "Contact is a very shay person who loves giving credit to his fellow friends achieve their goals.", src: "https://static.wixstatic.com/media/08403b_902d3927e43b4bc08ee69f2ef75d73b4~mv2.jpg/v1/fill/w_600,h_337,al_c,q_80,usm_0.66_1.00_0.01/08403b_902d3927e43b4bc08ee69f2ef75d73b4~mv2.webp"} 
];

  let html = "";
  const cards = document.getElementById("cards")
  more_data.map((data, i)=> {
      html += "<li tabindex='-1' id='more_li_" + i +"'><div class='card'>"
         + "<img alt='another stupid tie' src='"+ data.src + "'>"
         + "<h2><a href='"+ data.target +"'>"+ data.title +"</a></h2>"
         + "<div class='desc'>"+ data.desc + "</div>" 
         + "</div></li>";
  });

  cards.insertAdjacentHTML("beforeEnd", html);
  live_region.textContent = more_data.length +" cards added successfully to list";
  document.getElementById("more_li_1").focus();
  btn.hidden = true;
}
btn.addEventListener("click", loadMore);