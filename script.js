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
        <p class="command"><span style="color: rgb(5, 206, 145);">about</span> - about Amlendra</p>
        <p class="command"><span style="color: rgb(5, 206, 145);">education</span> - my education background</p>
        <p class="command"><span style="color: rgb(5, 206, 145);">help</span> - check available commands</p>
        <p class="command"><span style="color: rgb(5, 206, 145);">projects</span> - view projects that I've coded</p>
        <p class="command"><span style="color: rgb(5, 206, 145);">certifications</span> - about my certifications</p>
        <p class="command"><span style="color: rgb(5, 206, 145);">contacts</span> - my contacts</p>
        <p class="command"><span style="color: rgb(5, 206, 145);">contact</span> - my contact</p>
        <p class="command"><span style="color: rgb(5, 206, 145);">skills</span> - my skills</p>`;
      break;
    case "about":
      outputElement.innerHTML =
        "<p>Experienced System Administrator with over 2 years and 8 months of hands-on expertise in Windows, Linux administration and UiPath administration, cloud technologies (AWS and Azure), automation tools (puppet, uipath), and proficiency in Python. Seeking a challenging position to leverage my skills in system administration, cloud computing, and automation.</p>";
      break;
    case "projects":
      outputElement.innerHTML = `
        <p>My Projects:</p>
        <ul>
          <li>
            <b>Build Private Cloud Server | VPN, Network Storage, Media Server, Docker</b>
            <p>Transformed old laptop into versatile home server: network storage, media streaming, remote access.</p>
            <p>Utilized Ubuntu Server, Samba, Jellyfin, WireGuard for comprehensive setup.</p>
            <p>Achieved e-waste, cost savings and enhanced data accessibility.</p>
            <p>Used as Personal EC2 Instance which can be SSH from anywhere.</p>
          </li>
          <li>
            <b>Automated Build CI/CD pipelines | Git, Jenkins, Maven, Ansible, Docker and Kubernetes, AWS</b>
            <p>Automated the build process using maven, ensuring consistency and reproducibility across environments.</p>
            <p>Packaged the application as a WAR file for efficient deployment to containerized environments.</p>
            <p>Served as the central orchestration platform, triggering builds, running tests, and deploying artifacts.</p>
            <p>Provisioned and configured target environments (Dev, Test, Prod) using Infrastructure as Code (IaC) for consistency and repeatability.</p>
          </li>
          </ul>
      `;
      break;
     case "skills":
      outputElement.innerHTML = `
        <div>
          <h3>Languages:</h3>
          <ul>
            <li>C/C++</li>
            <li>Bash</li>
            <li>Powershell scripting</li>
            <li>Javascript</li>
          </ul>
          <h3>Cloud Platform:</h3>
          <ul>
            <li>Azure (Certified)</li>
            <li>AWS</li>
          </ul>
          <h3>Developer Tools:</h3>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>Gitlab</li>
            <li>Terraform</li>
          </ul>
          <h3>Configuration Management:</h3>
          <ul>
            <li>Puppet</li>
            <li>Ansible</li>
          </ul>
          <h3>IAAC:</h3>
          <ul>
            <li>Azure ARM</li>
            <li>Terraform</li>
          </ul>
          <h3>IT Service Management:</h3>
          <ul>
            <li>ServiceNow</li>
            <li>Jira</li>
          </ul>
        </div>
      `;
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
        "<p>Contact:</p><ul><li>Email: amlendra231@gmail.com</li><li>Phone: +91-7240xxxxxx</li><li>GitHub: <a href='https://github.com/annuv231' target='_blank'>GitHub.com/annuv231</a></li></ul>";
      break;
    default:
      outputElement.innerHTML =
        "<p>Command not found. Type 'help' for a list of commands</p>";
  }
}
