const arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.setAttribute("transform", "rotate(180 50 50)");
    console.log("worked");
  });
});
