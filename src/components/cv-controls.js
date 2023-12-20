const formControls = () => {
  const div = document.createElement("div");
  div.classList.add("form-controls", "fs-6");

  const clearBtn = document.createElement("button");
  clearBtn.textContent = "Clear Resume";

  const loadBtn = document.createElement("button");
  loadBtn.textContent = "Load Sample";

  div.appendChild(clearBtn);
  div.appendChild(loadBtn);

  return div;
};


export default formControls;