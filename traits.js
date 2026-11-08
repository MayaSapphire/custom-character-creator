fetch("traits.json")
  .then(response => response.json())
  .then(data => {
    // Uncomment the next line to debug trait loading
    // console.log("Traits loaded:", data);
    let traits = Object.entries(data);
    const traitsContainer = document.getElementById("traits-container");
    traits.forEach(trait => {
      const traitElement = document.createElement("div");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = "traits";
      input.value = trait[0];
      input.id = "trait_" + trait[0].replace(/[^a-zA-Z0-9_-]/g, "");
      traitElement.appendChild(input);
      let label = document.createElement("label");
      label.htmlFor = input.id;
      Object.entries(trait[1]).forEach(([key, value]) => {
        label.title += `${key}: ${value}\n`;
      });
      label.textContent = trait[0];
      traitElement.appendChild(label);
      traitsContainer.appendChild(traitElement);
    });
  })
  .catch(error => {
    console.error("Failed to load traits:", error);
  });