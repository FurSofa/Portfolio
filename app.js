// const projects = require("./projectsData")
// import projects from "./projectsData"

function generateProjectCards(projectsArray) {
    console.log('ini projects cards');
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

    projectName.innerHTML = name;
    projectName.innerHTML = image;
    projectName.innerHTML = info;
    projectName.innerHTML = link;

    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectName);
    projectCard.appendChild(projectInfo);
    projectCard.appendChild(projectLink);
    projectsContainer.appendChild(projectCard);
  });
  console.log('complete projects cards');
}
function main() {
    console.log('init');
  generateProjectCards(projects);
  console.log('complete');
}

main();
