function renderCarousel() {
  var element = document.querySelector('.mask')
  element.innerHTML = `
    <div class="slides" id="slds"> 
    ${slides.items.map((item, i) => `
      <div id="slide${item.index}" class="slide"> 
        ${item.index < sPos || item.index > ePos ? 
            `<a href="${item.url}" tabindex="-1">`
          : `<a href="${item.url}">` 
        }
        <img src="${item.src}" id="img${item.index}" alt="${item.alt}">
      </a>
    </div>
    `).join('')}
    </div>
  `
}
function updateDOM() {
  var itms = document.getElementsByClassName("slide");
  for (var i = 0; i < itms.length; i++) {
    if ((i+1) < sPos || (i+1) > ePos) {
      itms[i].getElementsByTagName("a")[0].setAttribute("tabindex", -1);
    } else {
      itms[i].getElementsByTagName("a")[0].removeAttribute("tabindex");
    }
  }  
}
function setSlider (dir) {
  var slds = document.getElementById("slds"),
      transform, 
      setModel = function () {
        for (var i = 0; i < maxPos; i++) {
          if (slides["items"][i]["index"] < sPos || slides["items"][i]["index"] > ePos) {
            setItemProp (i, "isVisible", false);
            setItemProp (i, "isFirst", false);
          } else {
            setItemProp (i, "isVisible", true);
            if (slides["items"][i]["index"] === sPos) {
              setItemProp (i, "isFirst", true);
              transform = getItemProp (i, "transform");
            } else {
              setItemProp (i, "isFirst", false);            
            }
          }
        }
        renderSlider(transform);
      }, 
      setButtons = function () {
        if (sPos === minPos) {
          btnPrev.setAttribute("disabled", true);
          btnNext.focus();
        } else {
          btnPrev.removeAttribute("disabled");
         }
        if (ePos === maxPos) {
          btnNext.setAttribute("disabled", true);
          btnPrev.focus();
        } else {
          btnNext.removeAttribute("disabled");
        }        
      },
      getItemProp = function (idx, prop) {
        return slides["items"][idx][prop];
      },
      setItemProp = function (idx, prop, val) {
        slides["items"][idx][prop] = val;
      },
      renderSlider = function (transform) {
        updateDOM();
        slds.style.transform = "translateX(" + transform +"px)";          
      },
      currentFirstHasNext = function () {
        for (var i = 0; i < maxPos; i++) {
          if (slides["items"][i]["isFirst"]) {
            return getItemProp(i, "hasNext");
            break;
          }
        }  
      },
      currentFirstHasPrev = function () {
        for (var i = 0; i < maxPos; i++) {
          if (slides["items"][i]["isFirst"]) {
            return getItemProp(i, "hasPrev");
            break;
          }
        }  
      };

    if (dir === "next") {
      if (currentFirstHasNext) {
        sPos += 1;
        ePos += 1;
        setModel ();
        setButtons ();
      }
    } else {
      if (currentFirstHasPrev) {
        sPos -= 1;
        ePos -= 1;
        setModel ();
        setButtons ();
      }      
    }
}

var   btnNext = document.getElementById("btnNext"),
      btnPrev = document.getElementById("btnPrev"),
      slidesWrp = document.getElementById("slidesWrp"),
      minPos = 1,
      maxPos = 10,
      sPos = 1,
      ePos = 5,
      slides = {
        "items": [{
        "transform": 0,
        "isFirst": true,
        "index": 1,
        "isVisible": true,
        "hasPrev": false,
        "hasNext": true,
        "src": "https://picsum.photos/id/63/200/200",
        "url": "#",
        "alt": "A cup of coffee."
      }, {
        "transform": -200,
        "isFirst": false,
        "index": 2,
        "isVisible": true,
        "hasPrev": true,
        "hasNext": true,
        "src": "https://picsum.photos/id/202/200/200",
        "url": "#",
        "alt": "Old road."
      }, {
        "transform": -400,
        "isFirst": false,
        "index": 3,
        "isVisible": true,
        "hasPrev": true,
        "hasNext": true,
        "src": "https://picsum.photos/id/6/200/200",
        "url": "#",
        "alt": "A laptop."
      }, {
        "transform": -600,
        "isFirst": false,
        "index": 4,
        "isVisible": true,
        "hasPrev": true,
        "hasNext": true,
        "src": "https://picsum.photos/id/11/200/200",
        "url": "#",
        "alt": "A green view."
      }, {
        "transform": -800,
        "isFirst": false,
        "index": 5,
        "isVisible": true,
        "hasPrev": true,
        "hasNext": true,
        "src": "https://picsum.photos/id/20/200/200",
        "url": "#",
        "alt": "An old phone."
      }, {
        "transform": -1000,
        "isFirst": false,
        "index": 6,
        "isVisible": false,
        "hasPrev": true,
        "hasNext": true,
        "src": "https://picsum.photos/id/32/200/200",
        "url": "#",
        "alt": "A bench."
      }, {
        "transform": -1200,
        "isFirst": false,
        "index": 7,
        "isVisible": false,
        "hasPrev": true,
        "hasNext": true,
        "src": "https://picsum.photos/id/34/200/200",
        "url": "#",
        "alt": "Old red barrel."
      }, {
        "transform": -1400,
        "isFirst": false,
        "index": 8,
        "isVisible": false,
        "hasPrev": true,
        "hasNext": true,
        "src": "https://picsum.photos/id/42/200/200",
        "url": "#",
        "alt": "a long table."
      }, {
        "transform": -1600,
        "isFirst": false,
        "index": 9,
        "isVisible": false,
        "hasPrev": true,
        "hasNext": true,
        "src": "https://picsum.photos/id/53/200/200",
        "url": "#",
        "alt": "blue sky."
      }, {
        "transform": 0,
        "isFirst": false,
        "index": 10,
        "isVisible": false,
        "hasPrev": true,
        "hasNext": false,
        "src": "https://picsum.photos/id/59/200/200",
        "url": "#",
        "alt": "an old fence."
      }]
    };

    
btnNext.addEventListener("click", function(e) {
  setSlider("next");
}, false);
btnPrev.addEventListener("click", function(e) {
  setSlider("prev");
}, false);

slidesWrp.addEventListener("keyup", function(e) {
  if (e.which === 39) {
    if (ePos === maxPos) {
      return false;
    } else {
      setSlider("next");
    }
  }
  if (e.which === 37) {
    if (sPos === minPos) {
      return false;
    } else {
      setSlider("prev");
    }
  }
}, false);

renderCarousel();