// Import the icons from the icons.js file
import { contentIcon, customizeIcon, downloadIcon } from "./icons";

const createIcon = (icon) => {
  const iconElement = document.createElement("i");
  iconElement.classList.add("d-block");
  iconElement.innerHTML = icon.html;

  return iconElement;
};

const createContentBtn = () => {
  const button = document.createElement("button");
  button.classList.add("btn");
  const icon = createIcon(contentIcon);
  button.appendChild(icon);

  const span = document.createElement("span");
  span.textContent = "Content";

  button.appendChild(span);

  return button;
};

const createCustomizeBtn = () => {
  const button = document.createElement("button");
  button.classList.add("btn");
  const icon = createIcon(customizeIcon);
  button.appendChild(icon);

  const span = document.createElement("span");
  span.textContent = "Customize";

  button.appendChild(span);

  return button;
};

const createDownloadBtn = () => {
  const button = document.createElement("button");
  button.classList.add("btn", "download-btn");
  const icon = createIcon(downloadIcon);
  button.appendChild(icon);

  const span = document.createElement("span");
  span.textContent = "Download";

  button.appendChild(span);

  return button;
};

const loadButtonsSection = () => {
  const buttons = document.createElement("section");
  buttons.classList.add("buttons-section");

  buttons.appendChild(createContentBtn());
  buttons.appendChild(createCustomizeBtn());
  buttons.appendChild(createDownloadBtn());

  return buttons;
};

export default loadButtonsSection;
