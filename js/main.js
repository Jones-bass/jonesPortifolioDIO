function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;

  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;

  const github = document.getElementById("profile.github");
  github.innerText = profileData.github;

  const linkedin = document.getElementById("profile.linkedin");
  linkedin.innerText = profileData.linkedin;
}

function updatehardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`
    )
    .join("");
}

function updatesoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updatelanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((languages) => `<li>${languages}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((portfolio) => `<li><h3 class="title github">${portfolio.name}</h3>
        <a href="${portfolio.url}" target="_blank">${portfolio.url}</a></li>`
    )
    .join("");
}

function updateCourse(profileData) {
  const course = document.getElementById("profile.course");
  course.innerHTML = profileData.course
    .map((course) => `<li><h3 class="title">${course.name}</h3>
    <p class="period">${course.period}</p></li>`
    ).join("");
}

function updateExperience(profileData) {
  const experience = document.getElementById("experience.course");
  experience.innerHTML = profileData.experience
    .map((experience) => `<li><h3 class="title">${experience.name}</h3>
    <p class="period">${experience.period}</p><p class="period">${experience.office}</p></li>`
    ).join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updatehardSkills(profileData);
  updatesoftSkills(profileData);
  updatelanguages(profileData);
  updatePortfolio(profileData);
  updateCourse(profileData);
  updateExpirence(profileData);
})();
