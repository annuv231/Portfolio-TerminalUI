document.addEventListener("DOMContentLoaded", function () {
  // Display initial message
  const outputElement = document.querySelector(".body");
  outputElement.innerHTML += "<p>Type 'help' for a list of commands</p>";

  // Handle user input
  const inputElement = document.getElementById("commandInput");
  inputElement.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const command = inputElement.value.toLowerCase();
      handleCommand(command);
      inputElement.value = "";
    }
  });
});

function handleCommand(command) {
  const outputElement = document.querySelector(".body");
  switch (command) {
    case "help":
      outputElement.innerHTML = `
        <p>Available commands:</p>
        <div class="command">
          <span style="color: rgb(5, 206, 145);">about</span>               - <span class="description">about Amlendra</span>
        </div>
        <div class="command">
          <span style="color: rgb(5, 206, 145);">education</span>       - <span class="description">my education background</span>
        </div>
        <div class="command">
          <span style="color: rgb(5, 206, 145);">help</span>                   - <span class="description">check available commands</span>
        </div>
        <div class="command">
          <span style="color: rgb(5, 206, 145);">projects</span>            - <span class="description">view projects that I've coded</span>
        </div>
        <div class="command">
          <span style="color: rgb(5, 206, 145);">certifications</span>    - <span class="description">about my certifications</span>
        </div>
        <div class="command">
          <span style="color: rgb(5, 206, 145);">contacts</span>            - <span class="description">my contacts</span>
        </div>
        <div class="command">
          <span style="color: rgb(5, 206, 145);">skills</span>                    - <span class="description">my skills</span>
        </div>`;
      break;
    case "about":
      outputElement.innerHTML =
        "<p>Experienced System Administrator with over 2 years and 8 months of hands-on expertise in Windows, Linux administration and UiPath administration, cloud technologies (AWS and Azure), automation tools (puppet, uipath), and proficiency in Python. Seeking a challenging position to leverage my skills in system administration, cloud computing, and automation.</p>";
      break;
    case "projects":
      outputElement.innerHTML =
        "<p>My Projects:</p><ul><li>Project 1</li><li>Project 2</li><li>Project 3</li></ul>";
      break;
    case "skills":
      outputElement.innerHTML =
        "<div>p>- Operating System: Linux, Windows</p> <p>- Language: C++, Python, Shell scripting</p<p>- Automation: Puppet</p> <p>- Version Control: Github, Gitlab</p> <p>- Containerization: Docker, K8s</p> <p>- Agile Development</p> <p>- AWS, Azure, Terraform, UiPath</p> <br /></div>";
      break;
    case "certifications":
      outputElement.innerHTML =
        "<p>Certifications:</p><ul><li>AZ-900 (Azure fundamental certified) - Microsoft(2024)</li><li>Data Structure and Algorithm Certification - GeeksForGeeks(2019)</li></ul>";
      break;
    case "achievements":
      outputElement.innerHTML =
        "<p>Achievements:</p><ul><li>Recognized as star of the Month in company</li><li>Won many on the spot award for excellence performance</li><li>Active in extracurricular activities</li></ul>";
      break;
    case "education":
      outputElement.innerHTML =
        "<p>Education:</p><p>Bachelor of Technology (B.Tech), Computer Science & Engineering</p><p>Bundelkhand Institute of Engineering And Technology, Jhansi</p><p>7/2016 - 08/2020</p>";
      break;

    case "contact":
      outputElement.innerHTML =
        "<p>Contact:</p><ul><li>Email: amlendra231@gmail.com</li><li>Phone: +91-7240562966</li><li>GitHub: <a href='https://github.com/annuv231' target='_blank'>GitHub.com/annuv231</a></li></ul>";
      break;
    default:
      outputElement.innerHTML =
        "<p>Command not found. Type 'help' for a list of commands</p>";
  }
}
