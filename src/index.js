import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

import loadButtonsSection from "./components/side-nav";
import loadFormsSection from "./components/forms";
import loadTemplateTwo from "./components/templates/template-two";

const main = document.querySelector("main");
main.classList.add("container-fluid", "d-flex", "justify-content-between");

const div = document.createElement("div");
div.classList.add("d-flex", "flex-column", "flex-md-row", "sections-container");

const sectionGroup = document.createElement("div");
sectionGroup.classList.add(
  "d-flex",
  "flex-column",
  "flex-lg-row",
  "sections-group"
);
sectionGroup.appendChild(loadButtonsSection());
sectionGroup.appendChild(loadFormsSection());

div.appendChild(sectionGroup);
div.appendChild(loadTemplateTwo());

function loadPage() {
  main.appendChild(div);
}

loadPage();
