const skillsData = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "PHP"]
  },
  {
    category: "Databases & Querying",
    items: ["MySQL", "SQL Joins", "Aggregations", "Database Schema Design"]
  },
  {
    category: "Data Analytics & Visualization",
    items: ["Data Preprocessing", "Data Cleaning", "EDA", "Power BI", "MS Excel (VLOOKUP, Pivot Tables)", "Jupyter Notebook"]
  },
  {
    category: "AI & Machine Learning",
    items: ["Deep Learning Concepts", "Image Preprocessing", "Feature Extraction"]
  },
  {
    category: "Developer & Productivity Tools",
    items: ["GitHub", "ChatGPT", "Gemini", "NotebookLM"]
  }
];

const projectsData = [
  {
    title: "Fruit Quality Analysis using Deep Learning Techniques",
    year: "2026",
    stack: ["Python", "Deep Learning", "Computer Vision"],
    summary:
      "Designed and trained an automated computer vision model using Python and deep learning frameworks to classify and evaluate fruit quality from images for agricultural and commercial inspection.",
    points: [
      "Cleaned and preprocessed image datasets via normalization, resizing, and data augmentation to improve generalization.",
      "Extracted spatial and color features to train deep learning classification architectures.",
      "Evaluated accuracy, precision, and loss curves to tune hyperparameters and reduce misclassification rates."
    ]
  },
  {
    title: "Online Evaluation Portal",
    year: "2024",
    stack: ["PHP", "SQL", "HTML/CSS", "MySQL"],
    summary:
      "Developed a full-stack web application to digitize and automate student academic evaluation, allowing instructors to submit assessments and staff to review performance metrics.",
    points: [
      "Engineered a normalized MySQL relational database for student records, course data, and evaluation scores.",
      "Built dynamic PHP backend scripts for SQL joins, aggregations, and automated score calculations.",
      "Created a user-friendly interface with session management and role-based access for students and faculty."
    ]
  }
];

const educationData = [
  {
    degree: "Master of Science (M.Sc.) in Computer Science",
    institution: "Sri Meenakshi Government Arts College for Women (A)",
    period: "2024 – 2026",
    score: "CGPA: 8.7 / 10"
  },
  {
    degree: "Bachelor of Science (B.Sc.) in Computer Science",
    institution: "Sri Meenakshi Government Arts College for Women (A)",
    period: "2021 – 2024",
    score: "CGPA: 8.8 / 10"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "M.A.N.U Girls Higher Secondary School",
    period: "2021",
    score: "Grade: 88%"
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "M.A.N.U Girls Higher Secondary School",
    period: "2019",
    score: "Grade: 88%"
  }
];

function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  container.innerHTML = skillsData
    .map(
      (group) => `
      <article class="card">
        <h3>${group.category}</h3>
        <div class="tag-list">
          ${group.items.map((item) => `<span class="tag">${item}</span>`).join("")}
        </div>
      </article>
    `
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = projectsData
    .map(
      (proj) => `
      <article class="card">
        <div class="card-header">
          <div>
            <h3>${proj.title}</h3>
            <div class="tag-list">
              ${proj.stack.map((tech) => `<span class="tag">${tech}</span>`).join("")}
            </div>
          </div>
          <span class="badge">${proj.year}</span>
        </div>
        <p style="margin-bottom: 0.75rem;">${proj.summary}</p>
        <ul class="bullet-list">
          ${proj.points.map((pt) => `<li>${pt}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");
}

function renderEducation() {
  const container = document.getElementById("education-list");
  if (!container) return;

  container.innerHTML = educationData
    .map(
      (edu) => `
      <article class="card">
        <div class="card-header">
          <h3>${edu.degree}</h3>
          <span class="badge">${edu.period}</span>
        </div>
        <p>${edu.institution}</p>
        <p class="edu-score">${edu.score}</p>
      </article>
    `
    )
    .join("");
}

function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("portfolio-theme");

  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
    if (toggleBtn) toggleBtn.textContent = saved === "dark" ? "☀️" : "🌙";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("portfolio-theme", next);
      toggleBtn.textContent = next === "dark" ? "☀️" : "🌙";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderEducation();
  initTheme();

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
            
