fetch("./data/mentors.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {

var mainContainer = document.getElementById("mentors_cards");
for (var i = 0; i < data.length; i++) {
  let element = document.createElement("div");
  element.className = "mentor_card";

    const imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    const image = document.createElement("img");
    image.src = `${data[i].imageurl}`;
    image.className = "mentorImage";

  
    const name = document.createElement("h2");
    name.innerHTML = `${data[i].name}`;
    name.className = "mentorName";

    const logoDiv = document.createElement("div");
    logoDiv.className = "logoDiv";
    const fb = document.createElement("a");
    fb.target = "_blank";
    fb.href = `${data[i].facebook}`;
    fb.innerHTML = '<i class="fab fa-facebook fa-2x fa-solid "></i>';
    fb.className = "icon";

    const github = document.createElement("a");
    github.href = `${data[i].github}`;
    github.target = "_blank";
    github.innerHTML = '<i class="fab fa-github fa-2x fa-solid"></i>';
    github.className = "icon";

    const twitter = document.createElement("a");
    twitter.href = `${data[i].twitter}`;
    twitter.target = "_blank";
    twitter.innerHTML = '<i class="fab fa-twitter fa-2x fa-solid"></i>';
    twitter.className = "icon";

    imgDiv.appendChild(image);
    logoDiv.appendChild(fb);
    logoDiv.appendChild(github);
    logoDiv.appendChild(twitter);
    element.appendChild(imgDiv);
    element.appendChild(name);
    element.appendChild(logoDiv);
    mainContainer.appendChild(element);
  }
}