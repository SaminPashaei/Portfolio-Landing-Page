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

setAchieveHeight();
window.onresize = setAchieveHeight;
