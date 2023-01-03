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

      let userExtraInfo = document.createElement("div");
      userExtraInfo.className = "extraUserInfo";
      userExtraInfo.style.top = `${-40 * index}px`;

      let extraInfoArray = el.points_per_pr;
      let jsonData = [
        { DonateASmile: 0 },
        { "Cyber-War": 0 },
        { "SaveMyForm-Frontend": 0 },
        { HandsForHunger: 0 },
        { "Lets-Design-3.0": 0 },
        { "Forum-Frontend-Web": 0 },
        { "OC-discord-bot": 0 },
        { WorkWise: 0 },
        { "Code-Digger": 0 },
        { "GoGit-2.0": 0 },
        { SolMintNFT: 0 },
        { "Collaborative-Web-2022": 0 },
        { "Learning-Smart-Contracts": 0 },
        { "SaveMyForm-Backend": 0 },
        { SuperQuizzer: 0 },
        { Leaderboard: 0 },
        { CampusOLX: 0 },
        { Aloha: 0 },
        { Fitezo: 0 },
        { "Forum-Backend": 0 },
        { "ZoombieMania-": 0 },
        { EmotionAnalysis: 0 },
        { "HINT-x-GeekHaven": 0 },
        { "Code-Trouble": 0 },
      ];
      let indexKey = [
        "DonateASmile",
        "Cyber-War",
        "SaveMyForm-Frontend",
        "HandsForHunger",
        "Lets-Design-3.0",
        "Forum-Frontend-Web",
        "OC-discord-bot",
        "WorkWise",
        "Code-Digger",
        "GoGit-2.0",
        "SolMintNFT",
        "Collaborative-Web-2022",
        "Learning-Smart-Contracts",
        "SaveMyForm-Backend",
        "SuperQuizzer",
        "Leaderboard",
        "CampusOLX",
        "Aloha",
        "Fitezo",
        "Forum-Backend",
        "ZoombieMania-",
        "EmotionAnalysis",
        "HINT-x-GeekHaven",
        "Code-Trouble",
      ];
      extraInfoArray.forEach((pr) => {
        for (let i = 0; i < indexKey.length; i++) {
          if (pr.repoName == indexKey[i]) {
            jsonData[i][indexKey[i]] += pr.points;
            break;
          }
        }
      });
      // if (index == 6) console.log(jsonData);
      tempUl = document.createElement("ul");
      tempUl.className = "extraUl";
      let tempLiHead = document.createElement("div");
      tempSpan1Head = document.createElement("span");
      tempSpan2Head = document.createElement("span");
      tempSpan2Head.className = "extraInfoLiRight extraHead";
      tempSpan1Head.className = "extraInfoLiLeft extraHead";
      tempSpan1Head.innerHTML = "Repositry Name";
      tempSpan2Head.innerHTML = "Points";
      tempLiHead.appendChild(tempSpan1Head);
      tempLiHead.appendChild(tempSpan2Head);
      userExtraInfo.appendChild(tempLiHead);
      jsonData.forEach((data, index) => {
        if (data[indexKey[index]] > 0) {
          tempLi = document.createElement("li");
          tempLi.className = "extraInfoLi";
          let tempSpan1 = document.createElement("span");
          let tempSpan2 = document.createElement("span");
          tempSpan1.className = "extraInfoLiLeft";
          tempSpan2.className = "extraInfoLiRight";
          tempSpan1.innerHTML = `${indexKey[index]}:`;
          tempSpan2.innerHTML = data[indexKey[index]];
          // tempLi.innerHTML = `${indexKey[index]}:${data[indexKey[index]]}`;
          tempLi.appendChild(tempSpan1);
          tempLi.appendChild(tempSpan2);
          tempUl.appendChild(tempLi);
        }
      });
      userExtraInfo.appendChild(tempUl);
      userContainer.appendChild(userExtraInfo);
      userContainer.appendChild(userRank);
      userContainer.appendChild(userUsername);
      userContainer.appendChild(userPoints);
      leaderBoard.appendChild(userContainer);
    }
  });
};

let upButton = document.querySelector(".LBupButton");
let downButton = document.querySelector(".LBdownButton");
// console.log(upButton);
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
