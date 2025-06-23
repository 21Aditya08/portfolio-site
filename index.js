// Sample project data
const projects = [
  {
    title: "Online Bookstore",
    description: "A web application built with Spring Boot and MySQL.",
    link: "#"
  },
  {
    title: "Sign Language Detector",
    description: "An AI/ML based model to detect sign language gestures.",
    link: "#"
  }
];

// Dynamically render projects
const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const projectDiv = document.createElement("div");
  projectDiv.className = "project";

  projectDiv.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;

  projectList.appendChild(projectDiv);
});
