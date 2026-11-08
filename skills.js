fetch("skills.json")
  .then(response => response.json())
  .then(data => {
    // Uncomment the next line to debug skill loading
    // console.log("Skills loaded:", data);
    let skills = Object.entries(data);
    const skillsContainer = document.getElementById("skills-container");
    skills.forEach(skill => {
      const skillElement = document.createElement("div");
      if (skill[1].Limited) {
        skillElement.classList.add("limited-skill");
      } else if (skill[1].Alien) {
        skillElement.classList.add("exclusive-skill");
      } else if (skill[1].Unique) {
        skillElement.classList.add("unique-skill");
      } else {
        skillElement.classList.add("common-skill");
      }
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = "skills";
      input.value = skill[0];
      input.id = "skill_" + skill[0].replace(/[^a-zA-Z0-9_-]/g, "");
      skillElement.appendChild(input);
      let label = document.createElement("label");
      label.htmlFor = input.id;
      Object.entries(skill[1]).forEach(([key, value]) => {
        label.title += `${key}: ${value}\n`;
      });
      label.textContent = skill[0];
      skillElement.appendChild(label);
      skillsContainer.appendChild(skillElement);
    });
  })
  .catch(error => {
    console.error("Failed to load skills:", error);
  });