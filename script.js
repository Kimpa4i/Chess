const figures = document.querySelectorAll(".figure");
const gamecells = document.querySelectorAll(".gamecell");

console.log(figures);

figures.forEach(figure => {
  figure.addEventListener("dragstart", dragStart);
});

let beingDragged;

function dragStart(e) {
  beingDragged = e.target;
}

gamecells.forEach(gamecell => {
  gamecell.addEventListener("dragover", dragOver);
  gamecell.addEventListener("drop", dragDrop);
});

function dragDrop(e) {
  e.target.append(beingDragged);
}

function dragOver(e) {
  e.preventDefault();
}
