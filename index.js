let index = 0;

const changeItem = (type) => {
  const grid = document.getElementById("grid");
  const gridContainer = document.getElementById("grid-container");
  const gridContainerWidth = gridContainer.offsetWidth;
  const previousBtn = document.getElementById("previous");
  const nextBtn = document.getElementById("next");
  const firstPageBtn = document.getElementById("first-page-btn");
  const secondPageBtn = document.getElementById("second-page-btn");
  const lastPageBtn = document.getElementById("last-page-btn");
  const maxIndex =
    gridContainerWidth === 1060 ? 3 : gridContainerWidth === 690 ? 4 : 5;
  const itemsPerPage = gridContainerWidth === 1060 ? 3 : 2;
  if (type === "previous" && index > 0) {
    index--;
    grid.style.transform = `translateX(${-index * 366}px)`;
  } else if (type === "next" && index < maxIndex) {
    index++;
    grid.style.transform = `translateX(-${index * 366}px)`;
  } else if (type === "first-page") {
    index = 0;
    grid.style.transform = "translateX(0px)";
  } else if (type === "second-page") {
    index = itemsPerPage;
    grid.style.transform = `translateX(${-itemsPerPage * 366}px)`;
  } else if (type === "last-page") {
    index = 4;
    grid.style.transform = `translateX(${-4 * 366}px)`;
  }

  if (index <= 0) {
    previousBtn.classList.add("disable");
  } else previousBtn.classList.remove("disable");

  if (index >= maxIndex) {
    nextBtn.classList.add("disable");
  } else nextBtn.classList.remove("disable");

  if (index >= 4) {
    firstPageBtn.classList.remove("selected");
    secondPageBtn.classList.remove("selected");
    lastPageBtn.classList.add("selected");
  } else if (index >= itemsPerPage) {
    firstPageBtn.classList.remove("selected");
    lastPageBtn.classList.remove("selected");
    secondPageBtn.classList.add("selected");
  } else {
    secondPageBtn.classList.remove("selected");
    lastPageBtn.classList.remove("selected");
    firstPageBtn.classList.add("selected");
  }
};
