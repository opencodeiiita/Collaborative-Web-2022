console.log("running");
// fetch("https://opencode-hook.onrender.com/get-all-data/?format=json")
fetch("https://leaderboard-response-cache.anurag10jain.repl.co/get-all-data")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    addLb(data.data);
  })
  .catch((err) => console.log(err));

const addLb = (data) => {
  let leaderBoard = document.getElementById("lbHeading");
  data.forEach((el, index) => {
    if (index < 100) {
      let userContainer = document.createElement("li");
      userContainer.className = "customLB lb-li";
      let userRank = document.createElement("div");
      userRank.className = "leaderboardRank";
      userRank.innerHTML = `${index + 1}`;
      let userUsername = document.createElement("div");
      userUsername.className = "leaderboardUsername";
      let lbImage = document.createElement("div");
      lbImage.className = "lbImage";
      let pfp = document.createElement("img");
      pfp.className = "pfp";
      pfp.src = `${el.image}`;
      lbImage.appendChild(pfp);
      let spen = document.createElement("span");
      spen.innerHTML = `${el.username}`;
      userUsername.appendChild(lbImage);
      userUsername.appendChild(spen);

      let userPoints = document.createElement("div");
      userPoints.className = "leaderboardPoints";
      userPoints.innerHTML = `${el.total_points}`;

      userContainer.appendChild(userRank);
      userContainer.appendChild(userUsername);
      userContainer.appendChild(userPoints);
      leaderBoard.appendChild(userContainer);
    }
  });
};

let upButton = document.querySelector(".LBupButton");
let downButton = document.querySelector(".LBdownButton");
console.log(upButton);
upButton.addEventListener("click", LBgoUp);
downButton.addEventListener("click", LBgoDown);
let pgNum = 1;

function LBgoUp() {
  //   console.log("hi");
  if (pgNum > 1) {
    pgNum--;
    let lbList = document.querySelector("#lbHeading");
    lbList.style.transform = `translateY(${-540 * (pgNum - 1)}px)`;
  } else if (pgNum == 1) {
    let lbList = document.querySelector("#lbHeading");
    lbList.style.transform = `translateY(${270}px)`;
    setTimeout(() => {
      lbList.style.transform = `translateY(${0}px)`;
    }, 300);
  }
}
function LBgoDown() {
  if (pgNum < 10) {
    pgNum++;
    let lbList = document.querySelector("#lbHeading");
    lbList.style.transform = `translateY(${-540 * (pgNum - 1)}px)`;
  } else if (pgNum == 10) {
    let lbList = document.querySelector("#lbHeading");
    lbList.style.transform = `translateY(${-5400 + 540 - 270}px)`;
    setTimeout(() => {
      lbList.style.transform = `translateY(${-5400 + 540}px)`;
    }, 300);
  }
}
