/*
    JS for Clone Netflix page
    dd/mm/yy: 05/05/2020
    Made by: Khuat Duy Quang
*/
const tabs = document.querySelectorAll(".tabs__item");
const answers = document.querySelectorAll(".answer__hide");

//Event
tabs.forEach((tab) => tab.addEventListener("click", selectTab));

//selectTab function
function selectTab(e) {
  removeAnswer();

  //grab answer div content through ID by click on selected tab.
  const answerContent = document.querySelector(`#${this.id}-answer`);
  answerContent.classList.add("answer__show");

  /*Rotate the plus X when open and close
    contains('rotate') means 'x' stage => when click it change to '+ and hide the answer
    otherwise means '+' stage => when click it change to 'x'
  */
  if (this.lastElementChild.classList.contains("rotate")) {
    this.lastElementChild.classList.remove("rotate");
    removeAnswer();
  } else {
    this.lastElementChild.classList.add("rotate");
  }
}

//function removeAnswer
function removeAnswer() {
  answers.forEach((ans) => ans.classList.remove("answer__show"));
}
