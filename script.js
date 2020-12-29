const projects = [
  {
    Name: "article_preview_component",
    Difficulty: "Newbie",
    Github:
      "https://github.com/ArchitAdh/frontend-mentor-challenges/tree/master/article_preview_component",
  },
  {
    Name: "fylo-data-storage-component-master",
    Difficulty: "Junior",
    Github:
      "https://github.com/ArchitAdh/frontend-mentor-challenges/tree/master/fylo-data-storage-component-master",
  },
  {
    Name: "fylo-landing-page-with-two-column-layout-master",
    Difficulty: "Junior",
    Github:
      "https://github.com/ArchitAdh/frontend-mentor-challenges/tree/master/fylo-landing-page-with-two-column-layout-master",
  },
  {
    Name: "pricing-component-with-toggle-master",
    Difficulty: "Junior",
    Github:
      "https://github.com/ArchitAdh/frontend-mentor-challenges/tree/master/pricing-component-with-toggle-master",
  },
  {
    Name: "social-media-dashboard-with-theme-switcher-master",
    Difficulty: "Junior",
    Github:
      "https://github.com/ArchitAdh/frontend-mentor-challenges/tree/master/social-media-dashboard-with-theme-switcher-master",
  },
  {
    Name: "social-proof-section-master",
    Difficulty: "Newbie",
    Github:
      "https://github.com/ArchitAdh/frontend-mentor-challenges/tree/master/social-proof-section-master",
  },
];

const list = document.getElementById("list");

projects.forEach(({ Name, Difficulty, Github }) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <a href = "/${Name}/dist">
    <img src = "/${Name}/design/desktop-design.jpg" alt = "${Name}" />
    <p> ${formatProjectName(Name)} </p>
    </a>
  `;
  list.appendChild(listItem);
});

function formatProjectName(Name) {
  return Name.split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
