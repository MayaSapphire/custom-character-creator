fetch("glory-paths.json")
  .then(response => response.json())
  .then(data => {
    console.log("Glory paths loaded:", data);
    let gloryPaths = data;
    // convert glorypaths to array
    gloryPaths = Object.entries(gloryPaths);
    let gloryPathContainer = document.getElementById("glory_path_container");
    if (!gloryPathContainer) {
      console.error("Glory path container not found in the DOM.");
      return;
    }
    // Clear previous radio buttons if any
    gloryPathContainer.innerHTML = "";
    for (let gloryPath of gloryPaths) {
      console.log("Adding glory path:", gloryPath);
      // Sanitize the id to avoid invalid characters
      let sanitizedId = "glory_path_" + gloryPath[0].replace(/[^a-zA-Z0-9_-]/g, "");
      let radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "glory_path";
      radioInput.id = sanitizedId;
      radioInput.value = gloryPath[0];

      let label = document.createElement("label");
      label.htmlFor = sanitizedId;
      let title = "";
      for (let key in gloryPath[1]) {
        if (gloryPath[1].hasOwnProperty(key)) {
          title += `${gloryPath[1][key]}\n`;
        }
      }
      label.title = title;
      label.append(radioInput, ` ${gloryPath[1].name || gloryPath[0]}`);
      gloryPathContainer.appendChild(label);
    }
  })
  .catch(error => {
    console.error("Failed to load glory paths:", error);
  });
