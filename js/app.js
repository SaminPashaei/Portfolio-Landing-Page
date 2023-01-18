function setAchieveHeight() {
  let achieveCard = document.querySelectorAll(".achieve-card");

  for (let index = 0; index < achieveCard.length; index++) {
    achieveCard[index].style.height = "fit-content";
  }

  let achieveCardHeight = [];
  for (let index = 0; index < achieveCard.length; index++) {
    achieveCardHeight[index] = window
      .getComputedStyle(achieveCard[index])
      .getPropertyValue("height");
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
    achieveCard[index].style.height = setHeight;
  }
}

setAchieveHeight();
window.onresize = setAchieveHeight;

