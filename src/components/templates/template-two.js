import "../../styles/template-two.css";

const createNameDiv = () => {
  const div = document.createElement("div");
  div.classList.add("name_div");

  const name = document.createElement("p");
  name.classList.add("display-4", "m-0");
  name.style.fontWeight = 500;

  name.textContent = "Cynthia Pendo";

  const title = document.createElement("p");
  title.classList.add("fs-6", "m-0");
  title.textContent = "software developer";

  div.appendChild(name);
  div.appendChild(title);

  return div;
};

const createDetailsDiv = () => {
  const div = document.createElement("div");
  div.classList.add("details_div");

  const number = document.createElement("p");
  number.classList.add("fs-6", "m-0");
  number.textContent = "Tel: " + "071234567";

  const email = document.createElement("p");
  email.classList.add("fs-6", "m-0");
  email.textContent = "Email: " + "example@test.com";

  const repository = document.createElement("p");
  repository.classList.add("fs-6", "m-0");
  repository.textContent = "Repo: " + "example@test.com";

  div.appendChild(number);
  div.appendChild(email);
  div.appendChild(repository);

  return div;
};

const createHeading = () => {
  const div = document.createElement("div");
  div.classList.add("cv_heading", "mb-5");

  const nameDiv = createNameDiv();
  const detailsDiv = createDetailsDiv();

  div.appendChild(nameDiv);
  div.appendChild(detailsDiv);

  return div;
};

const createSummarySection = () => {
  const div = document.createElement("div");
  div.classList.add("summary_div");

  const heading = document.createElement("h3");
  heading.textContent = "summary";

  const summaryText = document.createElement("p");
  summaryText.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit perferendis eveniet consequatur ea perspiciatis, officia eius esse mollitia? Minus, omnis.";
  summaryText.textContent +=
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit perferendis eveniet consequatur ea perspiciatis, officia eius esse mollitia? Minus, omnis.";

  div.appendChild(heading);
  div.appendChild(summaryText);

  return div;
};

const createEducationInfo = () => {
  const div = document.createElement("div");
  div.classList.add("education_group");

  const group1 = document.createElement("div");
  const dates = document.createElement("p");
  dates.textContent = "02/2020" + " - " + "04/2023";

  const location = document.createElement("p");
  location.textContent = "Nairobi, Kenya";

  group1.appendChild(dates);
  group1.appendChild(location);

  const group2 = document.createElement("div");
  const schoolName = document.createElement("h5");
  schoolName.textContent = "ALX AFRICA";

  const degree = document.createElement("p");
  degree.textContent = "bachelors of Commerce";

  group2.appendChild(schoolName);
  group2.appendChild(degree);

  div.appendChild(group1);
  div.appendChild(group2);

  return div;
};

const createEducationSection = () => {
  const div = document.createElement("div");
  div.classList.add("education_section");

  const heading = document.createElement("h3");
  heading.textContent = "education";

  const body = document.createElement("div");
  body.classList.add("education_body");

  body.appendChild(createEducationInfo());
  body.appendChild(createEducationInfo());
  body.appendChild(createEducationInfo());

  div.appendChild(heading);
  div.appendChild(body);

  return div;
};

const createExperienceInfo = () => {
  const div = document.createElement("div");
  div.classList.add("experience_group");

  const group1 = document.createElement("div");
  const dates = document.createElement("p");
  dates.textContent = "01/2020" + " - " + "11/2023";

  const location = document.createElement("p");
  location.textContent = "Nairobi, Kenya";

  group1.appendChild(dates);
  group1.appendChild(location);

  const group2 = document.createElement("div");
  const companyName = document.createElement("h5");
  companyName.textContent = "ALX AFRICA";

  const jobTitle = document.createElement("p");
  jobTitle.textContent = "Ux Developer";

  const jobDescription = document.createElement("p");
  jobDescription.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iusto dolor tempora ipsum odit libero aliquid debitis doloribus earum velit. ";

  group2.appendChild(companyName);
  group2.appendChild(jobTitle);
  group2.appendChild(jobDescription);

  div.appendChild(group1);
  div.appendChild(group2);
  return div;
};

const createExperienceSection = () => {
  const div = document.createElement("div");
  div.classList.add("experience_div");

  const heading = document.createElement("h3");
  heading.textContent = "experience";

  const body = document.createElement("div");
  body.classList.add("experience_body");

  body.appendChild(createExperienceInfo());
  body.appendChild(createExperienceInfo());
  body.appendChild(createExperienceInfo());

  div.appendChild(heading);
  div.appendChild(body);

  return div;
};

const createSkillsSection = () => {
  const div = document.createElement("div");
  div.classList.add("skills_section");

  const heading = document.createElement("h3");
  heading.textContent = "skills";

  const skillsUl = document.createElement("ul");

  const skillOne = document.createElement("li");
  skillOne.textContent = "Problem Solving";
  const skillTwo = document.createElement("li");
  skillTwo.textContent = "Team leader";
  const skillThree = document.createElement("li");
  skillThree.textContent = "Problem Solving";

  skillsUl.appendChild(skillOne);
  skillsUl.appendChild(skillTwo);
  skillsUl.appendChild(skillThree);

  div.appendChild(heading);
  div.appendChild(skillsUl);

  return div;
};

const loadTemplateTwo = () => {
  const preview = document.createElement("section");
  preview.classList.add("preview-section");

  const cvBody = document.createElement("div");
  cvBody.classList.add("cv-body");

  cvBody.appendChild(createSummarySection());
  cvBody.appendChild(createEducationSection());
  cvBody.appendChild(createExperienceSection());
  cvBody.appendChild(createSkillsSection());

  preview.appendChild(createHeading());
  preview.appendChild(cvBody);

  return preview;
};

export default loadTemplateTwo;
