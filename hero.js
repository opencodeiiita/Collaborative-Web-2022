window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
const wrapper = document.getElementById("tiles");

let columns = 0,
  rows = 0,
  toggled = false;

const toggle = () => {
  document.body.classList.add("toggled");
  setTimeout(() => {
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
    document.body.style.height = "fit-content";
  }, 1200);
};

const handleOnClick = (index) => {
  if (!document.body.classList.contains("toggled")) {
    toggle();
    anime({
      targets: ".tile",
      opacity: 0,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
  }
};

const createTile = (index) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.style.opacity = 1;
  tile.onclick = (e) => handleOnClick(index);
  return tile;
};

const createTiles = (quantity) => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
};

const createGrid = () => {
  wrapper.innerHTML = "";
  const size = 50;
  if (!document.body.classList.contains("toggled")) {
    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(document.body.clientHeight / size);
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    createTiles(columns * rows);
  }
};

createGrid();
window.onresize = () => createGrid();