// Return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license){
    // If there is no license, return an empty string
    return "";
  } else {
    // Return badge
    return `![$[license} license badge](https://img.shields.io/badge/license-${data.license}-blue/)`;
  }
}

// Generate markdown file for README using captured inquirer.js input
const generateMarkdown = data => {
  return `
  
  # ${data.title}
  ![License for README](https://img.shields.io/badge/license-${data.license}-blue/)

  ## Description
  ${data.description}

  ## Preview
  ![Your Picture Here](add relative path)

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#License)
  * [Contributions](#Contributions)
  * [Test](#Test)
  * [Questions](#Questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  // Return/display the license section of README

  function renderLicenseSection(data) {
    // If there is no license, return an empty string
    if (!data.license){
      return "";
    } 
    else {
      let currentYear = new Date().getFullYear();
    }

  ## Contribute
  ${data.contribute}

  ## Test
  ${data.test}

  ## Questions
  If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my work at https://github.com/${data.github}.

`;
}

// Export data to create Markdown file 
module.exports = generateMarkdown;
