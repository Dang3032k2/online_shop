let index = 0;
const grid = document.getElementById("grid");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const itemsPerPage =
  window.innerWidth >= 1410 ? 3 : window.innerWidth >= 768 ? 2 : 1;
const maxIndex = grid.children.length - itemsPerPage;
const dots = document.querySelectorAll(".dot");

const handleChangeItem = (type, pageNumber) => {
  const changeType = type;
  if (changeType === "previous") {
    if (index > 0) index--;
    else index = maxIndex;
  } else if (changeType === "next") {
    if (index < maxIndex) index++;
    else index = 0;
  } else if (changeType === "page") {
    index = pageNumber * itemsPerPage;
  }
  grid.style.transform = `translateX(${-index * 366}px)`;
  dots.forEach((dot) => {
    dot.classList.remove("selected");
  });
  dots[Math.round(index / itemsPerPage)].classList.add("selected");
};

document
  .getElementById("previous")
  .addEventListener("click", () => handleChangeItem("previous"));
document
  .getElementById("next")
  .addEventListener("click", () => handleChangeItem("next"));
document
  .getElementById("page1")
  .addEventListener("click", () => handleChangeItem("page", 0));
document
  .getElementById("page2")
  .addEventListener("click", () => handleChangeItem("page", 1));
document
  .getElementById("page3")
  .addEventListener("click", () => handleChangeItem("page", 2));
