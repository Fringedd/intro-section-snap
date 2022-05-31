const hammy = document.getElementById("hammy");
const closy = document.getElementById("closy");
const mobMenu = document.getElementById("mob-men");
const blurr = document.getElementById("blur");
const hidImg = document.getElementById("hidden-img");
const hidImgTwo = document.getElementById("hidden-imgTwo");
const featAcc = document.getElementById("feature-acc");
const CompAcc = document.getElementById("company-acc");
const feat = document.getElementById("feat");
const comp = document.getElementById("comp");
const showImg = document.getElementById("shown-img");
const showImgTwo = document.getElementById("show-imgTwo");
const deskFeat = document.getElementById("feature-acc2");
const featy = document.getElementById("featy");
const deskComp = document.getElementById("company-acc2");
const compy = document.getElementById("compy");
const deskUp = document.getElementById("deskUp");
const deskupTwo = document.getElementById("deskUpTwo");
const deskDown = document.getElementById("deskDown");
const deskDownTwo = document.getElementById("deskDownTwo");

function openNav() {
  if (mobMenu.classList.contains("hidden")) {
    mobMenu.classList.remove("hidden");
    blurr.classList.remove("hidden");
    mobMenu.classList.toggle("active");
  }
}
function closeNav() {
  if (!mobMenu.classList.contains("hidden")) {
    mobMenu.classList.add("hidden");
    blurr.classList.add("hidden");
  }
}

function openAccordionOne() {
  if (hidImg.classList.contains("hidden")) {
    hidImg.classList.remove("hidden");
    showImg.classList.add("hidden");
    featAcc.classList.remove("hidden");
    console.log("pesho");
  } else {
    hidImg.classList.add("hidden");
    showImg.classList.remove("hidden");
    featAcc.classList.add("hidden");
  }
}
function openAccordionTwo() {
  if (hidImgTwo.classList.contains("hidden")) {
    hidImgTwo.classList.remove("hidden");
    showImgTwo.classList.add("hidden");
    CompAcc.classList.remove("hidden");
  } else {
    hidImgTwo.classList.add("hidden");
    showImgTwo.classList.remove("hidden");
    CompAcc.classList.add("hidden");
  }
}

function openDesk() {
  if (deskFeat.classList.contains("hidden")) {
    deskFeat.classList.remove("hidden");
    deskDown.classList.add("hidden");
    deskUp.classList.remove("hidden");
  } else {
    deskFeat.classList.add("hidden");
    deskDown.classList.remove("hidden");
    deskUp.classList.add("hidden");
  }
}
function openDesk2() {
  if (deskComp.classList.contains("hidden")) {
    deskComp.classList.remove("hidden");
    deskDownTwo.classList.add("hidden");
    deskupTwo.classList.remove("hidden");
  } else {
    deskComp.classList.add("hidden");
    deskDownTwo.classList.remove("hidden");
    deskupTwo.classList.add("hidden");
  }
}

hammy.addEventListener("click", openNav);
closy.addEventListener("click", closeNav);
feat.addEventListener("click", openAccordionOne);
comp.addEventListener("click", openAccordionTwo);
featy.addEventListener("click", openDesk);
compy.addEventListener("click", openDesk2);
