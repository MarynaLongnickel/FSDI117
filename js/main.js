// =====================
// Cargar Proyectos
// =====================
let projects;

fetch('./data/projects.json')
  .then(response => response.json())
  .then(json => {
    projects = json;

    const projectsListElement = document.querySelector(".projects-list");
    const projectsSize = projects.length;

    for (let i = 0; i < projectsSize; i++) {
      const project = projects[i];

      // Crear tarjeta de proyecto
      projectsListElement.innerHTML += `
        <div class="project-card">
          <a href="${project.repository}" target="_blank">
            <img src="${project.img}" alt="${project.name}" />
            <p>${project.name}</p>
            <p>${project.description}</p>
            <p>${project.year}</p>
            <div id="technology-${i}" class="technologies"></div>
          </a>
        </div>
      `;

      // Agregar tecnologías
      const technologiesElement = document.getElementById(`technology-${i}`);
      const technologiesSize = project.technologies.length;

      for (let j = 0; j < technologiesSize; j++) {
        technologiesElement.innerHTML += `
          <label>${project.technologies[j]}</label>
        `;
      }
    }
  })
  .catch(error => {
    console.error("Error loading projects:", error);
  });

