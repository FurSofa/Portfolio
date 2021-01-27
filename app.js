// const projects = require("./projectsData")
// import projects from "./projectsData"

function generateProjectCards(projectsArray) {
  console.log("ini projects cards");
  // get repos from github
  // destructure into

  projectsArray.forEach(({ name, image, info, link }) => {
    const projectsContainer = document.getElementById("projects-container");

    let projectCard = document
      .createElement("div")
      .setAttribute("class", "card");

    let projectImage = document.createElement("img");
    projectImage.setAttribute("class", "projectImage");
    projectImage.setAttribute("src", "");
    projectImage.setAttribute("alt", "project Image");

    let projectName = document
      .createElement("h4")
      .setAttribute("class", "projectName");
    let projectInfo = document
      .createElement("p")
      .setAttribute("class", "projectInfo");
    let projectLink = document
      .createElement("a")
      .setAttribute("class", "projectLink");

    console.log(projectsContainer);

    projectsContainer.appendChild(document.createTextNode(projectCard));
    projectCard.appendChild(document.createTextNode(projectImage));
    projectCard.appendChild(document.createTextNode(projectName));
    projectCard.appendChild(document.createTextNode(projectInfo));
    projectCard.appendChild(document.createTextNode(projectLink));

    projectName.innerHTML = name;
    projectImage.innerHTML = image;
    projectInfo.innerHTML = info;
    projectLink.innerHTML = link;
  });
  console.log("complete projects cards");
}
function main() {
  console.log("init");
  generateProjectCards(projects);
  console.log("complete");
}

main();
