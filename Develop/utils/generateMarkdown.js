// Return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license){
    // If there is no license, return an empty string
    return "";
  } else {
    // Return badge
    // String manipulation for badge creation
    license = license.split(" ").join("%20");
    //.replace(/ /g, "-");
    return `![License for README](https://img.shields.io/badge/license-${license}-green/)`;
  }
}

// Return/display the license section of README

function renderLicenseSection(data) {
  // If there is no license, return an empty string
  if (!data.license){
    return "";
  } 
    let currentYear = new Date().getFullYear();
    let creatorName = data.name;

    if (data.license === "MIT") {
      let mitLicense = `
  ### MIT License

  Copyright ${currentYear} ${creatorName}

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    
  return mitLicense;

    } else if (data.license === "Apache License 2.0") {
        let apacheLicense = `
  ### Apache License 2.0

  Copyright ${currentYear} ${creatorName}
        
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
        
  http://www.apache.org/licenses/LICENSE-2.0
             
  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License`
    
  return apacheLicense;

  } else if (data.license === "The Unlicense") {
      let unLicense = `
### The Unlicense

Copyright ${currentYear} ${creatorName}

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>`

return unLicense;
}
};

// Generate markdown file for README using captured inquirer.js input
const generateMarkdown = data => {
  return `
  
  # ${data.title}
  ${renderLicenseBadge(data.license)}


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
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data)}
  

  ## Contributions
  ${data.contribute}


  ## Test
  ${data.test}

  
  ## Questions
  If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my work on 
  ![GitHub](/Develop/assets/images/github-brands.svg) [My GitHub Profile](https://github.com/${data.github}).

`;
}

// Export data to create Markdown file 
module.exports = generateMarkdown;
