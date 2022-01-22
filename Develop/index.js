// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Linking to page where README is developed
const generatePage = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = () => {
  // Use inquirer.js to prompt user for README content
  return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the project title!');
            return false;
          }
        }
    },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You must enter a description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation process. (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You must write installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please describe usage. (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You explain how to use!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Please describe how viewers can make contributions. (Required)',
        validate: contributionsInput => {
          if (contributionsInput) {
            return true;
          } else {
            console.log('You must explain how to make contributions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Users must use npm test',
        default: 'npm test'
      },
      {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache license 2.0', 'Creative Commons Attribution 4.0', 'The Unlicense'],
        message: 'Please select a license. (Required)',
        default: ['MIT'],
        validate: licenseType => {
          if (licenseType) {
            return true;
          }
          else {
            console.log('Please chose a license!');
            return false;
          }
        }
      },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: userNameInput => {
            if (userNameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false; 
            }
        }
      }
    ])
  };

// Write README file
const writeFile = data => {
  fs.writeFile('README.md', data, err => {
    // If there is an error
    if (err) {
      console.log(err);
      return;
    }
    // Confirming successful README creation
    else {
      console.log('Your README.md has been successfully created!');
    }
  })
};

//Function to initialize application
function init() {
  questions()
  // Get user answers from captured input
  .then(answers => {
    return generatePage(answers);
  })
  // Using data to create README file
  .then(data => {
    return writeFile(data);
  })
  // Catching errors
  .catch(err => {
    console.log(err);
  })
};

// Call to initialize app
init();