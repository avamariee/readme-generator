// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([

        /* questions here*/

        // Please enter project title.
        // WHEN I enter my project title
        // THEN this is displayed as the title of the README

        // Please enter your Description information.
        // Please enter your Installation instructions.
        // Please enter your Usage information.
        // Please enter your Contributing guidelines.
        // Please enter your Test instructions.
        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests



        // Please enter your License information.
        // WHEN I choose a license for my application from a list of options
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under


        // Please enter your contact information for any Questions.
        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

        
        // Please enter your Table of Contents information.
        // WHEN I click on the links in the Table of Contents
        // THEN I am taken to the corresponding section of the README


    ])
        .then(answers => {
            // user feedback

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

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
