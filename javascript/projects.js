fetch("./data/project.json")
  .then(res => res.json())
  .then(data => {
    const projectsContainer = document.getElementById("projects");
    data.forEach(project => {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = project.image; // Replace with default image for projects
      card.appendChild(img);

      const title = document.createElement("h3");
      title.textContent = project.name;
      card.appendChild(title);

      const description = document.createElement("p");
      description.textContent = project.description;
      card.appendChild(description);

      const link = document.createElement("a");
      link.href = project.repo_url;
      link.textContent = "View on GitHub";
      card.appendChild(link);

      projectsContainer.appendChild(card);
    });
  });
