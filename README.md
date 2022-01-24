
  
  # README-Generator
  ![License for README](https://img.shields.io/badge/license-MIT-green/)

  ## Description
  The application creates a README.md file dynamically from user prompts and is written from the command line using Node.js and inquirer.js.

  ## Preview
  ![sample](/Develop/assets/images/screenshots/sample.png)

  [Video Tutorial Link](https://watch.screencastify.com/v/Lrk2q0hUJpFaxTFJlUlk)
 
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#License)
  * [Contributions](#Contributions)
  * [Credits](#Credits)
  * [Test](#Test)
  * [Questions](#Questions)
  
  ## Installation
  The user will need Node.js on their computer to run; if they do not have that installed they should visit [nodejs.org](https://nodejs.org/en/) to download.

  ![Download Nodejs](/Develop/assets/images/screenshots/nodejs.png)
  
  To run the application, the user must also clone the repository from GitHub on to their local device and open in something like Visual Studio Code. 

  ![cloneRepo](/Develop/assets/images/screenshots/cloneRepo.jpg)
  
  From there, running the terminal, users must run `npm install` to get all the correct packages installed on their computer.

  ![npmInstall](/Develop/assets/images/screenshots/npmInstall.png)


  ## Usage
  To use the application, open the cloned repository in Visual Studio Code (or any code editor).
  
  Once inside the root directory of the source code, run the terminal using $Git Bash (or whatever you prefer) to type `node index.js` to start the application. 

  ![OpenApplication](/Develop/assets/images/screenshots/openFileInTerminal.png)
  
  Complete the answers to the prompts and the README.md file will be dynamically generated for you.

  Be sure to select the appropriate license for your project; the default license is set to MIT. 
  
  *If you would like to add additional licenses to your README-generator, you may add them to the `generateMarkdown.js` file, following the format used for the existing licenses. Be sure to add any additional licenses inside `index.js` to the questions function, under the object: `type: list` and `choices:`, otherwise the application won't work!*
  
  The finished product will contain a title, description of the project, a table of contents with hyperlinks in markdown to the following sections: instructions for installation, usage, license, contributions, optional tests, and contact instructions for questions.

  ![Successful](/Develop/assets/images/screenshots/successful.png)
  
  You may access the generated `README.md` file from within the `dist` folder.

  To further enhance your README file, you may add photos or additional sections, such **Credits** or **Technologies Used**, depending on the project. The current template includes a placeholder for ## Preview, which is not required but a nice feature to display a screenshot of your deployed project.

  ## License
  ![License for README](https://img.shields.io/badge/license-MIT-green/)
  
  ### MIT License

  Copyright 2022 Claire Rosenfrisk

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  

  ## Contribute
  To make contributions to the README-Generator project, please contact me using the information below. 
  
  If you would like to play with the code, please fork or download your own copy to manipulate or change functionality for your own purposes.

  ## Credits 🎉

  * Original source code was cloned from [potential-enigma](https://github.com/coding-boot-camp/potential-enigma) and modified for personal use.

  * NPM Package: [inquirer.js](https://github.com/SBoudrias/Inquirer.js#readme)

  ## Test
  To test, you must have the the project downloaded locally, and run from the root directory. After typing `node index.js` in the terminal from within the root directory, answering the prompts should return the generated README.md file located in the dist folder of the project. Errors should return err in the terminal console.

  ## Questions
  If you have any questions about this project, please contact me directly at claire.rosenfrisk@gmail.com. You can view more of my work on 
  ![GitHub](/Develop/assets/images/github-brands.svg) [My GitHub Profile](https://github.com/crosenfrisk).

