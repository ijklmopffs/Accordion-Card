const allSvgs = document.querySelectorAll("svg");
let isFlipped = false;

allSvgs.forEach((svg) => {
  svg.addEventListener("click", () => {
    if (isFlipped) {
      svg.style.transform = "none";
      isFlipped = false;
    } else {
      svg.style.transform = "rotate(180deg)";
      isFlipped = true;
    }
    const parentDiv = svg.parentNode;
    const answer = parentDiv.querySelector(".answer");
    answer.classList.toggle("none");
  });
});
