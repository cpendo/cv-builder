import formControls from "./cv-controls";

const createFormElement = (labelName, inputType, id) => {
  const div = document.createElement("div");

  const label = document.createElement("label");
  label.classList.add("form_label");
  label.textContent = labelName;
  label.setAttribute("for", id);

  let input;

  if (inputType === "textarea") {
    input = document.createElement("textarea");
    input.classList.add("form_input", "fs-6");
    input.rows = 3;
  } else {
    input = document.createElement("input");
    input.classList.add("form_input", "fs-6");
    input.type = inputType;
  }

  input.id = id;

  div.appendChild(label);
  div.appendChild(input);

  return div;
};

const createPersonalDetailsForm = () => {
  const form = document.createElement("form");
  //   create form heading
  const heading = document.createElement("h4");
  heading.classList.add("text-start", "text-capitalize");
  heading.textContent = "Personal Details";

  //create form elements
  const nameElement = createFormElement("Name", "text", "name");
  const professionElement = createFormElement(
    "Profession",
    "text",
    "profession"
  );
  const emailElement = createFormElement("Email", "email", "email");
  const numberElement = createFormElement(
    "Phone Number",
    "text",
    "phone-number"
  );
  const repositoryElement = createFormElement("Linked-In", "url", "linked-in");

  form.appendChild(heading);
  form.appendChild(nameElement);
  form.appendChild(professionElement);
  form.appendChild(emailElement);
  form.appendChild(numberElement);
  form.appendChild(repositoryElement);

  return form;
};

const createSummaryForm = () => {
  const form = document.createElement("form");

  //   create form heading
  const heading = document.createElement("h4");
  heading.classList.add("text-start", "text-capitalize");
  heading.textContent = "Summary";

  //create form elements

  const summaryElement = createFormElement("About You", "textarea", "summary");

  form.appendChild(heading);
  form.appendChild(summaryElement);

  return form;
};

const createEducationDetailsForm = () => {
  const form = document.createElement("form");

  //   create form heading
  const heading = document.createElement("h4");
  heading.classList.add("text-start", "text-capitalize");
  heading.textContent = "Education";

  //create form elements
  const schoolElement = createFormElement("School", "text", "school");
  const startDateElement = createFormElement(
    "Start Date",
    "date",
    "start-date1"
  );
  const endDateElement = createFormElement("End Date", "month", "end-date1");
  const degreeElement = createFormElement("Field of Study", "text", "degree");
  const locationElement = createFormElement("Location", "text", "location1");

  form.appendChild(heading);
  form.appendChild(schoolElement);
  form.appendChild(degreeElement);
  form.appendChild(locationElement);
  form.appendChild(startDateElement);
  form.appendChild(endDateElement);

  return form;
};

const createExperienceForm = () => {
  const form = document.createElement("form");

  //   create form heading
  const heading = document.createElement("h4");
  heading.classList.add("text-start", "text-capitalize");
  heading.textContent = "Experience";

  //create form elements
  const companyNameElement = createFormElement(
    "Company Name",
    "text",
    "company-name"
  );
  const titleElement = createFormElement("Job Title", "text", "title");
  const startDateElement = createFormElement(
    "Start Date",
    "date",
    "start-date2"
  );
  const endDateElement = createFormElement("End Date", "date", "end-date2");
  const descriptionElement = createFormElement(
    "Description",
    "textarea",
    "description"
  );

  const locationElement = createFormElement("Location", "text", "location2");

  form.appendChild(heading);
  form.appendChild(companyNameElement);
  form.appendChild(titleElement);
  form.appendChild(locationElement);
  form.appendChild(startDateElement);
  form.appendChild(endDateElement);
  form.appendChild(descriptionElement);

  return form;
};

const loadFormsSection = () => {
  const forms = document.createElement("section");
  forms.classList.add("forms-section");

  forms.appendChild(formControls());

  const personalDetailsForm = createPersonalDetailsForm();
  forms.appendChild(personalDetailsForm);

  const summaryForm = createSummaryForm();
  forms.appendChild(summaryForm);

  const educationDetailsForm = createEducationDetailsForm();
  forms.appendChild(educationDetailsForm);

  const projectsDetailsForm = createExperienceForm();
  forms.appendChild(projectsDetailsForm);

  return forms;
};

export default loadFormsSection;
