// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([

        /* questions here*/

        // Please enter project title.
        // WHEN I enter my project title
        // THEN this is displayed as the title of the README
        {
            type: 'input',
            name: 'title',
            message: 'Please enter your project title. (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You must enter your project title!')
                    return false;
                }
            }
        },
        // Please enter your Description information.
        {
            type: 'input',
            name: 'description',
            message: 'Please enter your project description. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You must enter a description!')
                    return false;
                }
            }
        },
        // Please enter your Installation instructions.
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions for your app. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You must enter installation instructions!')
                    return false;
                }
            }
        },
        // Please enter your Usage information.
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the usage of your application. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You must enter usage information!')
                    return false;
                }
            }
        },
        // Please enter your Contributing guidelines.
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution guidelines for your application. (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('You must enter contribution guidelines!')
                    return false;
                }
            }
        },
        // Please enter your Test instructions.
        {
            type: 'input',
            name: 'test',
            message: 'Please enter any testing instructions. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('You must enter testing instructions!')
                    return false;
                }
            }
        },

        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

        // Please enter your License information.
        {
            type: 'list',
            name: 'license',
            message: 'Please select any applicable licenses.',
            choices: ['MIT', 'Apache', 'Boost', 'Unlicense']
        },
        // WHEN I choose a license for my application from a list of options
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under


        // Please enter your contact information for any Questions.
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter your GitHub username. (Required)',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('You must enter your GitHub username!')
                    return false;
                }
            }
        },
        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You must enter your email address!")
                    return false;
                }
            }
        },
        // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

    ])
        .then(answers => {
            console.log(answers)
            // user feedback
           
            const text = generateMarkdown(answers);
            console.log(text);
            writeToFile('./index.md', text)
        })
        .catch(error => {
            if (error.isTtyError) {
                // prompt couldn't be rendered
            } else {
                // something else went wrong
            }
        })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFileSync(fileName, data);

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
