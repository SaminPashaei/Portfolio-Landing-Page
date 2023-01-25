function setAchieveHeight() {
  let PreAchieveCard = document.querySelectorAll(".achieve-card");
  for (let index = 0; index < PreAchieveCard.length; index++) {
    PreAchieveCard[index].style.height = "fit-content";
  }

  if (window.innerWidth >= 768) {
    let achieveCard = document.querySelectorAll(".achieve-card");

    let achieveCardHeight = [];
    for (let index = 0; index < achieveCard.length; index++) {
      achieveCardHeight[index] = achieveCard[index].clientHeight;
    }

    let setHeight;
    if (achieveCardHeight[0] > achieveCardHeight[1]) {
      if (achieveCardHeight[0] > achieveCardHeight[2]) {
        setHeight = achieveCardHeight[0];
      } else {
        setHeight = achieveCardHeight[2];
      }
    } else {
      if (achieveCardHeight[1] > achieveCardHeight[2]) {
        setHeight = achieveCardHeight[1];
      } else {
        setHeight = achieveCardHeight[2];
      }
    }

    for (let index = 0; index < achieveCard.length; index++) {
      achieveCard[index].style.height = setHeight + "px";
    }
  }
}

function changePopupTxt(index) {
  navigator.clipboard.readText().then(function (text) {
    if (index === 0) {
      if (text !== "Saadat Abad, Tehran, Iran") {
        hoverPopupTxt[0].textContent = "Click to copy";
      } else {
        hoverPopupTxt[0].textContent = "Copied";
      }
    } else if (index === 1) {
      if (text !== "saminpashaei96@gmail.com") {
        hoverPopupTxt[1].textContent = "Click to copy";
      } else {
        hoverPopupTxt[1].textContent = "Copied";
      }
    } else {
      if (text !== "+989912920904") {
        hoverPopupTxt[2].textContent = "Click to copy";
      } else {
        hoverPopupTxt[2].textContent = "Copied";
      }
    }
  });
}

function copyPopup(data) {
  navigator.clipboard.writeText(data);

  if (data === "Saadat Abad, Tehran, Iran") {
    hoverPopupTxt[0].textContent = "Copied";
  } else if (data === "saminpashaei96@gmail.com") {
    hoverPopupTxt[1].textContent = "Copied";
  } else {
    hoverPopupTxt[2].textContent = "Copied";
  }
}

setAchieveHeight();
window.onresize = setAchieveHeight;

let hoverPopupTxt = document.querySelectorAll(".hover-popup-txt");
let contactTxt = document.querySelectorAll(".contact-txt");
for (let index = 0; index < 3; index++) {
  contactTxt[index].addEventListener("mouseenter", function () {
    changePopupTxt(index);
  });
}
